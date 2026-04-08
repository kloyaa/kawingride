import { get, list } from "@vercel/blob";
import { type NextRequest, NextResponse } from "next/server";

import {
  getBlobAssetPrefix,
  getPreferredBlobAssetPathname,
  isBlobAssetName,
  type BlobAssetName,
} from "@/constants/blob-assets";

export const runtime = "nodejs";

const resolvedPathnameCache = new Map<BlobAssetName, string>();

function matchesAssetPathname(pathname: string, prefix: string) {
  return pathname === prefix || pathname.startsWith(`${prefix}-`) || pathname.startsWith(`${prefix}.`);
}

async function resolveBlobPathname(asset: BlobAssetName) {
  const cachedPathname = resolvedPathnameCache.get(asset);

  if (cachedPathname) {
    return cachedPathname;
  }

  const preferredPathname = getPreferredBlobAssetPathname(asset);
  const preferredBlob = await get(preferredPathname, { access: "private" });

  if (preferredBlob) {
    resolvedPathnameCache.set(asset, preferredPathname);

    return preferredPathname;
  }

  const prefix = getBlobAssetPrefix(asset);
  const { blobs } = await list({ prefix, limit: 20 });
  const match = blobs
    .filter((blob) => matchesAssetPathname(blob.pathname, prefix))
    .sort((left, right) => right.uploadedAt.getTime() - left.uploadedAt.getTime())[0];

  if (!match) {
    return null;
  }

  resolvedPathnameCache.set(asset, match.pathname);

  return match.pathname;
}

async function fetchBlob(pathname: string, ifNoneMatch: string | undefined) {
  return get(pathname, {
    access: "private",
    ifNoneMatch,
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ asset: string }> },
) {
  const { asset } = await params;

  if (!isBlobAssetName(asset)) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const ifNoneMatch = request.headers.get("if-none-match") ?? undefined;
    let pathname = await resolveBlobPathname(asset);

    if (!pathname) {
      return new NextResponse("Not found", { status: 404 });
    }

    let result = await fetchBlob(pathname, ifNoneMatch);

    if (!result) {
      resolvedPathnameCache.delete(asset);
      pathname = await resolveBlobPathname(asset);

      if (!pathname) {
        return new NextResponse("Not found", { status: 404 });
      }

      result = await fetchBlob(pathname, ifNoneMatch);
    }

    if (!result) {
      return new NextResponse("Not found", { status: 404 });
    }

    if (result.statusCode === 304) {
      return new NextResponse(null, {
        status: 304,
        headers: {
          ETag: result.blob.etag,
          "Cache-Control": "private, no-cache",
        },
      });
    }

    return new NextResponse(result.stream, {
      headers: {
        "Content-Type": result.blob.contentType,
        "X-Content-Type-Options": "nosniff",
        ETag: result.blob.etag,
        "Cache-Control": "private, no-cache",
      },
    });
  } catch (error) {
    console.error(`Failed to load private blob asset "${asset}"`, error);

    return NextResponse.json(
      { error: "Unable to load asset from blob storage." },
      { status: 500 },
    );
  }
}

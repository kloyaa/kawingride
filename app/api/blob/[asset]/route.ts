import { type NextRequest, NextResponse } from "next/server";

import {
  getPreferredBlobAssetPathname,
  isBlobAssetName,
} from "@/constants/blob-assets";

export const runtime = "nodejs";

const ALLOWED_BLOB_CONTENT_TYPES = new Set(["image/png"]);

function getStoreIdFromToken(token: string) {
  const [, , , storeId = ""] = token.split("_");

  return storeId;
}

function createBlobUrl(pathname: string, token: string) {
  const storeId = getStoreIdFromToken(token);

  if (!storeId) {
    throw new Error("Unable to determine Blob store ID from BLOB_READ_WRITE_TOKEN.");
  }

  return `https://${storeId}.private.blob.vercel-storage.com/${pathname}`;
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
    const token = process.env.BLOB_READ_WRITE_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: "Missing BLOB_READ_WRITE_TOKEN." },
        { status: 500 },
      );
    }

    const ifNoneMatch = request.headers.get("if-none-match") ?? undefined;
    const pathname = getPreferredBlobAssetPathname(asset);
    const response = await fetch(createBlobUrl(pathname, token), {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        ...(ifNoneMatch ? { "If-None-Match": ifNoneMatch } : {}),
      },
      cache: "no-store",
    });

    if (response.status === 404) {
      return new NextResponse("Not found", { status: 404 });
    }

    if (response.status === 304) {
      return new NextResponse(null, {
        status: 304,
        headers: {
          ETag: response.headers.get("etag") ?? "",
          "Cache-Control": "private, no-cache",
        },
      });
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: `Blob request failed with ${response.status} ${response.statusText}.` },
        { status: 502 },
      );
    }

    const body = Buffer.from(await response.arrayBuffer());
    const contentType = response.headers.get("content-type") ?? "application/octet-stream";
    const etag = response.headers.get("etag") ?? "";

    if (!ALLOWED_BLOB_CONTENT_TYPES.has(contentType)) {
      console.error(
        `Rejected blob asset "${asset}" with unexpected content type "${contentType}"`,
      );

      return NextResponse.json(
        { error: "Unexpected asset content type." },
        { status: 502 },
      );
    }

    return new NextResponse(body, {
      headers: {
        "Content-Type": contentType,
        "Content-Length": body.byteLength.toString(),
        "X-Content-Type-Options": "nosniff",
        "Content-Disposition": `inline; filename="${asset}.png"`,
        "Content-Security-Policy": "default-src 'none'; img-src 'self'; script-src 'none'; sandbox",
        ETag: etag,
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

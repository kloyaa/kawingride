const blobAssets = {
  "basic-icon": {
    contentType: "image/png",
    extension: "png",
    filename: "basic-icon",
  },
  "kawing-curious": {
    contentType: "image/png",
    extension: "png",
    filename: "kawing-curious",
  },
  "kawing-glasses": {
    contentType: "image/png",
    extension: "png",
    filename: "kawing-glasses",
  },
  "kawing-idea": {
    contentType: "image/png",
    extension: "png",
    filename: "kawing-idea",
  },
  "kawing-logo": {
    contentType: "image/png",
    extension: "png",
    filename: "kawing-logo",
  },
  "kawing-logo-nav": {
    contentType: "image/svg+xml",
    extension: "svg",
    filename: "kawing-logo",
  },
} as const;

export type BlobAssetName = keyof typeof blobAssets;

export const blobAssetPaths = {
  basicIcon: "/api/blob/basic-icon",
  curious: "/api/blob/kawing-curious",
  glasses: "/api/blob/kawing-glasses",
  idea: "/api/blob/kawing-idea",
  logo: "/api/blob/kawing-logo",
  navLogo: "/api/blob/kawing-logo-nav",
} as const;

const blobAssetPrefix = process.env.BLOB_ASSET_PREFIX ?? "kawings/";

function getNormalizedBlobAssetPrefix() {
  return blobAssetPrefix.endsWith("/") ? blobAssetPrefix : `${blobAssetPrefix}/`;
}

export function isBlobAssetName(value: string): value is BlobAssetName {
  return Object.hasOwn(blobAssets, value);
}

export function getPreferredBlobAssetPathname(asset: BlobAssetName) {
  const blobAsset = blobAssets[asset];

  return `${getNormalizedBlobAssetPrefix()}${blobAsset.filename}.${blobAsset.extension}`;
}

export function getExpectedBlobAssetContentType(asset: BlobAssetName) {
  return blobAssets[asset].contentType;
}

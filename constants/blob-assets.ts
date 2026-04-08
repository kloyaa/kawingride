const blobAssetNames = {
  "basic-icon": "basic-icon",
  "kawing-curious": "kawing-curious",
  "kawing-glasses": "kawing-glasses",
  "kawing-idea": "kawing-idea",
  "kawing-logo": "kawing-logo",
} as const;

export type BlobAssetName = keyof typeof blobAssetNames;

export const blobAssetPaths = {
  basicIcon: "/api/blob/basic-icon",
  curious: "/api/blob/kawing-curious",
  glasses: "/api/blob/kawing-glasses",
  idea: "/api/blob/kawing-idea",
  logo: "/api/blob/kawing-logo",
} as const;

const blobAssetPrefix = process.env.BLOB_ASSET_PREFIX ?? "kawings/";

function getNormalizedBlobAssetPrefix() {
  return blobAssetPrefix.endsWith("/") ? blobAssetPrefix : `${blobAssetPrefix}/`;
}

export function isBlobAssetName(value: string): value is BlobAssetName {
  return Object.hasOwn(blobAssetNames, value);
}

export function getBlobAssetPrefix(asset: BlobAssetName) {
  return `${getNormalizedBlobAssetPrefix()}${blobAssetNames[asset]}`;
}

export function getPreferredBlobAssetPathname(asset: BlobAssetName) {
  return `${getBlobAssetPrefix(asset)}.png`;
}

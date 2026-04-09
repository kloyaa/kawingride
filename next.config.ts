import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";
import { securityHeaders } from "./lib/security/headers";

const rootDirectory = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: rootDirectory,
  },

  reactStrictMode: true,

  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

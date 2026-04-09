type ContentSecurityPolicyOptions = {
  isDev: boolean;
  nonce?: string;
};

const isProduction = process.env.NODE_ENV === "production";

export const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  ...(isProduction
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains",
        },
      ]
    : []),
];

export function buildContentSecurityPolicy({
  isDev,
  nonce,
}: ContentSecurityPolicyOptions) {
  const scriptSources = ["'self'"];

  if (nonce) {
    scriptSources.push(`'nonce-${nonce}'`, "'strict-dynamic'");
  }

  if (isDev) {
    // Next.js development tooling relies on eval-based debugging helpers.
    scriptSources.push("'unsafe-eval'");
  }

  return [
    "default-src 'self'",
    `script-src ${scriptSources.join(" ")}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    [
      "connect-src",
      "'self'",
      "https://psgc.rootscratch.com",
      ...(isDev ? ["https://va.vercel-scripts.com", "ws:", "wss:"] : []),
    ].join(" "),
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}

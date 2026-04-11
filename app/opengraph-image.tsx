import { ImageResponse } from "next/og";

import { APP_NAME } from "@/constants/branding";

const ogImagePalette = {
  pageBackground:
    "radial-gradient(circle at top left, rgba(171,231,178,0.34), transparent 34%), radial-gradient(circle at top right, rgba(147,191,199,0.24), transparent 26%), linear-gradient(135deg, #ecf4e8 0%, #f8fbf6 55%, #ffffff 100%)",
  textPrimary: "#1d2a2d",
  textMuted: "#52656a",
  badgeBackground: "#486f79",
  badgeText: "#ffffff",
  accentText: "#578792",
  pillBackground: "rgba(255,255,255,0.82)",
  pillBorder: "rgba(87,135,146,0.14)",
} as const;

export const alt = `${APP_NAME} platform preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: ogImagePalette.pageBackground,
          color: ogImagePalette.textPrimary,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "72px",
                height: "72px",
                borderRadius: "22px",
                background: ogImagePalette.badgeBackground,
                color: ogImagePalette.badgeText,
                fontSize: "34px",
                fontWeight: 800,
              }}
            >
              K
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "36px", fontWeight: 800 }}>{APP_NAME}</div>
              <div style={{ fontSize: "22px", color: ogImagePalette.accentText, fontWeight: 700 }}>
                Private ride and personal-request coordination
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "900px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontSize: "64px",
                lineHeight: 1.05,
                fontWeight: 800,
              }}
            >
              Trusted local mobility,
              <span style={{ color: ogImagePalette.accentText }}> with more clarity.</span>
            </div>
            <div style={{ fontSize: "28px", lineHeight: 1.4, color: ogImagePalette.textMuted }}>
              Private ride requests, structured negotiation, optional safety updates, and stronger
              accountability for community-based transport.
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px" }}>
            {["Private requests", "Structured negotiation", "Safety-first trust"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "14px 20px",
                  borderRadius: "9999px",
                  background: ogImagePalette.pillBackground,
                  border: `1px solid ${ogImagePalette.pillBorder}`,
                  fontSize: "22px",
                  color: ogImagePalette.textPrimary,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

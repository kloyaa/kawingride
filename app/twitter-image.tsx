import { ImageResponse } from "next/og";

import { APP_NAME } from "@/constants/branding";

const twitterImagePalette = {
  background: "linear-gradient(135deg, #486f79 0%, #578792 40%, #2b4249 100%)",
  text: "#ffffff",
  subtitle: "#cbf3bb",
  bodyMuted: "#ecf4e8",
  logoTile: "rgba(255,255,255,0.14)",
  pillBackground: "rgba(255,255,255,0.1)",
  pillBorder: "rgba(255,255,255,0.16)",
} as const;

export const alt = `${APP_NAME} social preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: twitterImagePalette.background,
          color: twitterImagePalette.text,
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
                background: twitterImagePalette.logoTile,
                color: twitterImagePalette.text,
                fontSize: "34px",
                fontWeight: 800,
              }}
            >
              K
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "36px", fontWeight: 800 }}>{APP_NAME}</div>
              <div style={{ fontSize: "22px", color: twitterImagePalette.subtitle, fontWeight: 700 }}>
                Safety-first community transport
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "900px" }}>
            <div style={{ fontSize: "62px", lineHeight: 1.05, fontWeight: 800 }}>
              Private ride coordination for trusted local communities.
            </div>
            <div style={{ fontSize: "28px", lineHeight: 1.4, color: twitterImagePalette.bodyMuted }}>
              More privacy, clearer negotiation, optional safety updates, and stronger accountability
              for customer, rider, and admin communities.
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px" }}>
            {["Mission clarity", "Trust model", "Production ready"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "14px 20px",
                  borderRadius: "9999px",
                  background: twitterImagePalette.pillBackground,
                  border: `1px solid ${twitterImagePalette.pillBorder}`,
                  fontSize: "22px",
                  color: twitterImagePalette.text,
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

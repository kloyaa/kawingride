import { ImageResponse } from "next/og";

export const alt = "Community Ride social preview";
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
          background: "linear-gradient(135deg, #0f766e 0%, #115e59 40%, #134e4a 100%)",
          color: "#ffffff",
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
                background: "rgba(255,255,255,0.14)",
                color: "#ffffff",
                fontSize: "34px",
                fontWeight: 800,
              }}
            >
              C
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "36px", fontWeight: 800 }}>Community Ride</div>
              <div style={{ fontSize: "22px", color: "#ccfbef", fontWeight: 700 }}>
                Safety-first community transport
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "900px" }}>
            <div style={{ fontSize: "62px", lineHeight: 1.05, fontWeight: 800 }}>
              Private ride coordination for trusted local communities.
            </div>
            <div style={{ fontSize: "28px", lineHeight: 1.4, color: "#d1fae5" }}>
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
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  fontSize: "22px",
                  color: "#ffffff",
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

import { ImageResponse } from "next/og";

export const alt = "Community Ride platform preview";
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
          background:
            "radial-gradient(circle at top left, rgba(20,184,166,0.28), transparent 34%), radial-gradient(circle at top right, rgba(245,158,11,0.2), transparent 26%), linear-gradient(135deg, #f0fdf9 0%, #f8fafc 55%, #ffffff 100%)",
          color: "#0f172a",
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
                background: "#0f766e",
                color: "#ffffff",
                fontSize: "34px",
                fontWeight: 800,
              }}
            >
              C
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "36px", fontWeight: 800 }}>Community Ride</div>
              <div style={{ fontSize: "22px", color: "#0f766e", fontWeight: 700 }}>
                Private community ride coordination
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
              <span style={{ color: "#0f766e" }}> with more clarity.</span>
            </div>
            <div style={{ fontSize: "28px", lineHeight: 1.4, color: "#475569" }}>
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
                  background: "rgba(255,255,255,0.82)",
                  border: "1px solid rgba(15,118,110,0.12)",
                  fontSize: "22px",
                  color: "#0f172a",
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

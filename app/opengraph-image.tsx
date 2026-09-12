import { ImageResponse } from "next/og";

export const alt = "Muhamed Alaa — BLACK-MAK® Logo & Visual Identity Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The solid identity mark — exact geometry from the official identity files.
const MARK_POLYGON =
  "216.61 53.74 216.61 116.95 208.15 116.95 208.15 53.74 154.4 0 154.4 28.53 154.4 35.91 154.4 37.15 154.4 37.16 155.3 38.06 155.3 38.06 160.51 43.26 166.46 49.21 182.39 65.14 182.39 116.94 160.51 116.94 160.51 51.73 154.4 45.62 154.4 123.06 188.49 123.06 188.49 62.62 170.78 44.91 170.78 44.9 168.08 42.21 160.51 34.64 160.51 14.73 202.04 56.27 202.04 123.06 203.39 123.06 208.15 123.06 216.61 123.06 219.74 123.06 222.72 123.06 222.72 56.27 264.25 14.73 264.25 34.64 264.25 34.64 264.24 34.65 264.25 34.64 256.68 42.21 253.98 44.9 236.27 62.61 236.27 123.05 270.36 123.05 270.36 45.62 264.25 51.73 264.25 116.95 242.37 116.95 242.37 65.15 258.3 49.22 264.25 43.27 269.45 38.06 269.45 38.05 269.46 38.06 270.36 37.16 270.36 35.91 270.36 28.53 270.36 0 216.61 53.74";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#070708",
          color: "#f5f5f1",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#9a9a96", marginBottom: 40 }}>
            BLACK—MAK® / CURRICULUM VITÆ · 2026
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 110, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
              MUHAMED
            </div>
            <div style={{ fontSize: 110, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
              ALAA
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 26, fontSize: 28, color: "#9a9a96" }}>
              <span style={{ width: 14, height: 14, background: "#c9a227" }} />
              Logo &amp; Visual Identity Designer
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 20, color: "#5d5d59", letterSpacing: 2, marginTop: 48 }}>
            12+ YEARS · ARABIC + LATIN IDENTITY SYSTEMS
          </div>
        </div>

        {/* the mark — the person behind the practice */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "280px",
            height: "280px",
            border: "2px solid rgba(245,245,241,0.25)",
            flexShrink: 0,
            marginLeft: "60px",
          }}
        >
          <svg
            width="196"
            height="208"
            viewBox="154.4 0 115.96 123.06"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points={MARK_POLYGON} fill="#f5f5f1" />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}

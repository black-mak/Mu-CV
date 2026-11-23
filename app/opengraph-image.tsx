import { ImageResponse } from "next/og";
import { TCCC_BLACK_B64 } from "@/lib/og-font";

export const dynamic = "force-static";
export const alt = "Muhamed Alaa — BLACK-MAK® Logo & Visual Identity Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The brand's own Latin face — TCCC Unity Headline Black, decoded from the
// embedded base64 TTF so the OG card carries the site's exact typography.
const tcccBlack = Buffer.from(TCCC_BLACK_B64, "base64");

// The V2 identity mark — exact geometry traced 1:1 from the official BLACK-MAK-V2
// logo files (verified lossless, IoU 1.000).
const MARK_VIEWBOX = "0 0 155 165";
const MARK_POLYGON_A =
  "94,149.5 58,149.5 57.5,149 57.5,68 8,18.5 7.5,19 7.5,41 41.5,75 41.5,149 41,149.5 0,149.5 -0.5,149 -0.5,56 0,55.5 1,55.5 7.5,62 7.5,141 8,141.5 33,141.5 33.5,141 33.5,78 -0.5,44 -0.5,0 0,-0.5 65.5,65 65.5,141 66,141.5 87,141.5 87.5,141 87.5,65 153,-0.5 153.5,0 153.5,43 120.5,76 120.5,138 121,138.5 146,138.5 146.5,138 146.5,60 154,52.5 154.5,53 154.5,146 154,146.5 113,146.5 112.5,146 112.5,73 145.5,40 145.5,19 145,18.5 95.5,68 95.5,148";
const MARK_POLYGON_B =
  "25,123.5 17,123.5 15.5,122 15.5,112 16,111.5 25,111.5 25.5,112 25.5,123";
const MARK_POLYGON_C =
  "94,164.5 58,164.5 57.5,164 57.5,157 58,156.5 95,156.5 95.5,157 95.5,163";

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
          fontFamily: "TCCC",
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
            viewBox={MARK_VIEWBOX}
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points={MARK_POLYGON_A} fill="#f5f5f1" />
            <polygon points={MARK_POLYGON_B} fill="#f5f5f1" />
            <polygon points={MARK_POLYGON_C} fill="#f5f5f1" />
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "TCCC",
          data: tcccBlack,
          weight: 800,
          style: "normal",
        },
      ],
    }
  );
}

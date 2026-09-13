import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";

// The studio (black-mak) and the CV both set their Latin type in TCCC
// Unity â€” the brand's own face, converted to woff2 from the source TTFs.
// Only the weights the UI actually uses are loaded (Light/Medium cuts were
// never referenced â€” dropped). Same families/variables on both sites â€”
// pixel-identical letterforms, zero layout shift, one visual DNA.
export const unityHeadline = localFont({
  src: [
    { path: "../public/fonts/tccc-unity-regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/tccc-unity-bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/tccc-unity-black.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-signate",
  display: "swap",
});

export const unityText = localFont({
  src: [
    { path: "../public/fonts/tccc-unity-text-regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/tccc-unity-text-bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

// Latin subset only â€” cyrillic/vietnamese were dead weight.
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Self-hosted Arabic face (Asal). .woff fallback dropped â€” every modern
// browser speaks woff2 and the duplicate file was preloaded alongside it.
export const asalArabic = localFont({
  src: [{ path: "../public/fonts/asal-arabic.woff2", weight: "500", style: "normal" }],
  variable: "--font-ar",
  display: "swap",
});

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { seal, STUDIO_URL } from "@/lib/data";
import { MarkPaths, MARK_VIEWBOX } from "./BrandMark";
import Reveal from "./Reveal";

// The finale. One bold move, spent in a single place (restraint principle):
// a magnetic stamp that pulls toward the cursor; on hover a rotating seal ring
// with the practice name fades in, then the click "stamps" the visitor through
// to the studio. The real solid mark sits at the disc's heart.
//
// The ring is a CLOSED seal — the glyphs occupy exactly 360°, no gap where
// the ring begins/ends. Two closure techniques, per script:
//   EN: letter-spacing solved so the advance fills the circumference.
//   AR: letter-spacing would sever Arabic letter-joins, so each WORD sits on
//       its own textPath at a solved startOffset — joins intact, even gaps,
//       ring closed. Solved in the DOM (measure → compute → re-render).

// Bilingual ring text — the studio lockup, not just the brand name.
const RING_EN = "BLACK-MAK STUDIO · MUHAMED ALAA · EST. 2014 · ";
const RING_AR_WORDS = "استوديو بلاك-ماك · محمد علاء · منذ ٢٠١٤ ·".split(" ").filter(Boolean);

export default function SealCTA() {
  const { pick, lang } = useI18n();
  const ref = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const [hover, setHover] = useState(false);
  // EN: solved letter-spacing (px per glyph) that closes the ring exactly
  const [spacing, setSpacing] = useState<number | null>(null);
  // AR: solved startOffset per word that closes the ring exactly
  const [offsets, setOffsets] = useState<number[] | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });

  // Solve the closure. Re-run on lang change and once fonts settle
  // (two rAFs, then a re-check after webfonts load).
  useEffect(() => {
    const solve = () => {
      const el = textRef.current;
      if (!el) return;
      const C = 2 * Math.PI * 86; // r=86 in a 220 viewBox
      if (lang === "en") {
        // measure natural advance with spacing zeroed, then solve
        el.style.letterSpacing = "0px";
        let natural = 0;
        try {
          natural = (el as unknown as { getComputedTextLength: () => number }).getComputedTextLength();
        } catch {
          natural = 0;
        }
        el.style.letterSpacing = ""; // let React's attribute rule again
        const gaps = Math.max(1, RING_EN.length - 1);
        const s = (C - natural) / gaps;
        setSpacing(Number.isFinite(s) && s > 0 ? s : 2);
      } else {
        // measure each word (each sits on its own textPath), then place
        // words around the ring with one even gap after every word —
        // the last gap lands exactly where the first word begins.
        const paths = Array.from(el.querySelectorAll("textPath"));
        const lens = paths.map((p) => {
          try {
            return (p as unknown as { getComputedTextLength: () => number }).getComputedTextLength();
          } catch {
            return 0;
          }
        });
        const total = lens.reduce((a, b) => a + b, 0);
        const n = Math.max(1, lens.length);
        const gap = Math.max(2, (C - total) / n);
        let acc = 0;
        const offs = lens.map((L) => {
          const o = acc;
          acc += L + gap;
          return o;
        });
        setOffsets(offs);
      }
    };
    const raf = requestAnimationFrame(() => requestAnimationFrame(solve));
    const t = window.setTimeout(solve, 650); // re-check after webfonts load
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, [lang]);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const relX = e.clientX - (r.left + r.width / 2);
    const relY = e.clientY - (r.top + r.height / 2);
    const max = 22;
    x.set(Math.max(-max, Math.min(max, relX * 0.25)));
    y.set(Math.max(-max, Math.min(max, relY * 0.25)));
  };
  const onLeave = () => {
    setHover(false);
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="studio"
      className="seal-cta section relative flex flex-col items-center overflow-hidden border-b border-line bg-bg text-center"
    >
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10 flex flex-col items-center">
        <Reveal tier="ambient">
          <span className="eyebrow">{pick(seal.eyebrow)}</span>
        </Reveal>
        <Reveal tier="ambient" delay={0.08}>
          <h2 className="display mt-6 max-w-[18ch] text-[clamp(2rem,5.5vw,4rem)]">
            {pick(seal.line)}
          </h2>
        </Reveal>

        <Reveal delay={0.16} className="mt-14">
          <div className="relative grid place-items-center">
            {/* rotating seal ring — appears on hover. Closed ring: the solved
                letter-spacing makes the glyphs occupy exactly 360°, so the
                seal reads as one continuous stamp with no opening. */}
            <motion.svg
              viewBox="0 0 220 220"
              className="pointer-events-none absolute h-[300px] w-[300px] md:h-[380px] md:w-[380px]"
              animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.82 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <defs>
                <path id="seal-ring" d="M110,110 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" fill="none" />
              </defs>
              <g className="animate-seal-spin" style={{ transformOrigin: "110px 110px" }}>
                {lang === "ar" ? (
                  // AR — one textPath per word (letter-joins intact), placed
                  // at solved offsets so the words + even gaps fill 360°.
                  <text
                    ref={textRef}
                    fontSize="10"
                    fill="var(--seal)"
                    style={{ fontFamily: "var(--font-ar)" }}
                  >
                    {RING_AR_WORDS.map((w, i) => (
                      <textPath
                        key={w + i}
                        href="#seal-ring"
                        startOffset={offsets === null ? i * 60 : offsets[i]}
                      >
                        {w}
                      </textPath>
                    ))}
                  </text>
                ) : (
                  // EN — single textPath, solved letter-spacing closes the ring.
                  <text
                    ref={textRef}
                    fontSize="9.5"
                    letterSpacing={spacing === null ? 3.4 : spacing}
                    fill="var(--seal)"
                    className="mono uppercase"
                  >
                    <textPath href="#seal-ring" startOffset="0%">
                      {RING_EN}
                    </textPath>
                  </text>
                )}
              </g>
            </motion.svg>

            {/* magnetic stamp disc — the real mark at its heart */}
            <motion.a
              ref={ref}
              href={STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={onMove}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={onLeave}
              style={{ x: sx, y: sy }}
              className="group relative grid h-[200px] w-[200px] place-items-center rounded-full border border-line-strong bg-surface/40 backdrop-blur-md transition-colors duration-500 hover:border-seal md:h-[240px] md:w-[240px]"
            >
              <span
                className="absolute inset-4 rounded-full border border-dashed border-faint transition-colors duration-500 group-hover:border-seal/50"
                aria-hidden="true"
              />
              <span className="relative z-10 flex flex-col items-center gap-4 px-6">
                {/* the solid identity mark — stamping into the studio */}
                <svg
                  viewBox={MARK_VIEWBOX}
                  aria-hidden="true"
                  className="h-16 w-16 text-ink transition-transform duration-700 group-hover:scale-110 md:h-20 md:w-20"
                >
                  <MarkPaths />
                </svg>
                <span className="mono flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.16em] text-muted">
                  <span className="transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" aria-hidden="true">
                    ←
                  </span>
                  {pick(seal.center)}
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </span>
              <span
                className="seal-halo absolute inset-0 rounded-full bg-seal/5 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
                aria-hidden="true"
              />
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mono mt-14 max-w-[42ch] text-[0.72rem] uppercase leading-relaxed tracking-[0.12em] text-faint">
            {pick(seal.sub)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}


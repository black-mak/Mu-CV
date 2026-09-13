"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { profile, socials } from "@/lib/data";

// ============================================================================
// Footer — closes the résumé with the giant wordmark (mirroring the studio):
// "MUHAMED ALAA" in TCCC Unity Black at ~13vw, outlined glyphs filling solid
// under the cursor, the line rising from below the fold. One visual DNA.
// ============================================================================
const WORD = "MUHAMED ALAA";

export default function Footer() {
  const { t, lang } = useI18n();
  const reduce = useReducedMotion();
  const bigRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: bigRef,
    offset: ["start end", "end 0.95"],
  });
  const rise = useTransform(scrollYProgress, [0, 1], ["28%", "0%"]);

  return (
    <footer className="border-t border-line pt-16">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <a href="#top" className="text-xl font-black tracking-wider text-ink">
              BLACK-MAK
            </a>
            <p className="mt-4 max-w-[42ch] text-[0.85rem] text-muted">{t("footer.tagline")}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 mono text-[0.66rem] uppercase tracking-[0.1em] text-muted" aria-label="Social">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* the giant name — outlined glyphs, fill on hover, bleeding off-page.
          dir="ltr" hard-locks the letter order: MUHAMED ALAA reads the same
          in EN and AR — the name never mirrors in RTL pages. */}
      <div ref={bigRef} className="relative mt-10 overflow-hidden" aria-hidden="true">
        <motion.div
          dir="ltr"
          style={reduce ? undefined : { y: rise }}
          className="giant-word flex w-full select-none items-end justify-center whitespace-nowrap"
          translate="no"
        >
          {WORD.split("").map((ch, i) => (
            <span key={i} className="giant-letter">
              {ch}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container">
        <div className="mt-0 flex flex-col flex-wrap items-start justify-between gap-3 border-t border-line pt-6 mono text-[0.58rem] uppercase tracking-[0.13em] text-faint md:flex-row">
          <span>{t("footer.rights")}</span>
          <span className="force-ltr">{profile.email}</span>
          <span>{t("footer.end")}</span>
        </div>
      </div>
    </footer>
  );
}

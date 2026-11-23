"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { certificates, languages, interests, type Cert } from "@/lib/data";
import { sound } from "@/lib/sound";
import Reveal from "./Reveal";

function CertModal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  const { t, pick, lang } = useI18n();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sound.click("soft");
    const previousFocus = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const getFocusable = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) ?? []
      ).filter((el) => !el.hasAttribute("disabled"));
    getFocusable()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        sound.click("crisp");
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      role="dialog"
      aria-modal="true"
      aria-label={pick(cert.title)}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={() => {
          sound.click("crisp");
          onClose();
        }}
        aria-label={t("cred.close")}
        tabIndex={-1}
      />
      <motion.div
        ref={panelRef}
        className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col border border-line-strong bg-bg shadow-2xl"
        initial={{ scale: 0.96, opacity: 0, y: 8 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 8 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-6">
          <div className="min-w-0 pr-3">
            <div className="flex items-center gap-2">
              <span className="mono text-[0.62rem] uppercase tracking-widest text-seal">
                {lang === "ar" ? "وثيقة رسمية معتمدة" : "Official Credential"}
              </span>
              <span className="text-line-strong">/</span>
              <span className="mono text-[0.62rem] text-faint">{cert.years}</span>
            </div>
            <h3 className="mt-1 truncate text-base font-bold sm:text-lg">{pick(cert.title)}</h3>
            <p className="mono mt-0.5 text-[0.68rem] uppercase tracking-wider text-muted">
              {pick(cert.org)}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={cert.full}
              target="_blank"
              rel="noopener noreferrer"
              className="mono hidden sm:inline-flex items-center gap-1.5 border border-line px-3 py-1.5 text-[0.65rem] uppercase tracking-wider text-muted transition-colors hover:border-ink hover:text-ink"
            >
              <span>{lang === "ar" ? "عرض الأصل بالدقة الكاملة" : "High-Res"}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <button
              onClick={() => {
                sound.click("crisp");
                onClose();
              }}
              aria-label={t("cred.close")}
              className="grid h-10 w-10 shrink-0 place-items-center border border-line text-xl transition-colors hover:border-ink hover:text-ink"
            >
              ×
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-auto p-4 sm:p-6">
          <div className="relative mx-auto aspect-[1.414/1] w-full max-w-3xl border border-line bg-surface/50 shadow-inner">
            <Image
              src={cert.full}
              alt={pick(cert.title)}
              fill
              sizes="(max-width: 768px) 94vw, 800px"
              className="object-contain"
            />
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-line/60 pt-4">
            <p className="text-center sm:text-start text-xs sm:text-sm text-muted">
              {pick(cert.note)}
            </p>
            <div className="flex items-center gap-2">
              <span className="mono text-[0.6rem] uppercase tracking-wider text-faint hidden sm:inline-block">
                Press ESC to close
              </span>
              <a
                href={cert.full}
                download
                className="mono inline-flex items-center gap-1.5 border border-line px-3 py-1.5 text-[0.65rem] uppercase tracking-wider text-muted transition-colors hover:border-ink hover:text-ink sm:hidden"
              >
                <span>{lang === "ar" ? "فتح بدقة كاملة" : "Open Original"}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Credentials() {
  const { t, pick } = useI18n();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="credentials" className="section border-b border-line">
      <div className="container">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow block text-faint">{t("idx.credentials")}</span>
              <h2 className="display mt-6 text-[clamp(2rem,5vw,3.6rem)] text-ink/80">
                {t("section.credentials")}
              </h2>
            </div>
            <p className="lede max-w-[40ch] text-[0.95rem]">{t("cred.note")}</p>
          </div>
        </Reveal>

        {/* certificates */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <button
                onClick={() => {
                  sound.click("soft");
                  setOpenIdx(i);
                }}
                className="cert-lift group block h-full w-full border border-line bg-bg p-5 text-start transition-all duration-300 hover:border-ink hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                <div className="relative mb-5 aspect-[4/3] overflow-hidden border border-line">
                  <Image
                    src={cert.thumb}
                    alt={pick(cert.title)}
                    fill
                    sizes="(max-width: 768px) 92vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-bg/10 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="mono text-[0.62rem] uppercase tracking-[0.13em] text-faint">
                    {cert.year}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-seal" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold leading-snug">{pick(cert.title)}</h3>
                <p className="mono mt-2 text-[0.72rem] text-muted">{pick(cert.org)}</p>
                <span className="mono mt-5 inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.13em] text-faint transition-colors group-hover:text-ink">
                  {t("cred.view")} <span aria-hidden="true">↗</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* languages + interests — languages primary, interests one quiet line */}
        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-12 border-t border-line pt-14 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <span className="eyebrow mb-8 block">{t("section.languages")}</span>
            <div className="space-y-8">
              {languages.map((l, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="text-lg font-bold">{pick(l.name)}</span>
                      <span className="mono text-[0.68rem] uppercase tracking-wider text-muted">
                        {pick(l.level)}
                      </span>
                    </div>
                    <div className="h-[3px] w-full overflow-hidden bg-line">
                      <motion.div
                        className="h-full bg-ink"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <p className="mt-3 max-w-[52ch] text-sm text-muted">{pick(l.note)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:pt-9">
            <Reveal>
              <p className="mono max-w-[46ch] text-[0.66rem] leading-relaxed tracking-[0.06em] text-faint">
                {interests.map((it) => pick(it)).join(" · ")}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openIdx !== null && (
          <CertModal cert={certificates[openIdx]} onClose={() => setOpenIdx(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { profile, STUDIO_URL } from "@/lib/data";
import { sound } from "@/lib/sound";
import Reveal from "./Reveal";

type Row = {
  key: string;
  label: string;
  value: string;
  copy?: string;
  href?: string;
  openLabel?: string;
};

export default function Contact() {
  const { t, pick, lang } = useI18n();
  const [copied, setCopied] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const copy = async (key: string, value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      sound.click("crisp");
      setCopied(key);
      setToastMessage(lang === "ar" ? `تم نسخ ${label} إلى الحافظة بنجاح` : `Copied ${label} to clipboard`);
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 2000);
      setTimeout(() => setToastMessage(null), 3000);
    } catch {}
  };

  const rows: Row[] = [
    { key: "email", label: t("contact.email"), value: profile.email, copy: profile.email, href: `mailto:${profile.email}` },
    { key: "wa", label: t("contact.phone"), value: profile.phone, copy: profile.phoneRaw, href: profile.whatsapp, openLabel: t("contact.whatsapp") },
    { key: "instapay", label: t("contact.instapay"), value: profile.instapay, copy: profile.instapay },
    { key: "behance", label: t("contact.behance"), value: "Muhmed-alaa-el-bank", href: "https://www.behance.net/Muhmed-alaa-el-bank", openLabel: t("contact.open") },
    { key: "loc", label: t("contact.location"), value: pick(profile.location) },
  ];

  return (
    <section id="contact" className="section relative">
      <div className="container">
        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-[150] flex items-center gap-3 border border-seal bg-surface/95 px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300">
            <span className="h-2 w-2 rounded-full bg-seal animate-ping" />
            <span className="mono text-[0.72rem] text-ink font-semibold">{toastMessage}</span>
          </div>
        )}

        <span className="sr-only" aria-live="polite">
          {copied ? t("contact.copied") : ""}
        </span>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow block">{t("idx.contact")}</span>
              <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.4rem)]">{t("contact.title")}</h2>
            </div>
            <p className="lede max-w-[36ch]">{t("contact.note")}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* contact rows */}
          <div className="border border-line">
            {rows.map((r, i) => (
              <Reveal key={r.key} delay={i * 0.06}>
                <div
                  className={`flex flex-wrap items-center justify-between gap-4 px-6 py-5 ${
                    i !== rows.length - 1 ? "border-b border-line" : ""
                  } ${copied === r.key ? "copy-flash" : ""}`}
                >
                  <div className="min-w-0">
                    <div className="eyebrow">{r.label}</div>
                    <div className="force-ltr mt-1 truncate text-[1.05rem] text-ink">{r.value}</div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {r.copy && (
                      <button
                        onClick={() => copy(r.key, r.copy!, r.label)}
                        className="border border-line-strong px-3 py-2 mono text-[0.62rem] uppercase tracking-widest text-muted transition-colors hover:border-ink hover:text-ink"
                      >
                        {copied === r.key ? (
                          <span className="inline-flex items-center gap-1.5 text-seal">
                            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            {t("contact.copied")}
                          </span>
                        ) : (
                          t("contact.copy")
                        )}
                      </button>
                    )}
                    {r.href && (
                      <a
                        href={r.href}
                        target={r.href.startsWith("http") ? "_blank" : undefined}
                        rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        onClick={() => sound.click("pop")}
                        className="border border-line-strong px-3 py-2 mono text-[0.62rem] uppercase tracking-widest text-muted transition-colors hover:border-ink hover:text-ink"
                      >
                        {r.openLabel ?? t("contact.open")}
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* actions + dual resume + QR card */}
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-between gap-6 border border-line bg-surface p-7">
              <div>
                <span className="eyebrow block">{profile.alias}</span>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">{t("contact.actionsNote")}</p>
              </div>

              {/* Dual Resume Download options */}
              <div className="flex flex-col gap-3">
                <a
                  href={profile.cvPdf}
                  download="Muhamed-Alaa-Visual-CV.pdf"
                  onClick={() => sound.click("crisp")}
                  className="btn btn-light w-full"
                >
                  <span>{lang === "ar" ? "تحميل السيرة الذاتية البصرية (PDF)" : "Executive Visual CV (PDF)"}</span>
                  <span aria-hidden="true">⇩</span>
                </a>
                <a
                  href="/cv/muhamed-alaa-ats-cv.docx"
                  download="Muhamed-Alaa-ATS-CV.docx"
                  onClick={() => sound.click("soft")}
                  className="btn btn-ghost w-full border-line-strong text-[0.64rem]"
                >
                  <span>{lang === "ar" ? "تحميل نسخة الـ ATS للشركات (.DOCX)" : "ATS-Friendly Resume (.DOCX)"}</span>
                  <span aria-hidden="true">⇩</span>
                </a>
                <a
                  href={STUDIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.click("pop")}
                  className="btn btn-ghost w-full border-line"
                >
                  <span>{lang === "ar" ? "زيارة الاستوديو الكامل" : "Visit the studio"}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* QR — real, scannable, generated static asset */}
              <div className="flex items-center gap-4 border-t border-line pt-5">
                <a
                  href="https://muhamed-cv.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="muhamed-cv.vercel.app"
                  className="shrink-0 border border-line-strong bg-bg p-2 transition-colors hover:border-ink"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/qr-cv.svg" alt="QR code — muhamed-cv.vercel.app" width="104" height="104" className="block" />
                </a>
                <p className="mono text-[0.58rem] uppercase leading-relaxed tracking-[0.12em] text-faint">
                  {t("contact.qrNote")}
                  <span className="mt-1 block text-muted">muhamed-cv.vercel.app</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { profile, STUDIO_URL } from "@/lib/data";
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

  const copy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 1600);
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
    <section id="contact" className="section">
      <div className="container">
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
                        onClick={() => copy(r.key, r.copy!)}
                        className="border border-line-strong px-3 py-2 mono text-[0.62rem] uppercase tracking-widest text-muted transition-colors hover:border-ink hover:text-ink"
                      >
                        {copied === r.key ? (
                          <span className="inline-flex items-center gap-1.5">
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

          {/* actions + QR card */}
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-between gap-6 border border-line bg-surface p-7">
              <div>
                <span className="eyebrow block">{profile.alias}</span>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">{t("contact.actionsNote")}</p>
              </div>
              <div className="flex flex-col gap-3">
                <a href={profile.cvPdf} download className="btn btn-light w-full">
                  <span>{t("contact.downloadPdf")}</span>
                  <span aria-hidden="true">⇩</span>
                </a>
                <a href={STUDIO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full">
                  <span>{lang === "ar" ? "زيارة الاستوديو" : "Visit the studio"}</span>
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

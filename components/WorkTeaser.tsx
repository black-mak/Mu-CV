"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { STUDIO_URL } from "@/lib/data";
import { sound } from "@/lib/sound";
import { assetPath } from "@/lib/basePath";
import Reveal from "./Reveal";

const FEATURED_MARKS = [
  {
    id: "01",
    title: { en: "1.1", ar: "١.١ — ون بوينت ون" },
    tag: { en: "Visual Identity & Apparel", ar: "هوية بصرية وعلامة أزياء" },
    image: assetPath("/images/work/one-point-one-thumb.png"),
    link: `${STUDIO_URL}/work/one-point-one`,
  },
  {
    id: "02",
    title: { en: "BLACK MAK", ar: "بلاك ماك" },
    tag: { en: "Studio Visual Identity & System", ar: "الهوية البصرية ونظام الاستوديو" },
    image: assetPath("/images/work/black-mak-thumb.jpg"),
    link: `${STUDIO_URL}/work/black-mak-identity`,
  },
  {
    id: "03",
    title: { en: "MAKEEN", ar: "مَـكِـيـنْ" },
    tag: { en: "Arabic Calligraphy & Wordmark", ar: "خط عربي حر ولوجوتايب" },
    image: assetPath("/images/work/makeen-thumb.jpg"),
    link: `${STUDIO_URL}/work/makeen`,
  },
  {
    id: "04",
    title: { en: "CALLIGRAPHY WORK", ar: "أعمال الخط العربي" },
    tag: { en: "Contemporary Arabic Letterforms", ar: "كاليجرافي وتكوينات خطية معاصرة" },
    image: assetPath("/images/work/calligraphy-thumb.jpg"),
    link: `${STUDIO_URL}/work/calligraphi-works`,
  },
];

export default function WorkTeaser() {
  const { lang, pick } = useI18n();

  return (
    <section id="selected-work" className="section border-b border-line bg-surface/30">
      <div className="container">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="eyebrow block">
                {lang === "ar" ? "٠٢ / نبذة من الأعمال" : "02 / SELECTED MARKS"}
              </span>
              <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.8rem)]">
                {lang === "ar" ? "أثر العلامة في الواقع." : "Proof in the mark."}
              </h2>
            </div>
            <p className="lede max-w-[42ch] text-[0.95rem]">
              {lang === "ar"
                ? "نماذج مختارة من الشعارات والخط العربي الحر المصممة لتعيش على الورق والشاشة واللافتات."
                : "A curated preview of identities engineered to survive from a 16px favicon to a facade sign."}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_MARKS.map((mark, idx) => (
            <Reveal key={mark.id} delay={idx * 0.08}>
              <a
                href={mark.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.click("pop")}
                onMouseEnter={() => sound.click("soft")}
                className="group block border border-line bg-bg p-3 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-surface">
                  <Image
                    src={mark.image}
                    alt={pick(mark.title)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-30" />
                  <span className="absolute bottom-2.5 right-2.5 bg-ink px-2 py-1 mono text-[0.55rem] uppercase tracking-widest text-bg opacity-85 sm:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {lang === "ar" ? "استعرض في الاستوديو ↗" : "Studio ↗"}
                  </span>
                </div>
                <div className="mt-4 px-1 pb-1">
                  <div className="flex items-center justify-between">
                    <span className="mono text-[0.62rem] text-faint">{mark.id}</span>
                    <span className="mono text-[0.6rem] uppercase tracking-wider text-seal">● Hand-crafted</span>
                  </div>
                  <h3 className="mt-1.5 text-base font-bold leading-snug text-ink group-hover:text-seal transition-colors">
                    {pick(mark.title)}
                  </h3>
                  <p className="mt-1 mono text-[0.68rem] text-muted">
                    {pick(mark.tag)}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35}>
          <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
            <span className="mono text-[0.65rem] uppercase tracking-wider text-muted">
              {lang === "ar" ? "٥٠+ علامة تجارية منجزة منذ ٢٠١٤" : "50+ IDENTITY SYSTEMS DELIVERED SINCE 2014"}
            </span>
            <a
              href={STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.click("crisp")}
              className="text-link group"
            >
              <span>{lang === "ar" ? "استكشف أرشيف الاستوديو الكامل" : "Explore full archive in Studio"}</span>
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

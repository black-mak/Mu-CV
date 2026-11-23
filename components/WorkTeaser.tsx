"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { STUDIO_URL } from "@/lib/data";
import { sound } from "@/lib/sound";
import { assetPath } from "@/lib/basePath";
import Reveal from "./Reveal";

type Category = "all" | "identity" | "calligraphy" | "apparel";

const FEATURED_MARKS = [
  {
    id: "01",
    category: "apparel" as Category,
    title: { en: "1.1 (ONE POINT ONE)", ar: "١.١ — ون بوينت ون" },
    tag: { en: "Visual Identity & Apparel", ar: "هوية بصرية وعلامة أزياء" },
    craft: { en: "Numeric Industrial Grid", ar: "هندسة شبكية عددية" },
    image: assetPath("/images/work/one-point-one-thumb.png"),
    link: `${STUDIO_URL}/work/one-point-one`,
  },
  {
    id: "02",
    category: "identity" as Category,
    title: { en: "BLACK MAK®", ar: "بلاك ماك" },
    tag: { en: "Studio Visual Identity & System", ar: "الهوية البصرية ونظام الاستوديو" },
    craft: { en: "45° Precision Facets", ar: "شطفات زاوية ٤٥° دقيقة" },
    image: assetPath("/images/work/black-mak-thumb.jpg"),
    link: `${STUDIO_URL}/work/black-mak-identity`,
  },
  {
    id: "03",
    category: "calligraphy" as Category,
    title: { en: "MAKEEN", ar: "مَـكِـيـنْ" },
    tag: { en: "Arabic Calligraphy & Wordmark", ar: "خط عربي حر ولوجوتايب" },
    craft: { en: "Fluid Kinetic Stroke", ar: "ضربة فرشاة حرة وانسيابية" },
    image: assetPath("/images/work/makeen-thumb.jpg"),
    link: `${STUDIO_URL}/work/makeen`,
  },
  {
    id: "04",
    category: "calligraphy" as Category,
    title: { en: "CALLIGRAPHY WORK", ar: "أعمال الخط العربي" },
    tag: { en: "Contemporary Arabic Letterforms", ar: "كاليجرافي وتكوينات خطية معاصرة" },
    craft: { en: "Classical & Modern Fusion", ar: "مزيج بين الأصالة والحداثة" },
    image: assetPath("/images/work/calligraphy-thumb.jpg"),
    link: `${STUDIO_URL}/work/calligraphi-works`,
  },
  {
    id: "05",
    category: "identity" as Category,
    title: { en: "LOGOS — VOL. I", ar: "مجموعة الشعارات — المجلد الأول" },
    tag: { en: "Monograms & Symbolic Marks", ar: "شعارات رمزية ومونوغرام" },
    craft: { en: "Symbolic Reduction", ar: "اختزال رمزي استراتيجي" },
    image: assetPath("/images/work/vol1-thumb.jpg"),
    link: `${STUDIO_URL}/work/logos-vol-1`,
  },
  {
    id: "06",
    category: "identity" as Category,
    title: { en: "LOGOS — VOL. II", ar: "مجموعة الشعارات — المجلد الثاني" },
    tag: { en: "Editorial Logotypes & Wordmarks", ar: "لوجوتايب وكلمات شعارية" },
    craft: { en: "High-Contrast Geometry", ar: "هندسة بصرية حادة التباين" },
    image: assetPath("/images/work/vol2-thumb.jpg"),
    link: `${STUDIO_URL}/work/logos-vol-2`,
  },
];

const CATEGORIES: { id: Category; label: { en: string; ar: string } }[] = [
  { id: "all", label: { en: "All Works", ar: "جميع الأعمال" } },
  { id: "identity", label: { en: "Identity Systems", ar: "أنظمة الهوية" } },
  { id: "calligraphy", label: { en: "Arabic Calligraphy", ar: "الخط العربي" } },
  { id: "apparel", label: { en: "Apparel & Lifestyle", ar: "الأزياء ونمط الحياة" } },
];

export default function WorkTeaser() {
  const { lang, pick } = useI18n();
  const [filter, setFilter] = useState<Category>("all");

  const filtered = filter === "all"
    ? FEATURED_MARKS
    : FEATURED_MARKS.filter((m) => m.category === filter);

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
            <p className="lede max-w-[44ch] text-[0.95rem]">
              {lang === "ar"
                ? "نماذج مختارة من الشعارات والخط العربي الحر المصممة لتعيش على الورق والشاشة واللافتات، بهندسة بصرية مقاومة للزمن."
                : "A curated preview of identities engineered to survive from a 16px favicon to a facade sign."}
            </p>
          </div>
        </Reveal>

        {/* Dynamic Category Filter Pills */}
        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-line pb-6">
            {CATEGORIES.map((cat) => {
              const active = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sound.click("soft");
                    setFilter(cat.id);
                  }}
                  className={`border px-3.5 py-1.5 mono text-[0.66rem] uppercase tracking-wider transition-all duration-200 ${
                    active
                      ? "border-seal bg-seal text-black font-bold shadow-[0_2px_12px_rgba(201,162,39,0.35)]"
                      : "border-line text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  <span>{lang === "ar" ? cat.label.ar : cat.label.en}</span>
                  {cat.id === "all" ? (
                    <span className="ml-1.5 opacity-60">({FEATURED_MARKS.length})</span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Responsive Grid of Marks */}
        <motion.div layout className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((mark, idx) => (
              <motion.div
                key={mark.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <a
                  href={mark.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.click("pop")}
                  onMouseEnter={() => sound.click("soft")}
                  className="group block border border-line bg-bg p-3.5 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink hover:shadow-[0_12px_36px_rgba(0,0,0,0.45)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-surface">
                    <Image
                      src={mark.image}
                      alt={pick(mark.title)}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-30" />
                    <span className="absolute bottom-2.5 right-2.5 bg-ink px-2.5 py-1 mono text-[0.58rem] uppercase tracking-widest text-bg font-semibold opacity-90 sm:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {lang === "ar" ? "استعرض في الاستوديو ↗" : "Studio Case Study ↗"}
                    </span>
                  </div>
                  <div className="mt-4 px-1 pb-1">
                    <div className="flex items-center justify-between">
                      <span className="mono text-[0.62rem] text-faint">{mark.id}</span>
                      <span className="mono text-[0.6rem] uppercase tracking-wider text-seal font-medium">
                        ● {pick(mark.craft)}
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-base font-bold leading-snug text-ink group-hover:text-seal transition-colors">
                      {pick(mark.title)}
                    </h3>
                    <p className="mt-1 mono text-[0.68rem] text-muted">
                      {pick(mark.tag)}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
            <span className="mono text-[0.68rem] uppercase tracking-wider text-muted">
              {lang === "ar" ? "٥٠+ علامة تجارية منجزة منذ ٢٠١٤" : "50+ IDENTITY SYSTEMS DELIVERED SINCE 2014"}
            </span>
            <a
              href={STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.click("crisp")}
              className="text-link group inline-flex items-center gap-1.5 font-bold"
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

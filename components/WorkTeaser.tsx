"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { STUDIO_URL } from "@/lib/data";
import { sound } from "@/lib/sound";
import { assetPath } from "@/lib/basePath";
import Reveal from "./Reveal";

type Category = "all" | "identity" | "calligraphy" | "apparel";

type MarkItem = {
  id: string;
  category: Category;
  title: { en: string; ar: string };
  tag: { en: string; ar: string };
  craft: { en: string; ar: string };
  geometry: { en: string; ar: string };
  image: string;
  link: string;
};

const FEATURED_MARKS: MarkItem[] = [
  {
    id: "01",
    category: "apparel",
    title: { en: "1.1 (ONE POINT ONE)", ar: "١.١ — ون بوينت ون" },
    tag: { en: "Visual Identity & Apparel", ar: "هوية بصرية وعلامة أزياء" },
    craft: { en: "Numeric Industrial Grid", ar: "هندسة شبكية عددية" },
    geometry: {
      en: "Based on a 1:1 modular matrix with strict 90° and 45° cuts, engineered for embroidery and silicone labeling.",
      ar: "مبني على مصفوفة عددية معيارية ١:١ بزوايا ٤٥° و٩٠° مصممة خصيصاً للتطريز والوسم السيليكوني على الأقمشة.",
    },
    image: assetPath("/images/work/one-point-one-thumb.png"),
    link: `${STUDIO_URL}/work/one-point-one`,
  },
  {
    id: "02",
    category: "identity",
    title: { en: "BLACK MAK®", ar: "بلاك ماك" },
    tag: { en: "Studio Visual Identity & System", ar: "الهوية البصرية ونظام الاستوديو" },
    craft: { en: "45° Precision Facets", ar: "شطفات زاوية ٤٥° دقيقة" },
    geometry: {
      en: "Constructed with dual 45° apex bisectors and a centered monogram cavity, calibrated for metallic facade signs.",
      ar: "تشييد معماري عبر منصفات زوايا ٤٥° علوية وتجويف مونوغرامي مركزي، موزون للافتات الواجهات المعمارية المعدنية.",
    },
    image: assetPath("/images/work/black-mak-thumb.jpg"),
    link: `${STUDIO_URL}/work/black-mak-identity`,
  },
  {
    id: "03",
    category: "calligraphy",
    title: { en: "MAKEEN", ar: "مَـكِـيـنْ" },
    tag: { en: "Arabic Calligraphy & Wordmark", ar: "خط عربي حر ولوجوتايب" },
    craft: { en: "Fluid Kinetic Stroke", ar: "ضربة فرشاة حرة وانسيابية" },
    geometry: {
      en: "Freehand kinetic calligraphic script harmonized with modern baseline anchor, achieving high-end editorial gravity.",
      ar: "خط عربي حر بضربة فرشاة ديناميكية متوافقة مع خط ارتكاز حديث تمنح العلامة وقاراً فخماً في النشر والمطبوعات.",
    },
    image: assetPath("/images/work/makeen-thumb.jpg"),
    link: `${STUDIO_URL}/work/makeen`,
  },
  {
    id: "04",
    category: "calligraphy",
    title: { en: "CALLIGRAPHY WORK", ar: "أعمال الخط العربي" },
    tag: { en: "Contemporary Arabic Letterforms", ar: "كاليجرافي وتكوينات خطية معاصرة" },
    craft: { en: "Classical & Modern Fusion", ar: "مزيج بين الأصالة والحداثة" },
    geometry: {
      en: "A dual-paradigm study merging classical Thuluth anatomy with contemporary typographic reduction.",
      ar: "دراسة ثنائية تمزج بين تشريح خط الثلث الكلاسيكي والاختزال الهندسي التيبوغرافي المعاصر.",
    },
    image: assetPath("/images/work/calligraphy-thumb.jpg"),
    link: `${STUDIO_URL}/work/calligraphi-works`,
  },
  {
    id: "05",
    category: "identity",
    title: { en: "LOGOS — VOL. I", ar: "مجموعة الشعارات — المجلد الأول" },
    tag: { en: "Monograms & Symbolic Marks", ar: "شعارات رمزية ومونوغرام" },
    craft: { en: "Symbolic Reduction", ar: "اختزال رمزي استراتيجي" },
    geometry: {
      en: "Geometric reduction to primary vectors, ensuring zero loss of legibility at 16px digital rendering.",
      ar: "اختزال هندسي إلى المتجهات الأساسية يضمن عدم فقدان أي وضوح عند العرض الرقمي بحجم ١٦ بكسل.",
    },
    image: assetPath("/images/work/vol1-thumb.jpg"),
    link: `${STUDIO_URL}/work/logos-vol-1`,
  },
  {
    id: "06",
    category: "identity",
    title: { en: "LOGOS — VOL. II", ar: "مجموعة الشعارات — المجلد الثاني" },
    tag: { en: "Editorial Logotypes & Wordmarks", ar: "لوجوتايب وكلمات شعارية" },
    craft: { en: "High-Contrast Geometry", ar: "هندسة بصرية حادة التباين" },
    geometry: {
      en: "High-contrast stroke weighting paired with customized ligatures, built for editorial authority.",
      ar: "سماكات خطوط حادة التباين مقترنة بتركيبات حروف مخصصة تمنح حضوراً مؤسسياً رفيعاً.",
    },
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

function MarkInspectorModal({
  mark,
  onClose,
}: {
  mark: MarkItem;
  onClose: () => void;
}) {
  const { lang, pick } = useI18n();
  const [showGrid, setShowGrid] = useState(true);

  useEffect(() => {
    sound.click("soft");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        sound.click("crisp");
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-3xl border border-line-strong bg-bg shadow-2xl p-6 sm:p-8"
      >
        <div className="flex items-center justify-between border-b border-line pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="mono text-xs text-seal font-semibold">
              {lang === "ar" ? "فحص تشريحي معماري" : "ARCHITECTURAL MARK INSPECTOR"}
            </span>
            <span className="text-line-strong">/</span>
            <span className="mono text-xs text-muted">{mark.id}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                sound.click("soft");
                setShowGrid((v) => !v);
              }}
              className={`mono text-[0.65rem] px-2.5 py-1 border transition-colors ${
                showGrid
                  ? "border-seal text-seal bg-seal/10 font-bold"
                  : "border-line text-muted hover:border-ink"
              }`}
            >
              {lang === "ar" ? "الشبكة الهندسية" : "Geometry Grid"}
            </button>
            <button
              type="button"
              onClick={() => {
                sound.click("crisp");
                onClose();
              }}
              className="grid h-8 w-8 place-items-center border border-line text-lg hover:border-ink"
            >
              ×
            </button>
          </div>
        </div>

        {/* Visual Inspection Canvas */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-surface flex items-center justify-center">
          <Image
            src={mark.image}
            alt={pick(mark.title)}
            fill
            sizes="700px"
            className="object-contain p-4"
          />

          {/* Mathematical Overlay Grid */}
          {showGrid && (
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(201,162,39,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,162,39,0.3) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 rounded-full border border-dashed border-seal/60" />
                <div className="absolute h-full w-px bg-seal/50" />
                <div className="absolute w-full h-px bg-seal/50" />
              </div>
            </div>
          )}
        </div>

        {/* Technical Anatomy Notes */}
        <div className="mt-6 space-y-3">
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-bold text-ink">{pick(mark.title)}</h3>
            <span className="mono text-xs text-seal font-semibold">● {pick(mark.craft)}</span>
          </div>
          <p className="text-sm text-muted leading-relaxed">{pick(mark.geometry)}</p>
        </div>

        <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
          <span className="mono text-[0.65rem] text-faint">
            Standard: Optical Density · Precision Cuts · Zero Clutter
          </span>
          <a
            href={mark.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.click("crisp")}
            className="mono text-xs uppercase tracking-wider text-seal hover:underline inline-flex items-center gap-1.5 font-bold"
          >
            <span>{lang === "ar" ? "دراسة الحالة الكاملة بالاستوديو" : "Full Studio Case"}</span>
            <span>↗</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WorkTeaser() {
  const { lang, pick } = useI18n();
  const [filter, setFilter] = useState<Category>("all");
  const [inspectMark, setInspectMark] = useState<MarkItem | null>(null);

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
            {filtered.map((mark) => (
              <motion.div
                key={mark.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <div
                  onClick={() => {
                    sound.click("pop");
                    setInspectMark(mark);
                  }}
                  className="group block border border-line bg-bg p-3.5 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink hover:shadow-[0_12px_36px_rgba(0,0,0,0.45)] cursor-pointer"
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
                    <span className="absolute bottom-2.5 right-2.5 bg-ink px-2.5 py-1 mono text-[0.58rem] uppercase tracking-widest text-bg font-semibold opacity-90 sm:opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center gap-1">
                      <span>{lang === "ar" ? "فحص معماري" : "Inspect Grid"}</span>
                      <span>⊕</span>
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
                </div>
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

      {/* Architectural Mark Inspector Modal */}
      <AnimatePresence>
        {inspectMark && (
          <MarkInspectorModal
            mark={inspectMark}
            onClose={() => setInspectMark(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

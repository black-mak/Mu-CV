"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { sound } from "@/lib/sound";
import Reveal from "./Reveal";

// ============================================================================
// IllustratorTool — Proprietary Automation Extension for Adobe Illustrator
// Built for Brand & Visual Identity Designers by Muhamed Alaa.
// Designed with UI UX Pro Max & UI Taste: Anti-Slop, Pure Monochrome Craft.
// ============================================================================

interface FeatureModule {
  id: string;
  num: string;
  numAr: string;
  tagEn: string;
  tagAr: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  specEn: string;
  specAr: string;
}

const MODULES: FeatureModule[] = [
  {
    id: "grids",
    num: "01",
    numAr: "٠١",
    tagEn: "VECTOR GEOMETRY",
    tagAr: "هندسة المتجهات",
    titleEn: "Logo Construction Grids",
    titleAr: "شبكات بناء الشعارات الهندسية",
    descEn:
      "Generates mathematically flawless construction grids, 45° angle bisectors, apex tangent lines, and optical circle boundaries directly on dedicated layers.",
    descAr:
      "توليد شبكات بناء هندسية دقيقة بدقة متناهية، تشمل منصفات الزوايا 45 درجة وخطوط المماس والدوائر البصرية على طبقات مخصصة ومنظمة.",
    specEn: "Layer: BK_Grid · Pure ExtendScript Vector Math · Sub-pixel Alignment",
    specAr: "طبقة مخصصة: BK_Grid · حسابات متجهات ExtendScript دقيقة · محاذاة فائقة",
  },
  {
    id: "presentation",
    num: "02",
    numAr: "٠٢",
    tagEn: "EXECUTIVE DECKS",
    tagAr: "العروض التقديمية",
    titleEn: "Logo Presentations",
    titleAr: "عروض الشعار التقديمية",
    descEn:
      "Automates client-ready presentation artboards with contrast stress-testing, responsive scale validation, and editorial context framing.",
    descAr:
      "أتمتة ألواح العرض التقديمي الفاخرة للعملاء بنقرة واحدة، مع اختبارات التباين والوضوح والرسوخ البصري في مختلف الأحجام والمساحات.",
    specEn: "Artboards: 16:9 4K Decks · Contrast Ratios · Dark/Paper Contexts",
    specAr: "ألواح عمل: شاشات عريضة 4K · اختبارات التباين · بيئات داكنة ومطبوعة",
  },
  {
    id: "guidelines",
    num: "03",
    numAr: "٠٣",
    tagEn: "BRAND IDENTITY SYSTEM",
    tagAr: "أنظمة الهوية",
    titleEn: "Professional Brand Guidelines",
    titleAr: "براند جايدلاين احترافي شامل",
    descEn:
      "Compiles mathematical clear-space rules, minimum reproduction thresholds, Pantone/CMYK/RGB/HEX color codes, and locked typographic scales.",
    descAr:
      "توليد فوري لدليل استخدام الشعار الشامل، متضمناً مسافات الأمان الرياضية والحد الأدنى للطباعة ورموز الألوان وقواعد الطباعة المتوازنة.",
    specEn: "Outputs: Multi-page Vector PDF Guide · Color Systems · Exclusion Zones",
    specAr: "المخرجات: دليل PDF متجهات احترافي · أنظمة الألوان · مناطق الحماية",
  },
  {
    id: "export",
    num: "04",
    numAr: "٠٤",
    tagEn: "BATCH PACKAGING",
    tagAr: "تصدير الملفات",
    titleEn: "Organized Export Packages",
    titleAr: "حزم تصدير منظمة للملفات",
    descEn:
      "One-click batch export packaging across vector (AI, EPS, SVG, PDF) and optimized raster (PNG24, WebP) formats structured in professional folder taxonomies.",
    descAr:
      "تصدير دفعي منظم بضغطة زر واحدة لكافة ملفات الشعار بالصيغ الطباعية والرقمية (AI, EPS, SVG, PDF, PNG24, WebP) مقسمة في مجلدات تنفيذية احترافية.",
    specEn: "Taxonomy: Print/Digital · Monochrome/Color · Dark/Light Asset Bundles",
    specAr: "الهيكلة: طباعة / رقمي · أحادي / ألوان · حزم أصول متكاملة للعميل",
  },
];

export default function IllustratorTool() {
  const { lang } = useI18n();
  const [activeTab, setActiveTab] = useState<string>("grids");

  const currentModule = MODULES.find((m) => m.id === activeTab) || MODULES[0];

  return (
    <section
      id="proprietary-tooling"
      className="section border-t border-line bg-surface/40 py-[var(--section)] select-none"
    >
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-line pb-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="mono text-[0.68rem] uppercase tracking-[0.22em] text-seal font-semibold">
                  {lang === "ar"
                    ? "٠٤ / البحث والتطوير وأدوات العمل المبتكرة"
                    : "04 / R&D & PROPRIETARY TOOLING"}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-ink/40 bg-ink/10 mono text-[0.58rem] uppercase tracking-wider text-ink rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink animate-pulse" />
                  <span>
                    {lang === "ar"
                      ? "قيد التطوير المتقدم"
                      : "IN ACTIVE DEVELOPMENT"}
                  </span>
                </span>
              </div>
              <h2 className="display mt-3 text-[clamp(2rem,4.5vw,3.8rem)] font-black text-ink leading-tight">
                {lang === "ar"
                  ? "أتوميشن احترافي لبرنامج Adobe Illustrator"
                  : "Adobe Illustrator Automation Extension"}
              </h2>
            </div>
            <div className="mono text-[0.68rem] uppercase tracking-widest text-faint flex items-center gap-3">
              <span>CEP 11+ ARCHITECTURE</span>
              <span className="text-line-strong">|</span>
              <span className="text-ink font-semibold">EXTENDSCRIPT JSX</span>
            </div>
          </div>
        </Reveal>

        {/* The Exact Bilingual Author Statement */}
        <Reveal delay={0.12}>
          <div className="mt-8 border border-line bg-[#08080a] p-6 sm:p-10 rounded-sm relative overflow-hidden">
            <span
              className="pointer-events-none absolute -left-1 -top-1 h-3.5 w-3.5 border-l border-t border-ink"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute -bottom-1 -right-1 h-3.5 w-3.5 border-b border-r border-ink"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
              <div>
                <span className="mono text-[0.62rem] uppercase tracking-[0.2em] text-faint block mb-3">
                  {lang === "ar"
                    ? "بيان المطور والمصمم — محمد علاء"
                    : "DEVELOPER & DESIGNER STATEMENT — MUHAMED ALAA"}
                </span>
                <p
                  className={`text-base sm:text-lg leading-relaxed text-ink/95 font-medium ${
                    lang === "ar" ? "leading-[2.1]" : "leading-[1.75]"
                  }`}
                  dir={lang === "ar" ? "rtl" : "ltr"}
                >
                  {lang === "ar" ? (
                    <>
                      إنني أعمل حالياً على تطوير إكستنشن (Extension) تعمل كأتوميشن لبرنامج Adobe Illustrator، مخصصة لمصممي الهويات البصرية (Visual Identity)، وتوفّر الكثير من الوقت بنقرة واحدة؛ إذ تولّد بدقة شبكات بناء الشعارات (Logo Grids)، وعروض الشعار التقديمية (Logo Presentation)، وبراند جايدلاين احترافياً (Brand Guidelines)، إضافةً إلى حزم تصدير منظّمة لملفات الشعارات بدقة شديدة. ولا تكتفي الإكستنشن بتوفير ساعات من العمل في كل مشروع، بل تمنح النتائج طابعاً راقياً وبصمة خاصة، مع إبقاء المصمم متحكماً بالكامل في إبداعه.
                    </>
                  ) : (
                    <>
                      I'm currently developing an extension that works as an automation tool for Adobe Illustrator, built for brand and visual identity designers. It saves a great deal of time with a single click, generating precise logo construction grids, logo presentations, professional brand guidelines, and organized logo export packages with exceptional accuracy. It doesn't just save hours of work on every project; it gives the results a refined, signature look, while keeping the designer in complete control of their creativity.
                    </>
                  )}
                </p>
              </div>

              {/* Technical Capability Quick Spec */}
              <div className="border border-line/70 bg-[#0d0d10] p-6 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-line/60 pb-3 mb-4">
                    <span className="mono text-[0.65rem] uppercase tracking-wider text-ink font-bold">
                      EXTENSION SPECS
                    </span>
                    <span className="mono text-[0.6rem] text-faint">V1.0 PROPRIETARY</span>
                  </div>
                  <ul className="space-y-3 mono text-[0.72rem] text-muted">
                    <li className="flex items-center justify-between">
                      <span className="text-faint">Host Engine:</span>
                      <span className="text-ink">Adobe Illustrator CC 2021–2026</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-faint">Runtime:</span>
                      <span className="text-ink">Chromium CEP 11 / ES3 ExtendScript</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-faint">Execution:</span>
                      <span className="text-ink">Single-Click Deterministic Run</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-faint">Preservation:</span>
                      <span className="text-ink">Zero Destruction / Non-destructive</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-line/50 flex items-center justify-between mono text-[0.62rem]">
                  <span className="text-faint">STATUS:</span>
                  <span className="text-ink font-semibold flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>PRIVATE ALPHA ACTIVE</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4 Interactive Capability Pillars */}
        <div className="mt-12">
          {/* Module Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {MODULES.map((m) => {
              const isSelected = activeTab === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => {
                    sound.click("soft");
                    setActiveTab(m.id);
                  }}
                  className={`text-left p-4 sm:p-5 border transition-all duration-300 rounded-sm cursor-pointer ${
                    isSelected
                      ? "border-ink bg-surface shadow-lg text-ink"
                      : "border-line bg-[#0a0a0c] text-muted hover:border-line-strong hover:text-ink"
                  }`}
                >
                  <div className="flex items-center justify-between mono text-[0.62rem] mb-2">
                    <span className="text-faint">{lang === "ar" ? m.numAr : m.num}</span>
                    <span
                      className={`text-[0.55rem] uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        isSelected ? "bg-ink text-bg font-bold" : "bg-line/40 text-faint"
                      }`}
                    >
                      {lang === "ar" ? m.tagAr : m.tagEn}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base leading-snug">
                    {lang === "ar" ? m.titleAr : m.titleEn}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Interactive Module Specimen Showcase */}
          <div className="mt-6 border border-line bg-[#08080a] p-6 sm:p-8 rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-center"
              >
                {/* Visual Technical Schematic Mockup */}
                <div className="relative min-h-[260px] sm:min-h-[300px] border border-line/60 bg-[#050507] p-6 flex flex-col justify-between overflow-hidden rounded-sm">
                  <div className="flex items-center justify-between border-b border-line/40 pb-3 font-mono text-[0.58rem] text-faint uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                      <span>ILLUSTRATOR DOM · ARTBOARD STAGE</span>
                    </span>
                    <span>1:1 SCALE VECTOR PROOF</span>
                  </div>

                  {/* Dynamic Schematic Graphic according to selected tab */}
                  <div className="my-6 flex items-center justify-center">
                    {activeTab === "grids" && (
                      <div className="relative w-48 h-48 border border-dashed border-line-strong flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="w-full h-px bg-line-strong" />
                          <span className="h-full w-px bg-line-strong absolute" />
                        </div>
                        <div className="w-36 h-36 rounded-full border border-ink/40 absolute" />
                        <div className="w-24 h-24 rounded-full border border-dashed border-ink/60 absolute" />
                        <span className="absolute top-2 right-2 mono text-[0.52rem] text-faint">
                          45° BISECTOR
                        </span>
                        <span className="absolute bottom-2 left-2 mono text-[0.52rem] text-faint">
                          OPTICAL TANGENT
                        </span>
                        <div className="w-16 h-16 border-2 border-ink flex items-center justify-center mono text-xs font-bold text-ink">
                          LOGO
                        </div>
                      </div>
                    )}

                    {activeTab === "presentation" && (
                      <div className="w-full max-w-sm grid grid-cols-2 gap-3">
                        <div className="border border-line/80 bg-surface/60 p-4 aspect-[16/10] flex flex-col justify-between rounded-sm">
                          <span className="mono text-[0.55rem] text-faint">DECK 01 · DARK</span>
                          <span className="text-center font-bold text-sm text-ink">BRAND MARK</span>
                          <span className="mono text-[0.5rem] text-faint">3840 × 2160 4K</span>
                        </div>
                        <div className="border border-line/80 bg-[#f5f5f1] text-[#0a0a0c] p-4 aspect-[16/10] flex flex-col justify-between rounded-sm">
                          <span className="mono text-[0.55rem] text-black/60">DECK 02 · PAPER</span>
                          <span className="text-center font-bold text-sm text-black">علامة الشعار</span>
                          <span className="mono text-[0.5rem] text-black/60">LIGHT CONTRAST</span>
                        </div>
                      </div>
                    )}

                    {activeTab === "guidelines" && (
                      <div className="w-full max-w-sm space-y-2 font-mono text-[0.62rem]">
                        <div className="border border-line/70 p-3 flex items-center justify-between rounded-sm">
                          <span className="text-muted">COLOR TOKENS:</span>
                          <div className="flex items-center gap-1.5">
                            <span className="w-4 h-4 bg-white border border-line" />
                            <span className="w-4 h-4 bg-zinc-800 border border-line" />
                            <span className="w-4 h-4 bg-[#c9a227] border border-line" />
                            <span className="text-ink">CMYK / RGB / HEX</span>
                          </div>
                        </div>
                        <div className="border border-line/70 p-3 flex items-center justify-between rounded-sm">
                          <span className="text-muted">CLEAR SPACE:</span>
                          <span className="text-ink">1.5X MARK RADIUS (LOCKED)</span>
                        </div>
                        <div className="border border-line/70 p-3 flex items-center justify-between rounded-sm">
                          <span className="text-muted">MINIMUM PRINT:</span>
                          <span className="text-ink">16MM OFFSET / 48PX SCREEN</span>
                        </div>
                      </div>
                    )}

                    {activeTab === "export" && (
                      <div className="w-full max-w-sm font-mono text-[0.65rem] space-y-1.5">
                        <div className="text-ink font-semibold flex items-center gap-1.5">
                          <span>📁</span>
                          <span>Export_Package_Client/</span>
                        </div>
                        <div className="pl-4 text-muted flex items-center gap-1.5">
                          <span>├── 📁 01_Vector_Print/ [AI, EPS, PDF, SVG]</span>
                        </div>
                        <div className="pl-4 text-muted flex items-center gap-1.5">
                          <span>├── 📁 02_Digital_Screen/ [PNG24, WebP, Favicons]</span>
                        </div>
                        <div className="pl-4 text-muted flex items-center gap-1.5">
                          <span>├── 📁 03_Brand_Guidelines/ [PDF 300DPI]</span>
                        </div>
                        <div className="pl-4 text-emerald-400 flex items-center gap-1.5">
                          <span>└── ✓ Batch Verification Checksum OK</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-line/40 pt-2 flex items-center justify-between mono text-[0.55rem] text-faint">
                    <span>{currentModule.specEn}</span>
                    <span className="text-ink">100% NON-DESTRUCTIVE</span>
                  </div>
                </div>

                {/* Module Narrative Description */}
                <div>
                  <div className="mono text-xs uppercase tracking-wider text-faint mb-2">
                    {lang === "ar" ? currentModule.tagAr : currentModule.tagEn}
                  </div>
                  <h3 className="display text-2xl font-bold text-ink mb-4">
                    {lang === "ar" ? currentModule.titleAr : currentModule.titleEn}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-muted mb-6">
                    {lang === "ar" ? currentModule.descAr : currentModule.descEn}
                  </p>

                  <div className="border-t border-line/60 pt-4 flex flex-col gap-2">
                    <span className="mono text-[0.6rem] uppercase tracking-wider text-faint">
                      {lang === "ar" ? "المواصفة التقنية" : "TECHNICAL SPECIFICATION"}
                    </span>
                    <span className="mono text-[0.72rem] text-ink font-medium">
                      {lang === "ar" ? currentModule.specAr : currentModule.specEn}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

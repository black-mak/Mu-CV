"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { experience, education } from "@/lib/data";
import { sound } from "@/lib/sound";
import Reveal from "./Reveal";

const MILESTONES = [
  {
    id: "2014",
    years: "2014 — 2018",
    labelEn: "Formative Practice & Calligraphy",
    labelAr: "الممارسة المبكرة ودراسات الخط العربي",
    targetJobIdx: 2,
    badge: "FOUNDATION",
  },
  {
    id: "2018",
    years: "2018 — 2019",
    labelEn: "Russian Cultural Center Diploma",
    labelAr: "دبلومة التصميم — المركز الروسي (ممتاز)",
    targetEduIdx: 0,
    badge: "ACADEMIC",
  },
  {
    id: "2019",
    years: "2019 — 2023",
    labelEn: "Operations Leadership (15+ Team)",
    labelAr: "قيادة العمليات الميدانية والفرق (١٥+ عضواً)",
    targetJobIdx: 1,
    badge: "OPERATIONS",
  },
  {
    id: "2021",
    years: "2021 — 2022",
    labelEn: "British Cultural Center (132h English)",
    labelAr: "اللغة الإنجليزية المعتمدة — المركز البريطاني",
    targetEduIdx: 1,
    badge: "COMMUNICATION",
  },
  {
    id: "2023",
    years: "2023 — Present",
    labelEn: "BLACK-MAK® Studio Practice",
    labelAr: "ممارسة الاستوديو والهويات الدولية المستقلة",
    targetJobIdx: 0,
    badge: "SOVEREIGN",
  },
];

export default function Experience() {
  const { t, pick, lang } = useI18n();
  const [expanded, setExpanded] = useState<number[]>([0, 1]); // Expand top 2 by default
  const [activeMilestone, setActiveMilestone] = useState<string>("2023");

  const toggleExpand = (idx: number) => {
    sound.click("soft");
    setExpanded((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const toggleAll = () => {
    sound.click("crisp");
    if (expanded.length === experience.length) {
      setExpanded([]);
    } else {
      setExpanded(experience.map((_, i) => i));
    }
  };

  const handleMilestoneClick = (m: typeof MILESTONES[0]) => {
    sound.click("pop");
    setActiveMilestone(m.id);
    if (typeof m.targetJobIdx === "number") {
      if (!expanded.includes(m.targetJobIdx)) {
        setExpanded((prev) => [...prev, m.targetJobIdx!]);
      }
    }
  };

  return (
    <section id="experience" className="section border-b border-line bg-surface">
      <div className="container">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="eyebrow block">{t("idx.experience")}</span>
              <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.4rem)]">
                {t("section.experience")}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleAll}
                className="border border-line-strong px-3.5 py-1.5 mono text-[0.66rem] uppercase tracking-wider text-muted hover:border-ink hover:text-ink transition-colors"
              >
                {expanded.length === experience.length
                  ? lang === "ar"
                    ? "طي الكل −"
                    : "Collapse All −"
                  : lang === "ar"
                  ? "توسيع الكل +"
                  : "Expand All +"}
              </button>
            </div>
          </div>
        </Reveal>

        {/* Interactive Milestone Scrubber (2014-2026) */}
        <Reveal delay={0.08}>
          <div className="mt-12 border-t border-b border-line py-5">
            <div className="flex items-center justify-between mb-3">
              <span className="mono text-[0.62rem] uppercase tracking-widest text-seal font-semibold">
                {lang === "ar" ? "مسار التطور المهني (٢٠١٤ — ٢٠٢٦)" : "CAREER TRAJECTORY & MILESTONES"}
              </span>
              <span className="mono text-[0.62rem] text-faint">
                {lang === "ar" ? "انقر لاستعراض المحطة" : "Click milestone to inspect"}
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {MILESTONES.map((m) => {
                const isActive = activeMilestone === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => handleMilestoneClick(m)}
                    className={`group shrink-0 border px-3.5 py-2 text-start transition-all ${
                      isActive
                        ? "border-seal bg-bg shadow-md"
                        : "border-line bg-bg/60 hover:border-ink"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="mono text-[0.65rem] text-seal font-bold">
                        {m.years}
                      </span>
                      <span className="mono text-[0.55rem] px-1.5 py-0.2 border border-line text-faint">
                        {m.badge}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-semibold text-ink group-hover:text-seal transition-colors">
                      {lang === "ar" ? m.labelAr : m.labelEn}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-12">
          <span
            className="tspine absolute bottom-2 top-2 w-px bg-line ltr:left-[7px] rtl:right-[7px] md:ltr:left-[calc(200px+7px)] md:rtl:right-[calc(200px+7px)]"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-12">
            {experience.map((job, i) => {
              const isOpen = expanded.includes(i);
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <article className="print-avoid-break grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr] md:gap-12">
                    {/* Left Date Rail */}
                    <div className="mono flex items-start gap-4 text-sm text-muted md:flex-col md:gap-2">
                      <span className="order-2 md:order-1 font-semibold text-ink/90">
                        {job.from} — {pick(job.to)}
                      </span>
                      <span className="order-1 mt-[5px] inline-block h-[15px] w-[15px] shrink-0 rounded-full border-2 border-seal bg-bg md:order-2 md:hidden" />
                      <span className="order-3 inline-block border border-line-strong px-2 py-[2px] text-[0.6rem] uppercase tracking-widest text-seal font-medium">
                        {pick(job.tag)}
                      </span>
                    </div>

                    {/* Right Content Block */}
                    <div className="relative ltr:pl-8 rtl:pr-8 md:ltr:pl-12 md:rtl:pr-12">
                      {/* Timeline Node Dots */}
                      <span
                        className="absolute top-[6px] hidden h-[15px] w-[15px] rounded-full border-2 border-seal bg-bg ltr:-left-[0px] rtl:-right-[0px] md:block md:ltr:left-[-5px] md:rtl:right-[-5px]"
                        aria-hidden="true"
                      />
                      <span
                        className="absolute top-[6px] h-[15px] w-[15px] rounded-full border-2 border-seal bg-bg ltr:-left-[0.5px] rtl:-right-[0.5px] md:hidden"
                        aria-hidden="true"
                      />

                      {/* Header with Click to Expand */}
                      <div
                        onClick={() => toggleExpand(i)}
                        className="cursor-pointer group select-none"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-[1.35rem] font-bold leading-tight tracking-tight group-hover:text-seal transition-colors">
                              {pick(job.role)}
                            </h3>
                            <div className="mono mt-2 text-xs uppercase tracking-widest text-muted">
                              {pick(job.org)} · <span className="text-faint">{pick(job.place)}</span>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="mt-1 grid h-7 w-7 shrink-0 place-items-center border border-line text-sm text-muted group-hover:border-seal group-hover:text-seal transition-colors"
                            aria-label={isOpen ? "Collapse" : "Expand"}
                          >
                            {isOpen ? "−" : "+"}
                          </button>
                        </div>
                      </div>

                      {/* Expandable Responsibilities & Metrics */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-5 space-y-3.5 border-t border-line/60 pt-4">
                              {job.bullets.map((b, j) => (
                                <li
                                  key={j}
                                  className="relative max-w-[66ch] leading-relaxed text-muted ltr:pl-5 rtl:pr-5 text-[0.92rem]"
                                >
                                  <span
                                    className="absolute top-[0.65em] h-[5px] w-[5px] bg-seal ltr:left-0 rtl:right-0"
                                    aria-hidden="true"
                                  />
                                  {pick(b)}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <Reveal>
          <div className="mt-20 border-t border-line pt-10">
            <span className="eyebrow mb-6 block text-faint">{t("section.education")}</span>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="print-avoid-break border border-line bg-bg p-5 transition-colors hover:border-line-strong"
                >
                  <div className="flex items-center justify-between">
                    <span className="mono text-xs text-seal font-semibold">
                      {edu.from} — {edu.to}
                    </span>
                    <span className="mono text-[0.62rem] uppercase tracking-wider text-faint">
                      {pick(edu.org)}
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-ink">{pick(edu.degree)}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{pick(edu.note)}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

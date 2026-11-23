"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { skills, type SkillGroup } from "@/lib/data";
import { sound } from "@/lib/sound";
import Reveal from "./Reveal";

function TiltCard({ group, index }: { group: SkillGroup; index: number }) {
  const { pick } = useI18n();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 22 });
  const sy = useSpring(y, { stiffness: 300, damping: 22 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-6deg", "6deg"]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="print-avoid-break group relative h-full border border-line bg-bg p-6 sm:p-8 transition-colors duration-300 hover:border-ink/80 hover:bg-surface/30"
    >
      <div style={{ transform: "translateZ(24px)" }}>
        <div className="mb-6 flex items-baseline justify-between border-b border-line/60 pb-4">
          <div>
            <span className="mono text-[0.62rem] uppercase tracking-widest text-faint">
              DISCIPLINE
            </span>
            <h3 className="mt-1 text-lg font-bold sm:text-xl text-ink">{pick(group.cat)}</h3>
          </div>
          <span className="mono skill-tick text-[0.7rem] font-medium text-seal">
            0{index + 1}
          </span>
        </div>
        <ul className="space-y-3.5">
          {group.items.map((item, j) => (
            <li
              key={j}
              className="flex items-center justify-between gap-3 text-[0.84rem] text-ink/90 transition-colors group-hover/item:text-ink"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-line-strong group-hover:bg-ink transition-colors" />
                <span>{pick(item.name)}</span>
              </span>
              <span className="mono text-[0.62rem] text-faint opacity-60">
                0{j + 1}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { t, pick, lang } = useI18n();
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabOptions = [
    { id: "all", label: lang === "ar" ? "كل التخصصات" : "All Disciplines" },
    { id: "core", label: lang === "ar" ? "الخبرة الأساسية" : "Core Expertise" },
    { id: "workflow", label: lang === "ar" ? "أسلوب العمل والذكاء الاصطناعي" : "Workflow & AI" },
    { id: "leadership", label: lang === "ar" ? "القيادة والعمليات" : "Leadership & Ops" },
  ];

  const filteredGroups = skills.filter((g) => {
    if (activeTab === "all") return true;
    if (activeTab === "core") return g.cat.en.includes("Core");
    if (activeTab === "workflow") return g.cat.en.includes("Workflow");
    if (activeTab === "leadership") return g.cat.en.includes("Leadership");
    return true;
  });

  return (
    <section id="skills" className="section border-b border-line">
      <div className="container">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow block text-faint">{t("idx.skills")}</span>
              <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.4rem)] text-ink">
                {t("section.skills")}
              </h2>
            </div>
            <p className="lede max-w-[46ch] text-[0.95rem]">{t("skills.note")}</p>
          </div>
        </Reveal>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-line pb-4">
          {tabOptions.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sound.click("soft");
                  setActiveTab(tab.id);
                }}
                className={`mono relative px-3.5 py-1.5 text-[0.7rem] uppercase tracking-wider transition-colors ${
                  isActive
                    ? "bg-ink text-bg font-semibold"
                    : "border border-line text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: 1000 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((g, i) => (
              <TiltCard key={g.cat.en} group={g} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Studio Practice Verification Footer */}
        <Reveal delay={0.15} tier="feedback">
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line/60 pt-5 text-muted">
            <span className="mono text-[0.65rem] uppercase tracking-[0.12em] text-faint">
              Standard: Swiss Precision · Typographic Restraint · Zero Visual Noise
            </span>
            <span className="mono text-[0.65rem] text-seal font-medium">
              BLACK-MAK Studio Practice · 2018 — 2026
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

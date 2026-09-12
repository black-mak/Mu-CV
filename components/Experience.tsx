"use client";

import { useI18n } from "@/lib/i18n";
import { experience, education } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  const { t, pick } = useI18n();

  return (
    <section id="experience" className="section border-b border-line bg-surface">
      <div className="container">
        <Reveal>
          <span className="eyebrow block">{t("idx.experience")}</span>
          <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.4rem)]">
            {t("section.experience")}
          </h2>
        </Reveal>

        {/* timeline */}
        <div className="relative mt-14">
          <span
            className="tspine absolute bottom-2 top-2 w-px bg-line ltr:left-[7px] rtl:right-[7px] md:ltr:left-[calc(200px+7px)] md:rtl:right-[calc(200px+7px)]"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 0.08}>
                {pick(job.tag).toLowerCase().includes("leadership") ? (
                  <article className="print-avoid-break grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr] md:gap-12">
                    <div className="mono flex items-start gap-4 text-sm text-muted md:flex-col md:gap-2">
                      <span className="order-2 md:order-1">
                        {job.from} — {pick(job.to)}
                      </span>
                      <span className="order-1 mt-[5px] inline-block h-[15px] w-[15px] shrink-0 rounded-full border-2 border-seal bg-bg md:order-2 md:hidden" />
                      <span className="order-3 inline-block border border-line-strong px-2 py-[2px] text-[0.6rem] uppercase tracking-widest text-faint">
                        {pick(job.tag)}
                      </span>
                    </div>
                    <div className="relative ltr:pl-8 rtl:pr-8 md:ltr:pl-12 md:rtl:pr-12">
                      <h3 className="text-[1.05rem] font-bold leading-tight tracking-tight">
                        {pick(job.role)} — <span className="text-[0.85rem] font-normal text-muted">{pick(job.org)}</span>
                      </h3>
                      <p className="mt-2 max-w-[64ch] text-sm leading-relaxed text-muted">
                        {pick(job.bullets[0])}
                      </p>
                    </div>
                  </article>
                ) : (
                <article className="print-avoid-break grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr] md:gap-12">
                  <div className="mono flex items-start gap-4 text-sm text-muted md:flex-col md:gap-2">
                    <span className="order-2 md:order-1">
                      {job.from} — {pick(job.to)}
                    </span>
                    <span className="order-1 mt-[5px] inline-block h-[15px] w-[15px] shrink-0 rounded-full border-2 border-seal bg-bg md:order-2 md:hidden" />
                    <span className="order-3 inline-block border border-line-strong px-2 py-[2px] text-[0.6rem] uppercase tracking-widest text-faint">
                      {pick(job.tag)}
                    </span>
                  </div>

                  <div className="relative ltr:pl-8 rtl:pr-8 md:ltr:pl-12 md:rtl:pr-12">
                    <span
                      className="absolute top-[6px] hidden h-[15px] w-[15px] rounded-full border-2 border-seal bg-bg ltr:-left-[0px] rtl:-right-[0px] md:block md:ltr:left-[-5px] md:rtl:right-[-5px]"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute top-[6px] h-[15px] w-[15px] rounded-full border-2 border-seal bg-bg ltr:-left-[0.5px] rtl:-right-[0.5px] md:hidden"
                      aria-hidden="true"
                    />
                    <h3 className="text-[1.4rem] font-bold leading-tight tracking-tight">
                      {pick(job.role)}
                    </h3>
                    <div className="mono mt-2 text-xs uppercase tracking-widest text-ink/70">
                      {pick(job.org)} · {pick(job.place)}
                    </div>
                    <ul className="mt-5 space-y-3">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="relative max-w-[64ch] leading-relaxed text-muted ltr:pl-5 rtl:pr-5">
                          <span className="absolute top-[0.7em] h-[5px] w-[5px] bg-seal ltr:left-0 rtl:right-0" aria-hidden="true" />
                          {pick(b)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        {/* education — supporting information, kept compact */}
        <Reveal>
          <h3 className="eyebrow mt-20 mb-6 block border-t border-line pt-10">
            {t("section.education")}
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={i} delay={i * 0.06} tier="feedback">
              <div className="print-avoid-break flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line pb-3">
                <span className="mono text-xs text-faint">{edu.from} — {edu.to}</span>
                <span className="text-[0.92rem] font-bold">{pick(edu.degree)}</span>
                <span className="mono text-[0.68rem] uppercase tracking-wider text-muted">{pick(edu.org)}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

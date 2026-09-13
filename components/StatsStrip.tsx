"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";
import { stats } from "@/lib/data";
import Reveal from "./Reveal";

// The numbers count up once when the strip enters the viewport — starting
// NEAR the target and settling onto it. The FINAL values are what the
// server renders in the HTML: crawlers, share previews, and no-JS visitors
// see "12+ years" and "50+ identities", never "0+".
export default function StatsStrip() {
  const { pick } = useI18n();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const targets = stats.map((s) => Number(String(s.value).replace(/\D/g, "")) || 0);
    const nodes = Array.from(el.querySelectorAll<HTMLElement>("b[data-count]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const dur = 1200;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            nodes.forEach((b, i) => {
              const target = targets[i];
              // settle from ~30% below the final value — never from zero
              const floor = target - Math.ceil(target * 0.3);
              b.textContent = Math.round(floor + (target - floor) * eased) + "+";
            });
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section aria-label="Facts" className="border-b border-line bg-surface">
      <div ref={ref} className="container grid grid-cols-3 gap-y-8 py-12">
        {stats.map((s, i) => {
          const num = Number(String(s.value).replace(/\D/g, ""));
          return (
            <Reveal key={i} delay={i * 0.08}>
              <div className="px-2 text-center md:text-start">
                {/* final value ships in the SSR HTML; the counter only refines it */}
                <div className="display text-[clamp(2.2rem,5vw,3.4rem)] leading-none">
                  {num > 0 ? (
                    <b data-count={num}>{s.value}</b>
                  ) : (
                    s.value
                  )}
                </div>
                <div className="eyebrow mt-3">{pick(s.label)}</div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

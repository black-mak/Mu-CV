"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { profile, hero } from "@/lib/data";
import { sound } from "@/lib/sound";
import Reveal from "./Reveal";
import RoleRotator from "./RoleRotator";

export default function Hero() {
  const { lang, pick } = useI18n();
  const [cairoTime, setCairoTime] = useState<string>("");

  // Live Cairo Local Time (UTC+2 / EET)
  useEffect(() => {
    const updateTime = () => {
      try {
        const d = new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Cairo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
        setCairoTime(d);
      } catch {
        setCairoTime("04:00 AM");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  // 3D Portrait Tilt
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line pt-[clamp(6rem,14vh,10rem)] pb-[clamp(3rem,7vw,6rem)]"
    >
      <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="container relative">
        {/* Top Heartbeat / Cairo Pulse Banner */}
        <Reveal tier="feedback">
          <div className="mb-6 inline-flex flex-wrap items-center gap-2.5 border border-line-strong bg-surface/70 px-3 py-1.5 backdrop-blur-sm mono text-[0.62rem] uppercase tracking-widest text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-seal opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-seal"></span>
            </span>
            <span className="text-ink font-semibold">
              {lang === "ar" ? "متاح لمشاريع مختارة" : "Available for Select Commissions"}
            </span>
            <span className="text-faint">·</span>
            <span>{lang === "ar" ? "القاهرة" : "Cairo, EG"} {cairoTime ? `(${cairoTime})` : ""}</span>
          </div>
        </Reveal>

        <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
          {/* text column */}
          <div className="flex-1">
            <Reveal>
              <span className="eyebrow kicker-shimmer" data-words>{pick(hero.kicker)}</span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="display mt-6 text-[clamp(2.6rem,8vw,6.4rem)]">
                {pick(profile.name)}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-3 text-[clamp(1.4rem,3.4vw,2.4rem)] font-bold leading-[1.05]">
                {pick(hero.lead)} <span>{pick(hero.outline)}</span>
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6">
                <RoleRotator />
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="lede mt-7">{pick(hero.sub)}</p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a
                  href="#contact"
                  data-magnetic
                  onClick={() => sound.click("crisp")}
                  className="btn btn-light"
                >
                  <span>{lang === "ar" ? "تواصل معي" : "Get in touch"}</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  onClick={() => sound.click("soft")}
                  className="text-link force-ltr"
                >
                  {profile.email}
                </a>
              </div>
            </Reveal>
          </div>

          {/* portrait — 3D interactive tilt frame */}
          <Reveal delay={0.2} className="w-[62%] max-w-[300px] shrink-0 self-center md:w-[320px]">
            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY, perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => sound.click("soft")}
              className="portrait-settle group relative aspect-[3/4] border border-line bg-surface p-2 shadow-2xl transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="/portrait.webp"
                  alt={pick(profile.name)}
                  fill
                  priority
                  sizes="(max-width: 768px) 62vw, 320px"
                  className="object-cover object-top grayscale contrast-[1.08] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
                {/* dynamic specular sheen highlight */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              {/* corner ticks */}
              <span className="pointer-events-none absolute -left-[1px] -top-[1px] h-4 w-4 border-l border-t border-ink" />
              <span className="pointer-events-none absolute -bottom-[1px] -right-[1px] h-4 w-4 border-b border-r border-ink" />
              <span className="absolute bottom-3 left-3 mono text-[0.55rem] uppercase tracking-[0.2em] text-ink/80">
                {profile.alias} · EST. {profile.established}
              </span>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { sound } from "@/lib/sound";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#about", k: "nav.about" as const },
  { href: "#selected-work", k: "idx.work" as const, fallback: "Selected Marks", arFallback: "الأعمال" },
  { href: "#skills", k: "nav.skills" as const },
  { href: "#experience", k: "nav.experience" as const },
  { href: "#credentials", k: "nav.credentials" as const },
];

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the mobile menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1)).concat("contact");
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const handleLangToggle = () => {
    sound.click("crisp");
    setLang(lang === "ar" ? "en" : "ar");
  };

  const handleMenuToggle = () => {
    sound.click("pop");
    setOpen((o) => !o);
  };

  return (
    <header
      dir="ltr"
      className={`fixed inset-x-0 top-0 z-[100] border-b transition-colors duration-500 ${
        scrolled ? "border-line bg-bg/85 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="container flex min-h-[76px] items-center justify-between gap-2 md:gap-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            sound.click("soft");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="BLACK-MAK home"
        >
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => sound.click("soft")}
              className={`mono text-[0.68rem] uppercase tracking-[0.16em] transition-colors hover:text-ink ${
                active === l.href.slice(1) ? "text-ink font-semibold" : "text-muted"
              }`}
              aria-current={active === l.href.slice(1) ? "location" : undefined}
            >
              {l.k === "idx.work" ? (lang === "ar" ? l.arFallback : l.fallback) : t(l.k)}
            </a>
          ))}
          <a
            href="https://black-mak.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.click("crisp")}
            className="mono text-[0.68rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            {t("nav.studio")}
          </a>
          <a
            href="#contact"
            onClick={() => sound.click("crisp")}
            className="btn btn-light"
          >
            <span>{t("nav.contact")}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              const isM = sound.toggleMute();
              setMuted(isM);
              if (!isM) sound.click("pop");
            }}
            aria-label={muted ? "Unmute acoustic effects" : "Mute acoustic effects"}
            className="grid h-10 w-10 place-items-center border border-line-strong text-xs text-muted transition-colors hover:border-ink hover:text-ink"
            title={muted ? "Unmute sound" : "Mute sound"}
          >
            {muted ? "🔇" : "🔊"}
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={handleLangToggle}
            aria-label="Switch language"
            className="grid h-10 place-items-center border border-line-strong px-3 mono text-[0.7rem] text-muted transition-colors hover:border-ink hover:text-ink"
          >
            {t("lang.toggle")}
          </button>
          <button
            type="button"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center border border-line-strong md:hidden"
          >
            <span className={`block h-[2px] w-5 bg-ink transition ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`mt-1 block h-[2px] w-5 bg-ink transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`container grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "grid-rows-[1fr] py-8 opacity-100" : "grid-rows-[0fr] py-0 opacity-0"
        }`}
        aria-hidden={!open}
        {...(!open ? { inert: "" as unknown as boolean } : {})}
      >
        <nav className="flex min-h-0 flex-col gap-6 overflow-hidden" aria-label="Mobile navigation">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => {
                sound.click("soft");
                setOpen(false);
              }}
              className={`text-2xl font-bold transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
            >
              {l.k === "idx.work" ? (lang === "ar" ? l.arFallback : l.fallback) : t(l.k)}
            </a>
          ))}
          <a
            href="https://black-mak.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              sound.click("crisp");
              setOpen(false);
            }}
            className={`text-2xl font-bold transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
          >
            {t("nav.studio")}
          </a>
          <a
            href="#contact"
            onClick={() => {
              sound.click("crisp");
              setOpen(false);
            }}
            className="btn btn-light w-full"
          >
            {t("nav.contact")}
          </a>
        </nav>
      </div>
    </header>
  );
}

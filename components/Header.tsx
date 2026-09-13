"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#about", k: "nav.about" as const },
  { href: "#skills", k: "nav.skills" as const },
  { href: "#experience", k: "nav.experience" as const },
  { href: "#credentials", k: "nav.credentials" as const },
];

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <header
      dir="ltr"
      className={`fixed inset-x-0 top-0 z-[100] border-b transition-colors duration-500 ${
        scrolled ? "border-line bg-bg/85 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="container flex min-h-[76px] items-center justify-between gap-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
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
              className={`mono text-[0.68rem] uppercase tracking-[0.16em] transition-colors hover:text-ink ${
                active === l.href.slice(1) ? "text-ink" : "text-muted"
              }`}
              aria-current={active === l.href.slice(1) ? "true" : undefined}
            >
              {t(l.k)}
            </a>
          ))}
          <a
            href="https://black-mak.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-[0.68rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            {t("nav.studio")}
          </a>
          <a href="#contact" className="btn btn-light">
            <span>{t("nav.contact")}</span>
            <span aria-hidden="true">â†—</span>
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            aria-label="Switch language"
            className="grid h-10 place-items-center border border-line-strong px-3 mono text-[0.7rem] text-muted transition-colors hover:border-ink hover:text-ink"
          >
            {t("lang.toggle")}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
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
      >
        <nav className="flex min-h-0 flex-col gap-6 overflow-hidden" aria-label="Mobile navigation">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`text-2xl font-bold transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
              {t(l.k)}
            </a>
          ))}
          <a
            href="https://black-mak.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={`text-2xl font-bold transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
          >
            {t("nav.studio")}
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-light w-full">
            {t("nav.contact")}
          </a>
        </nav>
      </div>
    </header>
  );
}

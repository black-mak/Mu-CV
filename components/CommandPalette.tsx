"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { sound } from "@/lib/sound";
import { profile, STUDIO_URL } from "@/lib/data";
import { assetPath } from "@/lib/basePath";

type CommandItem = {
  id: string;
  category: "nav" | "docs" | "actions" | "pref";
  label: { en: string; ar: string };
  sub?: { en: string; ar: string };
  icon: string;
  action: () => void;
  shortcut?: string;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const { lang, setLang, t } = useI18n();
  const inputRef = useRef<HTMLInputElement>(null);

  // Global Keyboard Trigger (Cmd+K / Ctrl+K / Escape)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        sound.click("pop");
        setOpen((o) => !o);
      } else if (e.key === "Escape" && open) {
        sound.click("soft");
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Focus input on open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIdx(0);
      setQuery("");
    }
  }, [open]);

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      sound.click("crisp");
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {}
  };

  const scrollTo = (id: string) => {
    setOpen(false);
    sound.click("crisp");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const commands: CommandItem[] = useMemo(
    () => [
      // Navigation
      {
        id: "nav-top",
        category: "nav",
        label: { en: "Home / Executive Summary", ar: "الرئيسية / الملخص التنفيذي" },
        sub: { en: "Return to the top of the dossier", ar: "الرجوع لأعلى الصفحة" },
        icon: "↑",
        action: () => {
          setOpen(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
      },
      {
        id: "nav-work",
        category: "nav",
        label: { en: "Selected Marks & Identity Work", ar: "نماذج الأعمال والشعارات المختارة" },
        sub: { en: "Curated identity systems & marks", ar: "استعراض الهويات والشعارات" },
        icon: "◈",
        action: () => scrollTo("selected-work"),
      },
      {
        id: "nav-skills",
        category: "nav",
        label: { en: "Core Skills & Strategic Matrix", ar: "مصفوفة المهارات والخبرات الأساسية" },
        sub: { en: "Identity, typography, operations", ar: "الهوية، التايبوغرافي، الإدارة" },
        icon: "⚡",
        action: () => scrollTo("skills"),
      },
      {
        id: "nav-experience",
        category: "nav",
        label: { en: "Career & Operations Timeline", ar: "الخبرات والمسار المهني والقيادي" },
        sub: { en: "12+ years of design and leadership", ar: "١٢+ عاماً من التصميم والقيادة" },
        icon: "◷",
        action: () => scrollTo("experience"),
      },
      {
        id: "nav-credentials",
        category: "nav",
        label: { en: "Certifications & Diplomas", ar: "الشهادات والدبلومات المعتمدة" },
        sub: { en: "Verified British Council, RCC & FDTC credentials", ar: "المركز البريطاني والروسي وFDTC" },
        icon: "★",
        action: () => scrollTo("credentials"),
      },
      {
        id: "nav-contact",
        category: "nav",
        label: { en: "Contact & Commission Inquiries", ar: "التواصل وطلب مشروع جديد" },
        sub: { en: "Direct channels and consultation", ar: "قنوات التواصل المباشرة" },
        icon: "✉",
        action: () => scrollTo("contact"),
      },

      // Documents
      {
        id: "doc-pdf",
        category: "docs",
        label: { en: "Download Executive Visual CV (PDF)", ar: "تحميل السيرة الذاتية البصرية (PDF)" },
        sub: { en: "High-resolution curated print folio", ar: "ملف عالي الدقة ومصمم خصيصاً" },
        icon: "⇩",
        action: () => {
          sound.click("crisp");
          window.open(profile.cvPdf, "_blank");
          setOpen(false);
        },
      },
      {
        id: "doc-ats",
        category: "docs",
        label: { en: "Download ATS Corporate Resume (.DOCX)", ar: "تحميل نسخة الشركات المتوافقة مع ATS (.DOCX)" },
        sub: { en: "Machine-readable Word document for HR", ar: "ملف وورد متوافق مع أنظمة التوظيف" },
        icon: "⇩",
        action: () => {
          sound.click("crisp");
          window.location.href = assetPath("/cv/muhamed-alaa-ats-cv.docx");
          setOpen(false);
        },
      },
      {
        id: "doc-vcf",
        category: "docs",
        label: { en: "Save vCard (.VCF) to Phone Contacts", ar: "حفظ كارت الاتصال الرقمي (vCard) في هاتفك" },
        sub: { en: "One-click contact card for iOS / Android", ar: "إضافة جهة الاتصال مباشرة" },
        icon: "📇",
        action: () => {
          sound.click("crisp");
          window.location.href = assetPath("/muhamed-alaa.vcf");
          setOpen(false);
        },
      },
      {
        id: "action-print",
        category: "docs",
        label: { en: "Print Executive CV (Swiss A4 Layout)", ar: "طباعة السيرة الذاتية (تنسيق A4 سويسري)" },
        sub: { en: "Optimized clean paper format (Ctrl+P)", ar: "تنسيق مخصص للطباعة الورقية الأنيقة" },
        icon: "⎙",
        shortcut: "Ctrl+P",
        action: () => {
          setOpen(false);
          sound.click("crisp");
          setTimeout(() => window.print(), 300);
        },
      },

      // Connect & External
      {
        id: "studio-external",
        category: "actions",
        label: { en: "Visit BLACK-MAK® Studio Website", ar: "زيارة استوديو BLACK-MAK® الرئيسي" },
        sub: { en: "Full archive, case studies, & estimator", ar: "الأرشيف الكامل وحاسبة المشروعات" },
        icon: "↗",
        action: () => {
          sound.click("crisp");
          window.open(STUDIO_URL, "_blank");
          setOpen(false);
        },
      },
      {
        id: "action-whatsapp",
        category: "actions",
        label: { en: "Chat on WhatsApp (+20 100 246 2821)", ar: "محادثة فورية عبر واتساب (+20 100 246 2821)" },
        sub: { en: "Instant direct line with Muhamed Alaa", ar: "تواصل مباشر وسريع" },
        icon: "💬",
        action: () => {
          sound.click("crisp");
          window.open(profile.whatsapp, "_blank");
          setOpen(false);
        },
      },
      {
        id: "action-copy-email",
        category: "actions",
        label: { en: "Copy Email Address", ar: "نسخ البريد الإلكتروني" },
        sub: { en: profile.email, ar: profile.email },
        icon: copiedKey === "email" ? "✓" : "📋",
        action: () => copyToClipboard(profile.email, "email"),
      },
      {
        id: "action-copy-phone",
        category: "actions",
        label: { en: "Copy Phone Number", ar: "نسخ رقم الهاتف" },
        sub: { en: profile.phone, ar: profile.phone },
        icon: copiedKey === "phone" ? "✓" : "📋",
        action: () => copyToClipboard(profile.phoneRaw, "phone"),
      },

      // Preferences
      {
        id: "pref-lang",
        category: "pref",
        label: {
          en: lang === "ar" ? "Switch to English" : "التبديل إلى العربية",
          ar: lang === "ar" ? "Switch to English" : "التبديل إلى العربية",
        },
        sub: { en: "Toggle interface language", ar: "تغيير لغة الموقع بالكامل" },
        icon: "🌐",
        action: () => {
          sound.click("crisp");
          setLang(lang === "ar" ? "en" : "ar");
          setOpen(false);
        },
      },
      {
        id: "pref-sound",
        category: "pref",
        label: {
          en: sound.isMuted() ? "Unmute Acoustic Effects" : "Mute Acoustic Effects",
          ar: sound.isMuted() ? "تفعيل المؤثرات الصوتية" : "كتم المؤثرات الصوتية",
        },
        sub: { en: "Tactile web-audio click synthesizer", ar: "التحكم في الصوتيات التفاعلية" },
        icon: sound.isMuted() ? "🔇" : "🔊",
        action: () => {
          const isM = sound.toggleMute();
          if (!isM) sound.click("pop");
          setOpen(false);
        },
      },
    ],
    [lang, setLang, copiedKey]
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase().trim();
    return commands.filter(
      (c) =>
        c.label.en.toLowerCase().includes(q) ||
        c.label.ar.toLowerCase().includes(q) ||
        (c.sub && (c.sub.en.toLowerCase().includes(q) || c.sub.ar.toLowerCase().includes(q)))
    );
  }, [commands, query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      sound.click("soft");
      setSelectedIdx((i) => (i + 1) % Math.max(1, filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      sound.click("soft");
      setSelectedIdx((i) => (i - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selectedIdx]) {
        filtered[selectedIdx].action();
      }
    }
  };

  return (
    <>
      {/* Floating Command Palette Trigger (Bottom Right Pill) */}
      <div className="fixed bottom-6 left-6 z-[90] no-print">
        <button
          type="button"
          onClick={() => {
            sound.click("crisp");
            setOpen(true);
          }}
          className="group flex items-center gap-2.5 border border-line-strong bg-surface/90 px-3.5 py-2 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-ink hover:bg-surface"
          aria-label="Open Command Palette (Cmd+K)"
        >
          <span className="grid h-4 w-4 place-items-center text-xs text-seal">⌘</span>
          <span className="mono text-[0.68rem] uppercase tracking-wider text-muted group-hover:text-ink">
            {lang === "ar" ? "لوحة الأوامر" : "Command Menu"}
          </span>
          <span className="hidden sm:inline-block border border-line px-1.5 py-0.5 mono text-[0.55rem] text-faint">
            ⌘K
          </span>
        </button>
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-[250] flex items-start justify-center p-4 pt-[12vh] sm:p-6 sm:pt-[15vh]"
            role="dialog"
            aria-modal="true"
            aria-label="Command Palette"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                sound.click("soft");
                setOpen(false);
              }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-xl overflow-hidden border border-line-strong bg-[#0c0d0f] shadow-[0_24px_80px_rgba(0,0,0,0.85)]"
            >
              {/* Input Header */}
              <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
                <span className="text-base text-seal">⌘</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIdx(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    lang === "ar"
                      ? "ابحث عن قسم، حمّل الـ CV، أو غيّر الإعدادات..."
                      : "Type a command, jump to section, or download CV..."
                  }
                  className="w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="border border-line px-2 py-0.5 mono text-[0.6rem] text-faint hover:text-ink"
                >
                  ESC
                </button>
              </div>

              {/* Command List */}
              <div className="max-h-[58vh] overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <div className="py-10 text-center mono text-xs text-muted">
                    {lang === "ar" ? "لا توجد نتائج مطابقة لطلبك" : "No matching commands found"}
                  </div>
                ) : (
                  filtered.map((item, i) => {
                    const isSelected = i === selectedIdx;
                    return (
                      <div
                        key={item.id}
                        onClick={() => item.action()}
                        onMouseEnter={() => setSelectedIdx(i)}
                        className={`flex cursor-pointer items-center justify-between gap-3 px-3.5 py-2.5 transition-colors duration-150 ${
                          isSelected
                            ? "bg-seal/15 text-ink border-l-2 border-seal"
                            : "text-muted hover:bg-surface/50"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`grid h-6 w-6 shrink-0 place-items-center text-xs font-mono border ${
                              isSelected
                                ? "border-seal bg-seal/20 text-seal"
                                : "border-line text-faint"
                            }`}
                          >
                            {item.icon}
                          </span>
                          <div className="min-w-0">
                            <span
                              className={`block truncate text-[0.84rem] font-semibold ${
                                isSelected ? "text-ink" : "text-ink/80"
                              }`}
                            >
                              {lang === "ar" ? item.label.ar : item.label.en}
                            </span>
                            {item.sub && (
                              <span className="block truncate mono text-[0.66rem] text-faint">
                                {lang === "ar" ? item.sub.ar : item.sub.en}
                              </span>
                            )}
                          </div>
                        </div>

                        {item.shortcut && (
                          <span className="shrink-0 mono text-[0.62rem] text-faint border border-line px-1.5 py-0.5">
                            {item.shortcut}
                          </span>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer status */}
              <div className="flex items-center justify-between border-t border-line bg-surface/50 px-4 py-2 mono text-[0.62rem] text-faint">
                <div className="flex items-center gap-3">
                  <span>↑↓ {lang === "ar" ? "تنقل" : "Navigate"}</span>
                  <span>↵ {lang === "ar" ? "اختيار" : "Select"}</span>
                </div>
                <span>BLACK-MAK® COMMAND</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

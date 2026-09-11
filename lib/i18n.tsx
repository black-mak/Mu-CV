"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import type { Lang } from "./data";

// UI chrome strings only — long-form content lives (bilingual) in data.ts.
const UI = {
  "nav.about": { en: "About", ar: "نبذة" },
  "nav.experience": { en: "Experience", ar: "الخبرة" },
  "nav.skills": { en: "Skills", ar: "المهارات" },
  "nav.credentials": { en: "Credentials", ar: "الشهادات" },
  "nav.contact": { en: "Contact", ar: "تواصل" },
  "nav.studio": { en: "Studio", ar: "الاستوديو" },
  "lang.toggle": { en: "العربية", ar: "EN" },
  "theme.toggle": { en: "Toggle theme", ar: "تبديل السمة" },

  "section.experience": { en: "Experience", ar: "الخبرة العملية" },
  "section.education": { en: "Education", ar: "التعليم" },
  "section.skills": { en: "Skills & Expertise", ar: "المهارات والخبرات" },
  "section.credentials": { en: "Credentials", ar: "الشهادات" },
  "section.languages": { en: "Languages", ar: "اللغات" },
  "section.interests": { en: "Interests", ar: "الاهتمامات" },
  "section.connect": { en: "Connect", ar: "تواصل" },

  "idx.about": { en: "01 / ABOUT", ar: "٠١ / نبذة" },
  "idx.skills": { en: "02 / SKILLS", ar: "٠٢ / المهارات" },
  "idx.experience": { en: "03 / EXPERIENCE", ar: "٠٣ / الخبرة" },
  "idx.credentials": { en: "04 / CREDENTIALS", ar: "٠٤ / الشهادات" },
  "idx.contact": { en: "05 / CONTACT", ar: "٠٥ / التواصل" },

  "cred.note": {
    en: "Formal training and continuous learning that support the practice. Click any card to view the certificate.",
    ar: "تدريب رسمي وتعلّم مستمر يدعمان الممارسة. اضغط أي بطاقة لعرض الشهادة.",
  },
  "cred.view": { en: "View certificate", ar: "عرض الشهادة" },
  "cred.close": { en: "Close", ar: "إغلاق" },

  "contact.title": { en: "Let's build your mark.", ar: "لِنَبْنِ علامتك." },
  "contact.note": { en: "Tap any value to copy it.", ar: "اضغط أي قيمة لنسخها." },
  "contact.copy": { en: "Copy", ar: "نسخ" },
  "contact.copied": { en: "Copied", ar: "تم النسخ" },
  "contact.email": { en: "Email", ar: "البريد" },
  "contact.phone": { en: "Phone · WhatsApp", ar: "الهاتف · واتساب" },
  "contact.whatsapp": { en: "WhatsApp", ar: "واتساب" },
  "contact.location": { en: "Location", ar: "الموقع" },
  "contact.open": { en: "Open ↗", ar: "فتح ↗" },
  "contact.instapay": { en: "Instapay · Egypt", ar: "إنستاباي · مصر" },
  "contact.behance": { en: "Behance · Portfolio", ar: "بيهانس · الأعمال" },

  "contact.studio": { en: "The Studio", ar: "الاستوديو" },
  "contact.vcard": { en: "Save contact (.vcf)", ar: "حفظ جهة الاتصال" },
  "contact.downloadPdf": { en: "Download PDF résumé", ar: "تنزيل السيرة PDF" },
  "contact.print": { en: "Print / Save as PDF", ar: "طباعة / حفظ PDF" },
  "contact.qrNote": { en: "Scan to open this CV on any device", ar: "امسح لفتح السيرة على أي جهاز" },
  "contact.actionsNote": {
    en: "Ready to start a project? Grab a copy of the résumé, save the contact, or head to the studio to see the full body of work.",
    ar: "جاهز لبدء مشروع؟ حمّل نسخة السيرة، احفظ جهة الاتصال، أو انتقل إلى الاستوديو لرؤية الأعمال كاملة.",
  },

  "footer.tagline": {
    en: "A premium logo & visual identity practice by Muhamed Alaa.",
    ar: "استوديو متميز للشعارات والهوية البصرية — محمد علاء.",
  },
  "footer.rights": { en: "© 2026 BLACK-MAK®", ar: "© ٢٠٢٦ BLACK-MAK®" },
  "footer.end": { en: "Designed with intent. Egypt · Working Worldwide.", ar: "مصمَّم بقصد. مصر · أعمل حول العالم." },

  "wa.msg": {
    en: "Hello BLACK-MAK, I saw your CV and I'd like to start a project. Here's a short brief: ",
    ar: "مرحبًا BLACK-MAK، شاهدت سيرتك وأودّ بدء مشروع. إليك ملخّصًا موجزًا: ",
  },
  "skills.note": {
    en: "A focused stack, deliberately narrow — the work goes deep on each of these.",
    ar: "مجموعة مركّزة وضيّقة عمدًا — العمل يتعمّق في كلٍّ منها.",
  },
} as const;

type Key = keyof typeof UI;

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: Key) => string;
  pick: (b: { en: string; ar: string }) => string;
}>({
  lang: "en",
  setLang: () => {},
  t: (k) => UI[k].en,
  pick: (b) => b.en,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    let initial: Lang = "en";
    try {
      const saved = localStorage.getItem("bm-lang") as Lang | null;
      if (saved === "ar" || saved === "en") initial = saved;
      else {
        const n = (navigator.language || "en").toLowerCase();
        initial = n.indexOf("ar") === 0 ? "ar" : "en";
        localStorage.setItem("bm-lang", initial);
      }
    } catch {}
    setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("bm-lang", l);
    } catch {}
  }, []);

  const t = useCallback((k: Key) => UI[k][lang] ?? UI[k].en, [lang]);
  const pick = useCallback((b: { en: string; ar: string }) => (lang === "ar" ? b.ar : b.en), [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t, pick }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);

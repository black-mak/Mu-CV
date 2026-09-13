// ============================================================================
// BLACK-MAKÂ® â€” Online CV  Â·  Single source of truth
// All copy is bilingual (EN/AR). Data sourced from the ATS rÃ©sumÃ©.
// ============================================================================

export type Lang = "en" | "ar";
export type Bi = { en: string; ar: string };

export const STUDIO_URL = "https://black-mak.vercel.app/";

export const profile = {
  name: { en: "MUHAMED ALAA", ar: "Ù…Ø­Ù…Ø¯ Ø¹Ù„Ø§Ø¡" },
  alias: "BLACK-MAKÂ®",
  established: "2014",
  role: {
    en: "Logo & Visual Identity Designer",
    ar: "Ù…ØµÙ…Ù… Ø´Ø¹Ø§Ø±Ø§Øª ÙˆÙ‡ÙˆÙŠØ© Ø¨ØµØ±ÙŠØ©",
  },
  titles: {
    en: ["Creative Director", "Brand Strategist", "Arabic & Latin Calligrapher"],
    ar: ["Ù…Ø¯ÙŠØ± Ø¥Ø¨Ø¯Ø§Ø¹ÙŠ", "Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠ Ø¹Ù„Ø§Ù…Ø§Øª ØªØ¬Ø§Ø±ÙŠØ©", "ÙƒØ§Ù„ÙŠØ¬Ø±Ø§ÙÙŠØ± Ø¹Ø±Ø¨ÙŠ ÙˆÙ„Ø§ØªÙŠÙ†ÙŠ"],
  },
  location: { en: "Egypt Â· Working Worldwide", ar: "Ù…ØµØ± Â· Ø£Ø¹Ù…Ù„ Ø­ÙˆÙ„ Ø§Ù„Ø¹Ø§Ù„Ù…" },
  experienceYears: { en: "12+ years of experience", ar: "Ø£ÙƒØ«Ø± Ù…Ù† Ù¡Ù¢ Ø¹Ø§Ù…Ù‹Ø§ Ù…Ù† Ø§Ù„Ø®Ø¨Ø±Ø©" },
  email: "makeenmuhamed31@gmail.com",
  phone: "+20 100 246 2821",
  phoneRaw: "+201002462821",
  whatsapp: "https://wa.me/201002462821",
  instapay: "+20 111 698 7764",
  cvPdf: "/cv/muhamed-alaa-cv.pdf",
  vcf: "/muhamed-alaa.vcf",
};

// Punchy hero copy â€” echoes the studio's brand voice ("Marks with meaning").
export const hero = {
  kicker: { en: "BLACK-MAKÂ® / CURRICULUM VITÃ† â€” 2026", ar: "BLACK-MAKÂ® / Ø§Ù„Ø³ÙŠØ±Ø© Ø§Ù„Ø°Ø§ØªÙŠØ© â€” Ù¢Ù Ù¢Ù¦" },
  lead: {
    en: "I turn what a business stands for into an identity people recognize, remember, and",
    ar: "Ø£ÙØ­ÙˆÙ‘Ù„ Ù…Ø§ ØªØ¹Ø¨Ù‘Ø± Ø¹Ù†Ù‡ Ø¹Ù„Ø§Ù…ØªÙƒ Ø¥Ù„Ù‰ Ù‡ÙˆÙŠØ©",
  },
  outline: { en: "trust.", ar: "ÙŠØ«Ù‚ Ø¨Ù‡Ø§ Ø§Ù„Ù†Ø§Ø³." },
  sub: {
    en: "Specialized in building logos, visual identity systems, typography, and freestyle calligraphy.",
    ar: "Ù…ØªØ®ØµØµ ÙÙŠ Ø¨Ù†Ø§Ø¡ Ø§Ù„Ø´Ø¹Ø§Ø±Ø§Øª ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„Ø¨ØµØ±ÙŠØ© ÙˆØ§Ù„ØªØ§ÙŠØ¨ÙˆØºØ±Ø§ÙÙŠ ÙˆØ§Ù„ÙƒØ§Ù„ÙŠØ¬Ø±Ø§ÙÙŠ Ø§Ù„Ø­Ø±.",
  },
};

export const stats: { value: string; label: Bi }[] = [
  { value: "12+", label: { en: "Years of Practice", ar: "Ø³Ù†ÙˆØ§Øª Ù…Ù† Ø§Ù„Ù…Ù…Ø§Ø±Ø³Ø©" } },
  { value: "50+", label: { en: "Logos & Identities Delivered", ar: "Ø´Ø¹Ø§Ø± ÙˆÙ‡ÙˆÙŠØ© ØªÙ… ØªØ³Ù„ÙŠÙ…Ù‡Ø§" } },
  { value: "ARÂ·EN", label: { en: "Bilingual by Design", ar: "Ø«Ù†Ø§Ø¦ÙŠ Ø§Ù„Ù„ØºØ© Ø¨Ø§Ù„ØªØµÙ…ÙŠÙ…" } },
];

export const about = {
  title: { en: "The practice.", ar: "Ø§Ù„Ù…Ù…Ø§Ø±Ø³Ø©." },
  note: {
    en: "A designer with a street-level understanding of how identity behaves in the real world.",
    ar: "Ù…ØµÙ…Ù… Ø¨ÙÙ‡Ù…Ù Ù…ÙŠØ¯Ø§Ù†ÙŠ Ù„ÙƒÙŠÙÙŠØ© ØªØµØ±Ù‘Ù Ø§Ù„Ù‡ÙˆÙŠØ© ÙÙŠ Ø§Ù„Ø¹Ø§Ù„Ù… Ø§Ù„Ø­Ù‚ÙŠÙ‚ÙŠ.",
  },
  p1: {
    en: "I'm <strong>Muhamed Alaa</strong> â€” a Logo &amp; Visual Identity Designer, Creative Director and Brand Strategist running BLACK-MAKÂ® from Egypt, working worldwide. For over a decade I've helped businesses translate who they are into marks that work at any size, in any language, on any surface.",
    ar: "Ø£Ù†Ø§ <strong>Ù…Ø­Ù…Ø¯ Ø¹Ù„Ø§Ø¡</strong> â€” Ù…ØµÙ…Ù… Ø´Ø¹Ø§Ø±Ø§Øª ÙˆÙ‡ÙˆÙŠØ© Ø¨ØµØ±ÙŠØ©ØŒ ÙˆÙ…Ø¯ÙŠØ± Ø¥Ø¨Ø¯Ø§Ø¹ÙŠØŒ ÙˆØ§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠ Ø¹Ù„Ø§Ù…Ø§Øª ØªØ¬Ø§Ø±ÙŠØ©ØŒ Ø£ÙØ¯ÙŠØ± BLACK-MAKÂ® Ù…Ù† Ù…ØµØ± ÙˆØ£Ø¹Ù…Ù„ Ø­ÙˆÙ„ Ø§Ù„Ø¹Ø§Ù„Ù…. Ù„Ø£ÙƒØ«Ø± Ù…Ù† Ø¹Ù‚Ø¯ØŒ Ø³Ø§Ø¹Ø¯Øª Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ Ø¹Ù„Ù‰ ØªØ±Ø¬Ù…Ø© Ù‡ÙˆÙŠØªÙ‡Ø§ Ø¥Ù„Ù‰ Ø¹Ù„Ø§Ù…Ø§ØªÙ ØªØ¹Ù…Ù„ Ø¨Ø£ÙŠ Ø­Ø¬Ù…ØŒ ÙˆØ¨Ø£ÙŠ Ù„ØºØ©ØŒ ÙˆØ¹Ù„Ù‰ Ø£ÙŠ Ø³Ø·Ø­.",
  },
  p2: {
    en: "The work spans freestyle calligraphy, full identity systems, applied print and outdoor advertising. Strategy, art direction, calligraphy, and final design decisions are always human-led. Every project starts with one question: what should this mark make people feel?",
    ar: "ÙŠÙ…ØªØ¯ Ø§Ù„Ø¹Ù…Ù„ Ù…Ù† Ø§Ù„ÙƒØ§Ù„ÙŠØ¬Ø±Ø§ÙÙŠ Ø§Ù„Ø­Ø± Ø¥Ù„Ù‰ Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„ÙƒØ§Ù…Ù„Ø© ÙˆØ§Ù„Ù…Ø·Ø¨ÙˆØ¹Ø§Øª ÙˆØ§Ù„Ù„ÙˆØ­Ø§Øª Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠØ©. Ø§Ù„Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© ÙˆØ§Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„ÙÙ†ÙŠØ© ÙˆØ§Ù„ÙƒØ§Ù„ÙŠØ¬Ø±Ø§ÙÙŠ ÙˆÙ‚Ø±Ø§Ø±Ø§Øª Ø§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØ© Ø¨Ù‚ÙŠØ§Ø¯Ø© Ø¨Ø´Ø±ÙŠØ© Ø¯Ø§Ø¦Ù…Ù‹Ø§. ÙƒÙ„ Ù…Ø´Ø±ÙˆØ¹ ÙŠØ¨Ø¯Ø£ Ø¨Ø³Ø¤Ø§Ù„Ù ÙˆØ§Ø­Ø¯: Ø¨Ù…Ø§Ø°Ø§ ÙŠØ¬Ø¨ Ø£Ù† ØªÙØ´Ø¹Ø± Ù‡Ø°Ù‡ Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ø§Ù„Ù†Ø§Ø³ØŸ",
  },
  facts: {
    based: { en: "Based in", ar: "Ø§Ù„Ù…Ù‚Ø±" },
    since: { en: "Practice since", ar: "Ø§Ù„Ù…Ù…Ø§Ø±Ø³Ø© Ù…Ù†Ø°" },
    langs: { en: "Languages", ar: "Ø§Ù„Ù„ØºØ§Øª" },
    status: { en: "Status", ar: "Ø§Ù„Ø­Ø§Ù„Ø©" },
    langsValue: { en: "Arabic Â· English", ar: "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Â· Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©" },
    available: { en: "â— Accepting Selected Projects", ar: "â— Ø£Ø³ØªÙ‚Ø¨Ù„ Ù…Ø´Ø§Ø±ÙŠØ¹ Ù…Ø®ØªØ§Ø±Ø©" },
  },
};

export type Job = {
  from: string;
  to: Bi;
  role: Bi;
  org: Bi;
  place: Bi;
  bullets: Bi[];
  tag: Bi;
};

export const experience: Job[] = [
  {
    from: "2014",
    to: { en: "Present", ar: "Ø§Ù„Ø¢Ù†" },
    role: { en: "Logo & Visual Identity Designer", ar: "Ù…ØµÙ…Ù… Ø´Ø¹Ø§Ø±Ø§Øª ÙˆÙ‡ÙˆÙŠØ© Ø¨ØµØ±ÙŠØ©" },
    org: { en: "BLACK-MAKÂ® Â· Independent Design Practice", ar: "BLACK-MAKÂ® Â· Ù…Ù…Ø§Ø±Ø³Ø© ØªØµÙ…ÙŠÙ… Ù…Ø³ØªÙ‚Ù„Ø©" },
    place: { en: "Egypt Â· Working Worldwide", ar: "Ù…ØµØ± Â· Ø£Ø¹Ù…Ù„ Ø­ÙˆÙ„ Ø§Ù„Ø¹Ø§Ù„Ù…" },
    tag: { en: "Lead Â· Studio", ar: "Ù‚Ø§Ø¦Ø¯ Â· Ø§Ø³ØªÙˆØ¯ÙŠÙˆ" },
    bullets: [
      {
        en: "Design brand identities and visual systems for clients across industries, backed by 12+ years of craft.",
        ar: "Ø£ÙØµÙ…Ù… Ù‡ÙˆÙŠØ§Øª Ø¨ØµØ±ÙŠØ© ÙˆØ£Ù†Ø¸Ù…Ø© Ù…ØªÙƒØ§Ù…Ù„Ø© Ù„Ø¹Ù…Ù„Ø§Ø¡ ÙÙŠ Ù‚Ø·Ø§Ø¹Ø§Øª Ù…ØªÙ†ÙˆØ¹Ø©ØŒ Ø¨Ø®Ø¨Ø±Ø© ØªØªØ¬Ø§ÙˆØ² Ù¡Ù¢ Ø¹Ø§Ù…Ù‹Ø§.",
      },
      {
        en: "Practice established in 2014 and built on long-term client relationships, repeat work, and referrals.",
        ar: "Ù…Ù…Ø§Ø±Ø³Ø© ØªØ£Ø³Ø³Øª Ø¹Ø§Ù… Ù¢Ù Ù¡Ù¤ØŒ Ù…Ø¨Ù†ÙŠØ© Ø¹Ù„Ù‰ Ø¹Ù„Ø§Ù‚Ø§Øª Ø¹Ù…Ù„Ø§Ø¡ Ø·ÙˆÙŠÙ„Ø© Ø§Ù„Ø£Ù…Ø¯ ÙˆØ¹Ù…Ù„ Ù…ØªÙƒØ±Ø± ÙˆØ¥Ø­Ø§Ù„Ø§Øª.",
      },
      {
        en: "Delivered 50+ logos and identity systems â€” see selected work in the studio.",
        ar: "Ø³Ù„Ù‘Ù…Øª Ø£ÙƒØ«Ø± Ù…Ù† Ù¥Ù  Ø´Ø¹Ø§Ø±Ù‹Ø§ ÙˆÙ†Ø¸Ø§Ù… Ù‡ÙˆÙŠØ© â€” Ø§Ù†Ø¸Ø± Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ Ø§Ù„Ù…Ø®ØªØ§Ø±Ø© ÙÙŠ Ø§Ù„Ø§Ø³ØªÙˆØ¯ÙŠÙˆ.",
      },
      {
        en: "Manage full project lifecycles â€” from consultation and concept to delivery and brand-guideline documentation.",
        ar: "Ø£ÙØ¯ÙŠØ± Ø¯ÙˆØ±Ø© Ø­ÙŠØ§Ø© Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ ÙƒØ§Ù…Ù„Ø© â€” Ù…Ù† Ø§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø© ÙˆØ§Ù„ÙÙƒØ±Ø© Ø­ØªÙ‰ Ø§Ù„ØªØ³Ù„ÙŠÙ… ÙˆØªÙˆØ«ÙŠÙ‚ Ø¯Ù„ÙŠÙ„ Ø§Ù„Ù‡ÙˆÙŠØ©.",
      },
    ],
  },
  {
    from: "2021",
    to: { en: "Present", ar: "Ø§Ù„Ø¢Ù†" },
    role: { en: "Team Leader â€” Operations & Logistics", ar: "Ù‚Ø§Ø¦Ø¯ ÙØ±ÙŠÙ‚ â€” Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª ÙˆØ§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ§Øª" },
    org: { en: "Grain Milling Factory (Family Business)", ar: "Ù…Ø·Ø­Ù† ØºÙ„Ø§Ù„ (Ø¹Ù…Ù„ Ø¹Ø§Ø¦Ù„ÙŠ)" },
    place: { en: "New Valley, Egypt", ar: "Ø§Ù„ÙˆØ§Ø¯ÙŠ Ø§Ù„Ø¬Ø¯ÙŠØ¯ØŒ Ù…ØµØ±" },
    tag: { en: "Leadership", ar: "Ù‚ÙŠØ§Ø¯Ø©" },
    bullets: [
      {
        en: "Lead a team of 15+ in daily production, ensuring efficiency, quality control and safety.",
        ar: "Ø£Ù‚ÙˆØ¯ ÙØ±ÙŠÙ‚Ù‹Ø§ Ù…Ù† Ø£ÙƒØ«Ø± Ù…Ù† Ù¡Ù¥ ÙØ±Ø¯Ù‹Ø§ ÙÙŠ Ø§Ù„Ø¥Ù†ØªØ§Ø¬ Ø§Ù„ÙŠÙˆÙ…ÙŠØŒ Ø¨Ù…Ø§ ÙŠØ¶Ù…Ù† Ø§Ù„ÙƒÙØ§Ø¡Ø© ÙˆØ¶Ø¨Ø· Ø§Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø©.",
      },
      {
        en: "Oversee end-to-end logistics: raw-material procurement, inventory and distribution.",
        ar: "Ø£ÙØ´Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ§Øª ÙƒØ§Ù…Ù„Ø©: Ø´Ø±Ø§Ø¡ Ø§Ù„Ù…ÙˆØ§Ø¯ Ø§Ù„Ø®Ø§Ù…ØŒ ÙˆØ§Ù„Ù…Ø®Ø²ÙˆÙ†ØŒ ÙˆØ§Ù„ØªÙˆØ²ÙŠØ¹.",
      },
      {
        en: "Apply strong operational management and problem-solving in a high-volume environment.",
        ar: "Ø£ÙØ·Ø¨Ù‘Ù‚ Ø¥Ø¯Ø§Ø±Ø© ØªØ´ØºÙŠÙ„ÙŠØ© Ù‚ÙˆÙŠØ© ÙˆØ­Ù„Ù‹Ù‘Ø§ Ù„Ù„Ù…Ø´ÙƒÙ„Ø§Øª ÙÙŠ Ø¨ÙŠØ¦Ø© Ø¥Ù†ØªØ§Ø¬ ÙƒØ«ÙŠÙØ©.",
      },
    ],
  },
  {
    from: "2016",
    to: { en: "2020", ar: "Ù¢Ù Ù¢Ù " },
    role: { en: "Marketing & Advertising Specialist", ar: "Ø£Ø®ØµØ§Ø¦ÙŠ ØªØ³ÙˆÙŠÙ‚ ÙˆØ¥Ø¹Ù„Ø§Ù†Ø§Øª" },
    org: { en: "Major Egyptian Retail Brands", ar: "Ø¹Ù„Ø§Ù…Ø§Øª ØªØ¬Ø²Ø¦Ø© Ù…ØµØ±ÙŠØ© ÙƒØ¨Ø±Ù‰" },
    place: { en: "Egypt", ar: "Ù…ØµØ±" },
    tag: { en: "Foundations", ar: "Ø§Ù„Ø£Ø³Ø§Ø³" },
    bullets: [
      {
        en: "Designed and ran high-impact outdoor campaigns for major retail shops, driving visibility and foot traffic.",
        ar: "ØµÙ…Ù‘Ù…Øª ÙˆÙ†ÙÙ‘Ø°Øª Ø­Ù…Ù„Ø§Øª Ø®Ø§Ø±Ø¬ÙŠØ© Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø£Ø«Ø± Ù„Ù…ØªØ§Ø¬Ø± ØªØ¬Ø²Ø¦Ø© ÙƒØ¨Ø±Ù‰ØŒ Ù…Ù…Ø§ Ø±ÙØ¹ Ø§Ù„Ø¸Ù‡ÙˆØ± ÙˆØ­Ø±ÙƒØ© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡.",
      },
      {
        en: "Managed client relationships from concept to execution, aligned with brand objectives and deadlines.",
        ar: "Ø£Ø¯Ø±Øª Ø¹Ù„Ø§Ù‚Ø§Øª Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ Ù…Ù† Ø§Ù„ÙÙƒØ±Ø© Ø­ØªÙ‰ Ø§Ù„ØªÙ†ÙÙŠØ°ØŒ Ø¨Ù…Ø§ ÙŠØªÙˆØ§ÙÙ‚ Ù…Ø¹ Ø£Ù‡Ø¯Ø§Ù Ø§Ù„Ø¹Ù„Ø§Ù…Ø© ÙˆØ§Ù„Ù…ÙˆØ§Ø¹ÙŠØ¯.",
      },
      {
        en: "Pivoted campaigns to digital-first approaches during COVID-19, keeping engagement strong.",
        ar: "Ø­ÙˆÙ‘Ù„Øª Ø§Ù„Ø­Ù…Ù„Ø§Øª Ø¥Ù„Ù‰ Ù†Ù‡Ø¬ Ø±Ù‚Ù…ÙŠ Ø£ÙˆÙ„Ù‹Ø§ Ø®Ù„Ø§Ù„ Ø¬Ø§Ø¦Ø­Ø© ÙƒÙˆÙÙŠØ¯-Ù¡Ù©ØŒ Ù…Ø¹ Ø§Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ ØªÙØ§Ø¹Ù„Ù Ù‚ÙˆÙŠ.",
      },
    ],
  },
];

export type Edu = { from: string; to: string; degree: Bi; org: Bi; note: Bi };

export const education: Edu[] = [
  {
    from: "2015",
    to: "2017",
    degree: { en: "Diploma in Surveying Engineering", ar: "Ø¯Ø¨Ù„ÙˆÙ… Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…Ø³Ø§Ø­Ø©" },
    org: { en: "Higher Institute of Surveying", ar: "Ø§Ù„Ù…Ø¹Ù‡Ø¯ Ø§Ù„Ø¹Ø§Ù„ÙŠ Ù„Ù„Ù…Ø³Ø§Ø­Ø©" },
    note: {
      en: "Technical training in precision measurement and spatial systems.",
      ar: "ØªØ¯Ø±ÙŠØ¨ ØªÙ‚Ù†ÙŠ ÙÙŠ Ø§Ù„Ù‚ÙŠØ§Ø³ Ø§Ù„Ø¯Ù‚ÙŠÙ‚ ÙˆØ§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ù…ÙƒØ§Ù†ÙŠØ©.",
    },
  },
  {
    from: "2011",
    to: "2014",
    degree: { en: "Engineering Studies â€” 4 years completed", ar: "Ø¯Ø±Ø§Ø³Ø§Øª Ù‡Ù†Ø¯Ø³ÙŠØ© â€” Ù¤ Ø³Ù†ÙˆØ§Øª Ù…ÙƒØªÙ…Ù„Ø©" },
    org: { en: "Higher Institute of Engineering (SHA)", ar: "Ø§Ù„Ù…Ø¹Ù‡Ø¯ Ø§Ù„Ø¹Ø§Ù„ÙŠ Ù„Ù„Ù‡Ù†Ø¯Ø³Ø© (SHA)" },
    note: {
      en: "A technical foundation in precision and structural thinking â€” later applied to identity systems.",
      ar: "Ø£Ø³Ø§Ø³ ØªÙ‚Ù†ÙŠ ÙÙŠ Ø§Ù„Ø¯Ù‚Ø© ÙˆØ§Ù„ØªÙÙƒÙŠØ± Ø§Ù„Ù‡ÙŠÙƒÙ„ÙŠ â€” ÙˆÙØ¸ÙÙ‘Ù Ù„Ø§Ø­Ù‚Ù‹Ø§ ÙÙŠ Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ù‡ÙˆÙŠØ©.",
    },
  },
];

export type SkillGroup = { cat: Bi; items: { name: Bi }[] };

export const skills: SkillGroup[] = [
  {
    cat: { en: "Core Expertise", ar: "Ø§Ù„Ø®Ø¨Ø±Ø© Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ©" },
    items: [
      { name: { en: "Logo Design", ar: "ØªØµÙ…ÙŠÙ… Ø§Ù„Ø´Ø¹Ø§Ø±" } },
      { name: { en: "Visual Identity Systems", ar: "Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„Ø¨ØµØ±ÙŠØ©" } },
      { name: { en: "Calligraphy & Wordmarks", ar: "Ø§Ù„ÙƒØ§Ù„ÙŠØ¬Ø±Ø§ÙÙŠ ÙˆØ§Ù„ÙƒÙ„Ù…Ø§Øª Ø§Ù„Ø´Ø¹Ø§Ø±ÙŠØ©" } },
      { name: { en: "Brand Art Direction", ar: "Ø§Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„ÙÙ†ÙŠØ© Ù„Ù„Ø¹Ù„Ø§Ù…Ø©" } },
      { name: { en: "Signage & Real-world Applications", ar: "Ø§Ù„Ù„ÙˆØ­Ø§Øª ÙˆØ§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„ÙˆØ§Ù‚Ø¹ÙŠØ©" } },
      { name: { en: "Digital Brand Experiences", ar: "Ø§Ù„ØªØ¬Ø§Ø±Ø¨ Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ù„Ù„Ø¹Ù„Ø§Ù…Ø©" } },
    ],
  },
  {
    cat: { en: "Workflow", ar: "Ø£Ø³Ù„ÙˆØ¨ Ø§Ù„Ø¹Ù…Ù„" },
    items: [
      { name: { en: "Research & Discovery", ar: "Ø§Ù„Ø¨Ø­Ø« ÙˆØ§Ù„Ø§ÙƒØªØ´Ø§Ù" } },
      { name: { en: "Concept & Sketching", ar: "Ø§Ù„ÙÙƒØ±Ø© ÙˆØ§Ù„Ø±Ø³Ù… Ø§Ù„Ø£ÙˆÙ„ÙŠ" } },
      { name: { en: "File & Guideline Delivery", ar: "ØªØ³Ù„ÙŠÙ… Ø§Ù„Ù…Ù„ÙØ§Øª ÙˆØ§Ù„Ø¯Ù„ÙŠÙ„" } },
      { name: { en: "AI-Augmented Creative Workflow", ar: "Ø³ÙŠØ± Ø¹Ù…Ù„ Ø¥Ø¨Ø¯Ø§Ø¹ÙŠ Ù…Ø¹Ø²ÙŽÙ‘Ø² Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ" } },
    ],
  },
  {
    cat: { en: "Leadership", ar: "Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©" },
    items: [
      { name: { en: "Team Leadership & Operations", ar: "Ù‚ÙŠØ§Ø¯Ø© Ø§Ù„ÙØ±Ù‚ ÙˆØ§Ù„Ø¹Ù…Ù„ÙŠØ§Øª" } },
      { name: { en: "Client Relationship (AR/EN)", ar: "Ø¹Ù„Ø§Ù‚Ø§Øª Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ (Ø¹Ø±Ø¨ÙŠ/Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠ)" } },
    ],
  },
];

// The single quiet AI signal â€” lives here (Workflow) only, nowhere else.
export const aiStack = [
  "AI-Augmented Creative Workflow",
];

export type Cert = {
  year: string;
  years: string;
  title: Bi;
  org: Bi;
  note: Bi;
  thumb: string;
  full: string;
};

export const certificates: Cert[] = [
  {
    year: "2018",
    years: "2018 â€” 2019",
    title: { en: "Graphic Design Diploma", ar: "Ø¯Ø¨Ù„ÙˆÙ…Ø© Ø§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ø¬Ø±Ø§ÙÙŠÙƒÙŠ" },
    org: { en: "Russian Cultural Center", ar: "Ø§Ù„Ù…Ø±ÙƒØ² Ø§Ù„Ø«Ù‚Ø§ÙÙŠ Ø§Ù„Ø±ÙˆØ³ÙŠ" },
    note: { en: "Completed with grade of Excellent", ar: "Ø£ÙÙ†Ø¬Ø²Øª Ø¨ØªÙ‚Ø¯ÙŠØ± Ù…Ù…ØªØ§Ø²" },
    thumb: "/certs/graphic-thumb.webp",
    full: "/certs/graphic.webp",
  },
  {
    year: "2022",
    years: "2021 â€” 2022",
    title: { en: "General English Course â€” 132 Hours", ar: "Ø¯ÙˆØ±Ø© Ø§Ù„Ù„ØºØ© Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ© Ø§Ù„Ø¹Ø§Ù…Ø© â€” Ù¡Ù£Ù¢ Ø³Ø§Ø¹Ø©" },
    org: { en: "The British Cultural Center", ar: "Ø§Ù„Ù…Ø±ÙƒØ² Ø§Ù„Ø«Ù‚Ø§ÙÙŠ Ø§Ù„Ø¨Ø±ÙŠØ·Ø§Ù†ÙŠ" },
    note: { en: "132 hours of certified instruction", ar: "Ù¡Ù£Ù¢ Ø³Ø§Ø¹Ø© ØªØ¯Ø±ÙŠØ¨ Ù…Ø¹ØªÙ…Ø¯Ø©" },
    thumb: "/certs/english-thumb.webp",
    full: "/certs/english.webp",
  },
  {
    year: "2022",
    years: "2021 â€” 2022",
    title: { en: "Fundamentals of Digital Transformation (FDTC)", ar: "Ø£Ø³Ø§Ø³ÙŠØ§Øª Ø§Ù„ØªØ­ÙˆÙ„ Ø§Ù„Ø±Ù‚Ù…ÙŠ (FDTC)" },
    org: { en: "BCCIT Academy", ar: "Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© BCCIT" },
    note: { en: "Certified training in digital transformation", ar: "ØªØ¯Ø±ÙŠØ¨ Ù…Ø¹ØªÙ…Ø¯ ÙÙŠ Ø§Ù„ØªØ­ÙˆÙ„ Ø§Ù„Ø±Ù‚Ù…ÙŠ" },
    thumb: "/certs/fdtc-thumb.webp",
    full: "/certs/fdtc.webp",
  },
];

export const languages = [
  {
    name: { en: "Arabic", ar: "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©" },
    level: { en: "Native", ar: "Ø§Ù„Ù„ØºØ© Ø§Ù„Ø£Ù…" },
    percent: 100,
    note: {
      en: "Native speaker. Deep command of Arabic calligraphy and letterform design across regional dialects.",
      ar: "Ù„ØºØ© Ø£Ù…. Ø¥ØªÙ‚Ø§Ù† Ø¹Ù…ÙŠÙ‚ Ù„Ù„ÙƒØ§Ù„ÙŠØ¬Ø±Ø§ÙÙŠ Ø§Ù„Ø¹Ø±Ø¨ÙŠ ÙˆØªØµÙ…ÙŠÙ… Ø§Ù„Ø­Ø±ÙˆÙ Ø¹Ø¨Ø± Ø§Ù„Ù„Ù‡Ø¬Ø§Øª Ø§Ù„Ù…Ø®ØªÙ„ÙØ©.",
    },
  },
  {
    name: { en: "English", ar: "Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©" },
    level: { en: "Professional Working Proficiency", ar: "ÙƒÙØ§Ø¡Ø© Ù…Ù‡Ù†ÙŠØ© Ù„Ù„Ø¹Ù…Ù„" },
    percent: 82,
    note: {
      en: "Fluent for international client communication and bilingual identity systems. British Cultural Center certified.",
      ar: "Ø·Ù„Ø§Ù‚Ø© ÙÙŠ Ø§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„Ø¯ÙˆÙ„ÙŠ Ù…Ø¹ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ù‡ÙˆÙŠØ© Ø«Ù†Ø§Ø¦ÙŠØ© Ø§Ù„Ù„ØºØ©. Ù…Ø¹ØªÙ…Ø¯ Ù…Ù† Ø§Ù„Ù…Ø±ÙƒØ² Ø§Ù„Ø«Ù‚Ø§ÙÙŠ Ø§Ù„Ø¨Ø±ÙŠØ·Ø§Ù†ÙŠ.",
    },
  },
];

export const interests: Bi[] = [
  { en: "Calligraphy", ar: "Ø§Ù„ÙƒØ§Ù„ÙŠØ¬Ø±Ø§ÙÙŠ" },
  { en: "Photography", ar: "Ø§Ù„ØªØµÙˆÙŠØ±" },
  { en: "Creative Writing", ar: "Ø§Ù„ÙƒØªØ§Ø¨Ø© Ø§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ÙŠØ©" },
];

export type Social = { label: string; href: string; handle: string };

export const socials: Social[] = [
  { label: "Behance", href: "https://www.behance.net/Muhmed-alaa-el-bank", handle: "Muhmed-alaa-el-bank" },
  { label: "Instagram", href: "https://www.instagram.com/muhamedalaaelbank/", handle: "muhamedalaaelbank" },
  { label: "Studio", href: "https://black-mak.vercel.app/", handle: "black-mak.vercel.app" },
];

// The finale â€” the bridge from "this is who I am" to "this is my work".
export const seal = {
  eyebrow: { en: "THE MARK SPEAKS", ar: "Ø§Ù„Ø¹Ù„Ø§Ù…Ø© ØªØªÙƒÙ„Ù‘Ù…" },
  line: {
    en: "You've read the person. Now meet the work.",
    ar: "Ù‚Ø±Ø£ØªÙŽ Ø§Ù„Ø´Ø®Øµ. Ø§Ù„Ø¢Ù† Ù‚Ø§Ø¨ÙÙ„ Ø§Ù„Ø¹Ù…Ù„.",
  },
  sub: {
    en: "Selected work, process, services, and project information.",
    ar: "Ø£Ø¹Ù…Ø§Ù„ Ù…Ø®ØªØ§Ø±Ø©ØŒ ÙˆØ§Ù„Ø¹Ù…Ù„ÙŠØ©ØŒ ÙˆØ§Ù„Ø®Ø¯Ù…Ø§ØªØŒ ÙˆÙ…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹.",
  },
  center: { en: "EXPLORE BLACK-MAK STUDIO", ar: "Ø§Ø³ØªÙƒØ´Ù Ø§Ø³ØªÙˆØ¯ÙŠÙˆ BLACK-MAK" },
  ring: "LOGO & VISUAL IDENTITY Â· MUHAMED ALAA Â· BLACK-MAKÂ® Â· EST. 2014 Â· ",
  domain: "black-mak.vercel.app",
};

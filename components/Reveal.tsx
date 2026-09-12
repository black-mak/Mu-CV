"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// ============================================================================
// Reveal — one component, three motion tiers (motion hierarchy):
//   tier="ambient"  → 1.4s, deep travel — hero/finale moments (slow, cinematic)
//   tier="content"  → 0.8s, 20px — the default for section content
//   tier="feedback" → 0.25s, 8px — micro-responders (labels, chips, rows)
// All respect prefers-reduced-motion (render untouched).
// ============================================================================
const TIERS = {
  ambient: { duration: 1.4, y: 34 },
  content: { duration: 0.8, y: 20 },
  feedback: { duration: 0.25, y: 8 },
} as const;

export default function Reveal({
  children,
  delay = 0,
  y,
  className,
  tier = "content",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  tier?: keyof typeof TIERS;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const t = TIERS[tier];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: y ?? t.y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: t.duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

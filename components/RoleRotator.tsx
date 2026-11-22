"use client";

import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/data";

// Keep the primary role complete at every viewport and at every moment.
// The former typewriter exposed partial job titles to assistive technology
// and weakened the first-screen positioning while it was deleting text.
export default function RoleRotator() {
  const { pick } = useI18n();

  return (
    <p className="mono flex min-h-[1.4em] items-start gap-2 text-[0.82rem] uppercase tracking-[0.14em] text-ink">
      <span className="mt-[0.55em] inline-block h-[6px] w-[6px] shrink-0 bg-seal" aria-hidden="true" />
      <span>{pick(profile.role)}</span>
    </p>
  );
}

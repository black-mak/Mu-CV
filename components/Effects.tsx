"use client";

import { useEffect } from "react";

// Scroll-progress bar (GPU scaleX).
// Clean, transform-only so it stays at 60fps and never triggers reflow.
export default function Effects() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (bar) bar.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div id="scroll-progress" className="scroll-progress no-print" aria-hidden="true" />;
}

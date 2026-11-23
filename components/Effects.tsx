"use client";

import { useEffect, useRef, useState } from "react";

// Scroll-progress bar (GPU scaleX) + Fine-pointer architectural cursor follower
export default function Effects() {
  const [isPointerFine, setIsPointerFine] = useState(false);
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);

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

    // Fine pointer check
    const fineMatch = window.matchMedia("(pointer: fine)");
    setIsPointerFine(fineMatch.matches);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest?.("button, a, input, select, textarea, [role='button'], [tabindex='0']");
      isHovering = Boolean(interactive);
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (cursorRing.current) {
        const scale = isHovering ? 1.5 : 1;
        cursorRing.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
        cursorRing.current.style.borderColor = isHovering ? "#c9a227" : "rgba(255, 255, 255, 0.3)";
      }
      rafId = requestAnimationFrame(render);
    };

    if (fineMatch.matches) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      rafId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (fineMatch.matches) {
        window.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <>
      <div id="scroll-progress" className="scroll-progress no-print" aria-hidden="true" />
      {isPointerFine && (
        <>
          <div
            ref={cursorDot}
            className="no-print pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-seal shadow-[0_0_8px_rgba(201,162,39,0.8)]"
            aria-hidden="true"
          />
          <div
            ref={cursorRing}
            className="no-print pointer-events-none fixed top-0 left-0 z-[9998] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 transition-[border-color,transform] duration-150 ease-out"
            aria-hidden="true"
          />
        </>
      )}
    </>
  );
}

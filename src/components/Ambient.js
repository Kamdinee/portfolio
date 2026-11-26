import React, { useEffect, useRef } from "react";

/* Barre de progression de lecture + halo lumineux qui suit la souris (desktop uniquement). */
export default function Ambient() {
  const progressRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let frame = null;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? window.scrollY / max : 0;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${ratio})`;
        }
      });
    };

    const onMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.setProperty("--x", `${e.clientX}px`);
        glowRef.current.style.setProperty("--y", `${e.clientY}px`);
        glowRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
    </>
  );
}

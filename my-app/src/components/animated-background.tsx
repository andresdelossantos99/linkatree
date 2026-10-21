"use client";

import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      if (media.matches || event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      });
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-1/3 w-56 h-56 bg-indigo-500/10 rounded-full blur-xl" />
      <div className="fixed w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl transition-all duration-300 ease-out motion-reduce:hidden" style={{ left: position.x - 192, top: position.y - 192 }} />
      <div className="fixed w-64 h-64 bg-gradient-to-r from-pink-500/8 to-yellow-500/8 rounded-full blur-2xl transition-all duration-500 ease-out motion-reduce:hidden" style={{ left: position.x - 128, top: position.y - 128 }} />
    </div>
  );
}

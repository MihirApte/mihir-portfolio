"use client";
import type { ReactNode, MouseEvent, CSSProperties } from "react";

export function SpotCard({ children, className = "", color }: { children: ReactNode; className?: string; color?: string }) {
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  const style = color ? ({ "--spot": `${color}33` } as CSSProperties) : undefined;
  return (
    <div onMouseMove={onMove} style={style} className={`card spot ${className}`}>
      {children}
    </div>
  );
}

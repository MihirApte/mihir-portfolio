"use client";
import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { profile, stats, gallery, type StatTarget } from "@/data/profile";
import { Reveal, SectionTitle } from "./Reveal";
import { SpotCard } from "./SpotCard";

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const num = parseFloat(value);
  const [shown, setShown] = useState(value);
  useEffect(() => {
    if (!inView || Number.isNaN(num)) return;
    const decimals = value.includes(".") ? value.split(".")[1].length : 0;
    const c = animate(0, num, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setShown(v.toFixed(decimals)) });
    return () => c.stop();
  }, [inView, num, value]);
  return <span ref={ref}>{shown}</span>;
}

function goTo(target: StatTarget) {
  if (target === "projects") {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    return;
  }
  window.dispatchEvent(new CustomEvent("timeline-filter", { detail: target === "work" ? "work" : "education" }));
  document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-28">
      <SectionTitle eyebrow="1. About" title="A bit about me" sub="A short introduction, with a few numbers. Select a card to jump to the details." />
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <SpotCard className="h-full p-8">
            <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
            {gallery.length >= 3 && (
              <div className="mt-8 flex items-end gap-3">
                {[gallery[3], gallery[1], gallery[4]].map((g, i) => (
                  <motion.div
                    key={g.src}
                    whileHover={{ rotate: 0, y: -8, scale: 1.05 }}
                    initial={{ rotate: [-5, 3, -2][i] }}
                    className="w-1/3 max-w-40 rounded-xl bg-white p-1.5 pb-5 shadow-xl shadow-black/30"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[3/4] w-full rounded-md object-cover object-top" />
                  </motion.div>
                ))}
              </div>
            )}
          </SpotCard>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <button onClick={() => goTo(s.target)} className="group block h-full w-full text-left">
                <SpotCard className="h-full p-5 transition duration-300 group-hover:-translate-y-1.5">
                  <div className="gradient-text font-display text-4xl font-bold"><Counter value={s.value} /></div>
                  <p className="mt-2 text-sm text-muted">{s.label}</p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-brand opacity-70 transition group-hover:opacity-100">View →</p>
                </SpotCard>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

    </section>
  );
}

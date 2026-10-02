"use client";
import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { profile, stats, personal, gallery } from "@/data/profile";
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

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-28">
      <SectionTitle eyebrow="01 / about" title="A bit about me" sub="The short version of who I am, on and off the keyboard." />
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <SpotCard className="h-full p-8">
            <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
            <p className="mt-5 text-sm text-muted">
              <span className="font-mono text-brand">work status →</span> {profile.workAuth}
            </p>
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
              <SpotCard className="h-full p-5">
                <div className="gradient-text font-display text-4xl font-bold"><Counter value={s.value} /></div>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-16">
        <h3 className="font-display text-2xl font-bold">Beyond the résumé</h3>
        <p className="mt-1 text-muted">The stuff that doesn&apos;t fit on a CV.</p>
      </Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {personal.length > 0
          ? personal.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <motion.div whileHover={{ y: -6, rotate: -0.6 }} className="h-full">
                  <SpotCard className="h-full p-6">
                    <div className="text-4xl">{p.emoji}</div>
                    <h4 className="mt-4 font-display text-xl font-semibold">{p.title}</h4>
                    <p className="mt-2 text-muted">{p.text}</p>
                  </SpotCard>
                </motion.div>
              </Reveal>
            ))
          : ["Things I love", "Currently into", "Fun facts"].map((t, i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div className="grid h-full min-h-40 place-items-center rounded-[1.25rem] border border-dashed border-line p-6 text-center">
                  <div>
                    <div className="text-3xl">✨</div>
                    <h4 className="mt-3 font-display text-lg font-semibold">{t}</h4>
                    <p className="mt-1 text-sm text-muted">coming soon</p>
                  </div>
                </div>
              </Reveal>
            ))}
      </div>
    </section>
  );
}

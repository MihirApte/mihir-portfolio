"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";
import { timeline } from "@/data/profile";
import { Reveal, SectionTitle } from "./Reveal";

const filters = [
  { id: "all", label: "Everything" },
  { id: "work", label: "Work" },
  { id: "education", label: "Education" },
] as const;

export function Timeline() {
  const [f, setF] = useState<(typeof filters)[number]["id"]>("all");
  const items = timeline.filter((t) => f === "all" || t.kind === f);

  return (
    <section id="journey" className="mx-auto max-w-4xl px-5 py-28">
      <SectionTitle eyebrow="03 / journey" title="How I got here" sub="From Pune to Dublin, one internship and one degree at a time." />
      <Reveal className="mb-10 flex gap-2">
        {filters.map((x) => (
          <button key={x.id} onClick={() => setF(x.id)} className={`rounded-full border px-4 py-1.5 text-sm transition ${f === x.id ? "border-transparent bg-fg text-bg" : "border-line text-muted hover:text-fg"}`}>
            {x.label}
          </button>
        ))}
      </Reveal>
      <div className="relative">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-brand via-line to-transparent" />
        <AnimatePresence mode="popLayout">
          {items.map((t) => (
            <motion.article key={t.title + t.org} layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.35 }} className="relative mb-8 pl-16">
              <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-line bg-bg text-brand">
                {t.kind === "work" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
              </span>
              <div className="card p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-brand">{t.period}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{t.title}</h3>
                <p className="text-muted">{t.org} · <span className="text-sm">{t.place}</span></p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />{p}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

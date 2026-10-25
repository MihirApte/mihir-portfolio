"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { skills } from "@/data/profile";
import { Reveal, SectionTitle } from "./Reveal";

export function Skills() {
  const [group, setGroup] = useState("All");
  const groups = ["All", ...skills.map((s) => s.group)];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-28">
      <SectionTitle eyebrow="2. Skills" title="My toolbox" sub="The tools and methods I use, grouped by area. Filter by area to focus on one." />
      <Reveal className="mb-8 flex flex-wrap gap-2">
        {groups.map((g) => (
          <button key={g} onClick={() => setGroup(g)} className={`rounded-full border px-3.5 py-1.5 text-sm transition ${group === g ? "border-transparent bg-fg text-bg" : "border-line text-muted hover:text-fg"}`}>{g}</button>
        ))}
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {skills.filter((s) => group === "All" || s.group === group).map((s) => (
          <Reveal key={s.group}>
            <div className="card h-full p-6">
              <h3 className="font-display text-lg font-semibold">{s.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <motion.span key={it} whileHover={{ scale: 1.08, y: -2 }} className="cursor-default rounded-full border border-line px-3 py-1 text-sm text-muted">
                    {it}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

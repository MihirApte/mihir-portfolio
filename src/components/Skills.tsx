"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { skills, certifications } from "@/data/profile";
import { Reveal, SectionTitle } from "./Reveal";

export function Skills() {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState("All");
  const groups = ["All", ...skills.map((s) => s.group)];
  const term = q.trim().toLowerCase();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-28">
      <SectionTitle eyebrow="04 / skills" title="My toolbox" sub="Search it or filter it. Tools I've actually used in projects, not a keyword dump." />
      <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative sm:w-72">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Try “PyTorch” or “SQL”" className="w-full rounded-full border border-line bg-card py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-brand" />
        </div>
        <div className="flex flex-wrap gap-2">
          {groups.map((g) => (
            <button key={g} onClick={() => setGroup(g)} className={`rounded-full border px-3.5 py-1.5 text-sm transition ${group === g ? "border-transparent bg-fg text-bg" : "border-line text-muted hover:text-fg"}`}>{g}</button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {skills.filter((s) => group === "All" || s.group === group).map((s) => (
          <Reveal key={s.group}>
            <div className="card h-full p-6">
              <h3 className="font-display text-lg font-semibold">{s.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => {
                  const hit = term && it.toLowerCase().includes(term);
                  const dim = term && !hit;
                  return (
                    <motion.span key={it} whileHover={{ scale: 1.08, y: -2 }} animate={{ opacity: dim ? 0.25 : 1 }} className={`cursor-default rounded-full border px-3 py-1 text-sm ${hit ? "border-brand bg-brand/15 text-fg" : "border-line text-muted"}`}>
                      {it}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <h3 className="font-display text-xl font-semibold">Certifications</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {certifications.map((c) => (
            <div key={c} className="card flex items-center gap-3 px-5 py-4 text-sm text-muted">
              <span className="text-lg">🎓</span>{c}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

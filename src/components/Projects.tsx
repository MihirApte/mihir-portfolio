"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/profile";
import { Reveal, SectionTitle } from "./Reveal";
import { SpotCard } from "./SpotCard";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-28">
      <SectionTitle eyebrow="02 / projects" title="Things I've built" sub="Every one of these has a working demo, dashboard or deployed app. Click a card for the full story." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
            <Link href={`/projects/${p.slug}`} className="group block h-full">
              <SpotCard color={p.accent} className="h-full p-7 transition duration-300 group-hover:-translate-y-1.5">
                <div className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest" style={{ color: p.accent }}>{p.year}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted">{p.subtitle}</p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line transition group-hover:rotate-45 group-hover:bg-fg group-hover:text-bg">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <p className="mt-5 max-w-2xl text-muted">{p.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.metrics.map((m) => (
                    <span key={m.label} className="rounded-full border border-line px-3 py-1 text-xs">
                      <b style={{ color: p.accent }}>{m.value}</b> <span className="text-muted">{m.label}</span>
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tools.slice(0, 5).map((t) => (
                    <span key={t} className="rounded-md bg-soft px-2 py-1 font-mono text-[11px] text-muted">{t}</span>
                  ))}
                  {p.tools.length > 5 && <span className="px-1 py-1 font-mono text-[11px] text-muted">+{p.tools.length - 5}</span>}
                </div>
              </SpotCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

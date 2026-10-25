"use client";
import { GraduationCap } from "lucide-react";
import { certifications } from "@/data/profile";
import { Reveal, SectionTitle } from "./Reveal";
import { SpotCard } from "./SpotCard";

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle eyebrow="5. Certifications" title="Certifications" />
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c} delay={i * 0.06}>
            <SpotCard className="flex h-full items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-brand">
                <GraduationCap size={20} />
              </span>
              <p className="text-sm sm:text-base">{c}</p>
            </SpotCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

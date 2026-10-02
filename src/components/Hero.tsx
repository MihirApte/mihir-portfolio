"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Socials } from "./Socials";

function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) { setDel(false); setI((i + 1) % words.length); }
        }
      },
      del ? 35 : 70,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span className="font-mono text-lg text-brand sm:text-2xl">
      {text}
      <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-0.5 bg-brand" style={{ animation: "blink 1s step-end infinite" }} />
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand/25 blur-[110px]" style={{ animation: "float 9s ease-in-out infinite" }} />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-brand2/20 blur-[120px]" style={{ animation: "float 11s ease-in-out infinite reverse" }} />
        <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-sm text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <MapPin size={13} /> {profile.location} · open to opportunities
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-6 font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Hey, I&apos;m{" "}
            <span className="whitespace-nowrap"><span className="gradient-text">{profile.firstName}</span></span>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-5 h-9">
            <Typewriter words={profile.roles} />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-6 max-w-xl text-lg text-muted">
            {profile.tagline}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand2 px-6 py-3 font-medium text-white shadow-lg shadow-brand/30 transition hover:scale-105">
              See my work <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
            </a>
            <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 font-medium transition hover:scale-105">
              <Download size={16} /> Download CV
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-6">
            <Socials />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.85, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.3, type: "spring", stiffness: 90 }} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-brand to-brand2 opacity-60 blur-xl" />
          <div className="card relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[2rem]">
            {profile.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover object-top" />
            ) : (
              <div className="text-center">
                <div className="gradient-text font-display text-9xl font-bold">MA</div>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">photo coming soon</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

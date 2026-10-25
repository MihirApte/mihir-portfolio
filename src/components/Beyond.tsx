"use client";
import { useState, type KeyboardEvent } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { personal } from "@/data/profile";
import { Reveal, SectionTitle } from "./Reveal";

export function Beyond() {
  const n = personal.length;
  // order[0] is the card on top of the deck.
  const [order, setOrder] = useState<number[]>(() => personal.map((_, i) => i));
  const [leaving, setLeaving] = useState<1 | -1 | null>(null);

  const swipe = (dir: 1 | -1) => {
    if (leaving === null) setLeaving(dir);
  };
  const finish = () => {
    setOrder((o) => [...o.slice(1), o[0]]);
    setLeaving(null);
  };
  const back = () => {
    if (leaving === null) setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);
  };
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") swipe(1);
    if (e.key === "ArrowLeft") swipe(-1);
  };

  if (n === 0) return null;

  return (
    <section id="beyond" className="mx-auto max-w-5xl px-5 py-28">
      <SectionTitle
        eyebrow="6. Beyond work"
        title="Beyond the résumé"
        sub="A few things about me outside work. Swipe a card, tap it, or use the arrows to see the next one."
      />

      <Reveal>
        <div
          tabIndex={0}
          onKeyDown={onKey}
          aria-label="Cards about Mihir. Use the left and right arrow keys to move between them."
          className="relative mx-auto mb-14 h-[640px] w-full max-w-4xl outline-none md:h-[440px]"
        >
          {personal.map((c, i) => {
            const pos = order.indexOf(i);
            const isTop = pos === 0;
            const exiting = isTop && leaving !== null;
            return (
              <motion.div
                key={c.title}
                drag={isTop && !exiting ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 110 || Math.abs(info.velocity.x) > 600) {
                    swipe(info.offset.x > 0 ? 1 : -1);
                  }
                }}
                onTap={() => isTop && swipe(1)}
                animate={
                  exiting
                    ? { x: (leaving as number) * 760, rotate: (leaving as number) * 14, opacity: 0, scale: 1, y: 0 }
                    : { x: 0, rotate: 0, opacity: pos > 2 ? 0 : 1, scale: 1 - pos * 0.05, y: pos * 16 }
                }
                transition={exiting ? { duration: 0.35, ease: "easeIn" } : { type: "spring", stiffness: 260, damping: 26 }}
                onAnimationComplete={() => {
                  if (exiting) finish();
                }}
                style={{ zIndex: n - pos, touchAction: "pan-y" }}
                className={`absolute inset-0 select-none overflow-hidden rounded-3xl border border-line bg-soft shadow-2xl shadow-black/30 ${isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"}`}
              >
                <div className="grid h-full grid-rows-[270px_1fr] md:grid-cols-[0.95fr_1.05fr] md:grid-rows-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.photo} alt={c.alt} draggable={false} className="pointer-events-none h-full w-full object-cover object-top" />
                  <div className="flex flex-col justify-center p-7 md:p-10">
                    <p className="font-mono text-xs uppercase tracking-widest text-brand">
                      {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">{c.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{c.text}</p>
                    <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-muted opacity-70">Swipe or tap for the next card</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Reveal>

      <div className="flex items-center justify-center gap-5">
        <button onClick={back} aria-label="Previous card" className="grid h-12 w-12 place-items-center rounded-full border border-line bg-card transition hover:scale-110">
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2" aria-hidden>
          {personal.map((_, i) => (
            <span key={i} className={`h-2 rounded-full transition-all ${order[0] === i ? "w-6 bg-brand" : "w-2 bg-line"}`} />
          ))}
        </div>
        <button onClick={() => swipe(1)} aria-label="Next card" className="grid h-12 w-12 place-items-center rounded-full border border-line bg-card transition hover:scale-110">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

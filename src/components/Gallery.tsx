"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/data/profile";
import { Reveal, SectionTitle } from "./Reveal";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  const go = (d: number) => setOpen((i) => (i === null ? i : (i + d + gallery.length) % gallery.length));

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-28">
      <SectionTitle eyebrow="05 / life" title="Life outside the terminal" sub="A few snapshots from the human side of things. Tap a photo to see it bigger." />

      {gallery.length === 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="grid aspect-square place-items-center rounded-2xl border border-dashed border-line text-muted">
              <p className="font-mono text-xs uppercase tracking-widest">photo coming soon</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.07}>
              <motion.button
                whileHover={{ y: -6, rotate: i % 2 ? 0.8 : -0.8 }}
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-line text-left"
                aria-label={`Open photo: ${g.alt}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} loading="lazy" className="h-auto w-full transition duration-700 group-hover:scale-105" />
                {g.caption && (
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white opacity-0 transition group-hover:opacity-100">{g.caption}</span>
                )}
              </motion.button>
            </Reveal>
          ))}
        </div>
      )}

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setOpen(null)}
            role="dialog" aria-modal="true"
          >
            <button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><X size={20} /></button>
            <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"><ChevronLeft size={22} /></button>
            <button aria-label="Next" onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"><ChevronRight size={22} /></button>
            <motion.div key={open} initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(e) => e.stopPropagation()} className="max-h-[88vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={gallery[open].src} alt={gallery[open].alt} className="max-h-[88vh] w-auto rounded-2xl object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

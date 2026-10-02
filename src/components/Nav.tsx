"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "motion/react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#journey", label: "Journey" },
  { href: "/#skills", label: "Skills" },
  { href: "/#gallery", label: "Life" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX }} className="h-0.5 origin-left bg-gradient-to-r from-brand to-brand2" />
      <nav className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-line bg-bg/70 px-5 py-2.5 backdrop-blur-xl">
        <Link href="/" className="font-display text-lg font-bold">
          mihir<span className="gradient-text">.</span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="rounded-full px-3 py-1.5 text-sm text-muted transition hover:bg-card hover:text-fg">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme" className="grid h-9 w-9 place-items-center rounded-full border border-line transition hover:bg-card">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-line bg-bg/95 p-3 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-muted hover:bg-card hover:text-fg">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

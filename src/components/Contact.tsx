"use client";
import { useState, type FormEvent } from "react";
import { Mail, Phone, Send, Download, CheckCircle2 } from "lucide-react";
import { Socials } from "./Socials";
import { profile } from "@/data/profile";
import { Reveal, SectionTitle } from "./Reveal";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!FORM_ID) {
      // Fallback until Formspree is configured: open the visitor's mail app.
      const body = `${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Hello from your portfolio")}&body=${encodeURIComponent(body)}`;
      return;
    }
    setState("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) { setState("done"); form.reset(); } else setState("error");
    } catch { setState("error"); }
  }

  const input = "w-full rounded-xl border border-line bg-card px-4 py-3 text-sm outline-none transition focus:border-brand";
  const links = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: profile.phoneHref },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28">
      <SectionTitle eyebrow="06 / contact" title="Let's talk" sub="Hiring, collaborating, or just want to chat about data and coffee? My inbox is open." />
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card h-full space-y-3 p-6">
            {links.map(({ icon: Icon, label, href }) => (
              <a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-line px-4 py-3 transition hover:border-brand hover:bg-card">
                <Icon size={18} className="text-brand" /> <span className="text-sm">{label}</span>
              </a>
            ))}
            <Socials className="pt-2" />
            <a href={profile.cv} download className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand2 px-4 py-3 font-medium text-white transition hover:opacity-90">
              <Download size={16} /> Download my CV (PDF)
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="card space-y-4 p-6">
            <input name="name" required placeholder="Your name" className={input} />
            <input name="email" type="email" required placeholder="Your email" className={input} />
            <textarea name="message" required rows={5} placeholder="What's on your mind?" className={input} />
            <button disabled={state === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-fg px-4 py-3 font-medium text-bg transition hover:opacity-90 disabled:opacity-60">
              <Send size={16} /> {state === "sending" ? "Sending…" : "Send message"}
            </button>
            {state === "done" && <p className="flex items-center gap-2 text-sm text-emerald-400"><CheckCircle2 size={16} /> Thanks! I&apos;ll get back to you soon.</p>}
            {state === "error" && <p className="text-sm text-red-400">Something went wrong. Please email me directly instead.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

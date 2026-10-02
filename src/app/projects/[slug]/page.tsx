import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink, FileText } from "lucide-react";
import { Github } from "@/components/BrandIcons";
import { projects, toEmbedUrl } from "@/data/profile";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SpotCard } from "@/components/SpotCard";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.title} | Mihir Apte`, description: p.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = projects.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];

  const linkBtn = (href: string | undefined, label: string, Icon: typeof Github | typeof ExternalLink) =>
    href ? (
      <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:scale-105">
        <Icon size={15} /> {label}
      </a>
    ) : null;

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-5 pb-20 pt-32">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg">
          <ArrowLeft size={15} /> All projects
        </Link>

        <Reveal>
          <p className="mt-8 font-mono text-xs uppercase tracking-widest" style={{ color: p.accent }}>{p.year} · {p.status}</p>
          <h1 className="mt-3 font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">{p.title}</h1>
          <p className="mt-3 text-xl text-muted">{p.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {linkBtn(p.links.demo, "Live demo", ExternalLink)}
            {linkBtn(p.links.repo, "Source code", Github)}
            {!p.links.repo && p.repoPrivate && (
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-5 py-2.5 text-sm text-muted">
                <Github size={15} /> Repo private for now
              </span>
            )}
          </div>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-3 gap-3">
          {p.metrics.map((m) => (
            <SpotCard key={m.label} color={p.accent} className="p-5 text-center">
              <div className="font-display text-3xl font-bold sm:text-4xl" style={{ color: p.accent }}>{m.value}</div>
              <p className="mt-1 text-xs text-muted sm:text-sm">{m.label}</p>
            </SpotCard>
          ))}
        </Reveal>

        {p.links.demo && (
          <Reveal className="mt-14">
            <h2 className="font-display text-2xl font-bold">Try it live</h2>
            <p className="mt-1 text-sm text-muted">Running right here on the page. If it looks asleep, give it about 30 seconds to wake up.</p>
            <div className="card mt-4 overflow-hidden">
              <div className="flex items-center justify-between border-b border-line px-4 py-2.5 text-xs text-muted">
                <span className="font-mono uppercase tracking-widest">Live demo</span>
                <a href={p.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-fg">
                  Open in new tab <ExternalLink size={12} />
                </a>
              </div>
              <iframe
                src={toEmbedUrl(p.links.demo)}
                title={`${p.title} live demo`}
                loading="lazy"
                className="h-[760px] w-full bg-white"
                allow="clipboard-write"
              />
            </div>
          </Reveal>
        )}

        <Reveal className="mt-14">
          <h2 className="flex items-center gap-2 font-display text-2xl font-bold"><FileText size={20} style={{ color: p.accent }} /> The problem</h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">{p.problem}</p>
        </Reveal>

        <Reveal className="mt-14">
          <h2 className="font-display text-2xl font-bold">What I did</h2>
        </Reveal>
        <div className="mt-6 space-y-4">
          {p.highlights.map((h, i) => (
            <Reveal key={h.title} delay={0.04}>
              <SpotCard color={p.accent} className="flex gap-5 p-6">
                <span className="font-mono text-2xl font-bold opacity-60" style={{ color: p.accent }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{h.title}</h3>
                  <p className="mt-1.5 text-muted">{h.text}</p>
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h2 className="font-display text-2xl font-bold">Tech stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tools.map((t) => (
              <span key={t} className="rounded-full border border-line bg-card px-3.5 py-1.5 font-mono text-sm">{t}</span>
            ))}
          </div>
        </Reveal>

        <Link href={`/projects/${next.slug}`} className="group mt-20 block">
          <SpotCard color={next.accent} className="flex items-center justify-between p-7 transition group-hover:-translate-y-1">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">Next project</p>
              <p className="mt-1 font-display text-2xl font-bold">{next.title}</p>
            </div>
            <ArrowRight className="transition group-hover:translate-x-2" />
          </SpotCard>
        </Link>
      </main>
      <Footer />
    </>
  );
}

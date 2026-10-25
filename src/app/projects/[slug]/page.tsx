import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/profile";
import { ProjectView } from "@/components/ProjectView";

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
  const next = projects[(idx + 1) % projects.length];
  return <ProjectView p={projects[idx]} next={next} />;
}

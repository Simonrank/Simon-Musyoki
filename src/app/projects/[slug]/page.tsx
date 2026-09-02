import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { enrichProjects } from "../lib/enrich";
import ProjectDetail from "../project-detail";

const enriched = enrichProjects(projects);

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return enriched.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = enriched.find((item) => item.id === slug);
  if (!project) return { title: "Project — Simon Musyoki" };
  return {
    title: `${project.title} — Simon Musyoki`,
    description: project.subtitle ?? project.outcome,
  };
}

export default async function ProjectSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const index = enriched.findIndex((item) => item.id === slug);
  const project = enriched[index];
  if (!project) notFound();

  return (
    <ProjectDetail
      project={project}
      previous={index > 0 ? enriched[index - 1] : undefined}
      next={index < enriched.length - 1 ? enriched[index + 1] : undefined}
    />
  );
}

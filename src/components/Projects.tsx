import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";
import { enrichProjects } from "@/app/projects/lib/enrich";
import ProjectPreview from "@/components/project-preview";

export default function Projects() {
  const items = enrichProjects(projects).map((project) => ({
    id: project.id,
    title: project.title,
    subtitle: project.subtitle,
    tag: project.tag,
    image: project.image,
    metrics: project.metrics,
    stack: project.stack,
  }));

  return (
    <SectionShell id="projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Systems in production"
        lead="Each one starts from a decision somebody has to make, and ends in something they use. Open a case study for the problem, the approach, and what changed."
        action={
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.12em] text-muted uppercase transition-colors hover:text-accent-deep"
          >
            All projects
            <ArrowUpRight className="nudge h-3.5 w-3.5" />
          </Link>
        }
      />
      <ProjectPreview items={items} />
    </SectionShell>
  );
}

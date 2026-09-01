import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";
import { enrichProjects, CATEGORY_META } from "@/app/projects/lib/enrich";

export default function Projects() {
  const items = enrichProjects(projects);

  return (
    <SectionShell id="projects">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Projects"
          title="Selected systems, from telematics to HR products"
          lead="Open a case study for architecture, metrics, and what was hard — not a gallery of logos."
        />
        <Link href="/projects" className="btn btn-primary w-fit shrink-0">
          Open project workspace
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <ul className="mt-8 divide-y divide-border border-y border-border">
        {items.map((project) => {
          const category = CATEGORY_META[project.challengeCategory];
          return (
            <li key={project.id}>
              <Link
                href={`/projects/${project.id}`}
                className="grid gap-4 py-5 transition-all duration-300 ease-in-out hover:bg-accent-soft sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-6 lg:grid-cols-[8rem_1fr_14rem]"
              >
                <p className="font-mono text-xs tracking-[0.08em] text-muted uppercase">
                  {category.icon} {category.label}
                </p>
                <div>
                  <p className="font-semibold text-foreground">{project.title}</p>
                  <p className="mt-1 text-sm text-muted">{project.subtitle ?? project.tag}</p>
                </div>
                {project.image ? (
                  <div className="hidden overflow-hidden border border-border bg-card lg:block">
                    <Image
                      src={project.image}
                      alt=""
                      width={560}
                      height={320}
                      className="h-20 w-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <span className="hidden text-sm text-foreground lg:block">View →</span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar } from "lucide-react";
import type { EnrichedProject } from "./lib/enrich";
import { publicPath } from "@/lib/public-path";
import { siteConfig } from "@/data/portfolio";

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="t-label">{label}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="relative pl-4 text-[0.9375rem] leading-7 text-muted">
          <span className="absolute top-[0.85em] left-0 h-px w-2 bg-border-strong" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetail({
  project,
  previous,
  next,
}: {
  project: EnrichedProject;
  previous?: EnrichedProject;
  next?: EnrichedProject;
}) {
  const hasLinks =
    Boolean(project.liveDemoUrl) || project.githubUrl !== siteConfig.social.github;

  return (
    <article className="container-reading py-12 lg:py-16">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.12em] text-muted uppercase transition-colors hover:text-accent-deep"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
        All projects
      </Link>

      <header className="mt-8">
        <p className="t-label text-accent">{project.tag}</p>
        <h1 className="t-h1 mt-4 text-foreground">{project.title}</h1>
        {project.subtitle ? (
          <p className="mt-4 font-display text-xl leading-[1.45] tracking-tight text-muted italic">
            {project.subtitle}
          </p>
        ) : null}
        <p className="t-meta mt-4 text-faint">{project.org}</p>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>

        {hasLinks ? (
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-deep"
              >
                Live dashboard
                <ArrowUpRight className="nudge h-3.5 w-3.5" />
              </a>
            ) : null}
            {project.githubUrl && project.githubUrl !== siteConfig.social.github ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                Repository
                <ArrowUpRight className="nudge h-3.5 w-3.5" />
              </a>
            ) : null}
          </p>
        ) : null}
      </header>

      {project.image ? (
        <div className="project-shot mt-10">
          <Image
            src={publicPath(project.image)}
            alt={`${project.title} — product interface`}
            width={1600}
            height={900}
            sizes="(max-width: 768px) 92vw, 46rem"
            className="h-auto w-full object-cover object-top"
            priority
          />
        </div>
      ) : null}

      {project.gallery?.map((src) => (
        <div key={src} className="project-shot mt-4">
          <Image
            src={publicPath(src)}
            alt={`${project.title} — supporting view`}
            width={1600}
            height={900}
            sizes="(max-width: 768px) 92vw, 46rem"
            className="h-auto w-full object-cover object-top"
          />
        </div>
      ))}

      {project.metrics.length > 0 ? (
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-border py-6 sm:grid-cols-4">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="metric">
              <dt>{metric.label}</dt>
              <dd className="text-[1.125rem]">{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="mt-12 space-y-10">
        <Block label="Problem">
          <p className="t-body text-[1.0625rem]">{project.problem}</p>
        </Block>

        <Block label="Approach">
          <p className="t-body text-[1.0625rem]">{project.solution}</p>
          <Bullets items={project.features} />
        </Block>

        <Block label="Result">
          <p className="t-body text-[1.0625rem]">{project.outcome}</p>
          <Bullets items={project.impact} />
        </Block>

        {project.hardestBug ? (
          <Block label="What was hard">
            <p className="t-body text-[1.0625rem]">{project.hardestBug}</p>
          </Block>
        ) : null}

        {project.bookDemo ? (
          <Block label="Book a demo">
            <p className="t-body">
              This is a private product. I can walk through the workflows, roles, and what it
              looks like in production.
            </p>
            <Link href="/#contact" className="btn btn-primary mt-5">
              <Calendar className="h-4 w-4" />
              Book a demo
            </Link>
          </Block>
        ) : null}
      </div>

      <nav
        aria-label="More projects"
        className="mt-14 flex items-start justify-between gap-8 border-t border-border pt-8"
      >
        {previous ? (
          <Link
            href={`/projects/${previous.id}`}
            className="group max-w-[46%] transition-colors hover:text-foreground"
          >
            <span className="t-label">Previous</span>
            <span className="mt-1.5 block text-[0.9375rem] font-medium text-foreground group-hover:text-accent-deep">
              {previous.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.id}`}
            className="group ml-auto max-w-[46%] text-right transition-colors hover:text-foreground"
          >
            <span className="t-label">Next</span>
            <span className="mt-1.5 block text-[0.9375rem] font-medium text-foreground group-hover:text-accent-deep">
              {next.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}

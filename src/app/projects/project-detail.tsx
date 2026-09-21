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
    <section>
      <h2 className="t-label">{label}</h2>
      <div className="mt-4">{children}</div>
    </section>
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
    <article className="container-site py-12 lg:py-16">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.12em] text-muted uppercase transition-colors hover:text-accent-deep"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
        All work
      </Link>

      <header className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-end">
        <div>
          <p className="t-label text-accent">{project.tag}</p>
          <h1 className="t-h1 mt-4 text-foreground">{project.title}</h1>
          {project.subtitle ? (
            <p className="mt-4 max-w-2xl font-display text-xl leading-[1.4] tracking-tight text-muted italic">
              {project.subtitle}
            </p>
          ) : null}
          <p className="t-meta mt-4 text-faint">{project.org}</p>
        </div>

        <div className="lg:text-right">
          <ul className="flex flex-wrap gap-1.5 lg:justify-end">
            {project.stack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
          {hasLinks ? (
            <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
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
        </div>
      </header>

      {project.image ? (
        <div className="project-shot mt-10">
          <Image
            src={publicPath(project.image)}
            alt={`${project.title} — product interface`}
            width={1920}
            height={1080}
            sizes="(max-width: 1080px) 94vw, 108rem"
            className="h-auto max-h-[min(70vh,46rem)] w-full object-cover object-top"
            priority
          />
        </div>
      ) : null}

      {project.gallery?.length ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {project.gallery.map((src) => (
            <div key={src} className="project-shot">
              <Image
                src={publicPath(src)}
                alt={`${project.title} — supporting view`}
                width={1600}
                height={900}
                sizes="(max-width: 640px) 94vw, 50vw"
                className="h-auto w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      ) : null}

      {project.metrics.length > 0 ? (
        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-border py-7 sm:grid-cols-4">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="metric">
              <dt>{metric.label}</dt>
              <dd className="text-[1.25rem]">{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-14">
        <Block label="Problem">
          <p className="t-body">{project.problem}</p>
        </Block>
        <Block label="Approach">
          <p className="t-body">{project.solution}</p>
        </Block>
        <Block label="Result">
          <p className="t-body">{project.outcome}</p>
        </Block>
      </div>

      <div className="mt-12 grid gap-10 border-t border-border pt-10 lg:grid-cols-2">
        <div>
          <h2 className="t-label">What shipped</h2>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.features.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="t-label">Impact</h2>
          <ul className="mt-4 space-y-2.5">
            {project.impact.map((item) => (
              <li key={item} className="relative pl-4 text-[0.9375rem] leading-6 text-muted">
                <span className="absolute top-[0.8em] left-0 h-px w-2 bg-border-strong" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {project.hardestBug ? (
        <div className="mt-12 border-t border-border pt-10">
          <h2 className="t-label">What was hard</h2>
          <p className="t-body mt-4 max-w-3xl">{project.hardestBug}</p>
        </div>
      ) : null}

      {project.bookDemo ? (
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-border bg-card px-6 py-5">
          <p className="t-body max-w-xl">
            Private product. I can walk through the workflows and what it looks like in production.
          </p>
          <Link href="/#contact" className="btn btn-primary">
            <Calendar className="h-4 w-4" />
            Book a demo
          </Link>
        </div>
      ) : null}

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

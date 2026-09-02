import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import type { EnrichedProject } from "./lib/enrich";
import { publicPath } from "@/lib/public-path";
import { siteConfig } from "@/data/portfolio";

export default function ProjectDetail({
  project,
  previous,
  next,
}: {
  project: EnrichedProject;
  previous?: EnrichedProject;
  next?: EnrichedProject;
}) {
  return (
    <article className="container-site max-w-3xl py-12 lg:py-16">
      <Link href="/projects" className="text-sm text-muted hover:text-foreground">
        ← All projects
      </Link>

      <h1 className="mt-6 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-tight tracking-tight text-foreground">
        {project.title}
      </h1>
      {project.subtitle ? (
        <p className="mt-3 text-lg leading-8 text-muted">{project.subtitle}</p>
      ) : null}
      <p className="mt-2 text-sm text-muted">{project.org}</p>

      <p className="mt-5 text-sm leading-7 text-muted">
        {project.stack.join(" · ")}
      </p>

      {project.liveDemoUrl || project.githubUrl !== siteConfig.social.github ? (
        <p className="mt-4 flex flex-wrap gap-4 text-sm">
          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-accent hover:text-accent-deep"
            >
              Live dashboard
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
          {project.githubUrl && project.githubUrl !== siteConfig.social.github ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted hover:text-foreground"
            >
              Repository
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </p>
      ) : null}

      {project.image ? (
        <div className="mt-8 overflow-hidden border border-border bg-card">
          <Image
            src={publicPath(project.image)}
            alt={`${project.title} product screenshot`}
            width={1600}
            height={900}
            className="h-auto w-full object-cover object-top"
            priority
          />
        </div>
      ) : null}

      {project.gallery?.map((src) => (
        <div key={src} className="mt-4 overflow-hidden border border-border bg-card">
          <Image
            src={publicPath(src)}
            alt=""
            width={1600}
            height={900}
            className="h-auto w-full object-cover object-top"
          />
        </div>
      ))}

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-foreground uppercase">
            The problem
          </h2>
          <p className="mt-3 text-[1.02rem] leading-8 text-muted">{project.problem}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-foreground uppercase">
            What shipped
          </h2>
          <p className="mt-3 text-[1.02rem] leading-8 text-muted">{project.solution}</p>
          <ul className="mt-4 space-y-1.5">
            {project.features.map((item) => (
              <li key={item} className="text-sm leading-7 text-muted">
                <span className="mr-2 text-muted">–</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-foreground uppercase">
            Outcome
          </h2>
          <p className="mt-3 text-[1.02rem] leading-8 text-muted">{project.outcome}</p>
        </div>
      </section>

      {project.metrics.length > 0 ? (
        <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                {metric.label}
              </dt>
              <dd className="mt-1 font-display text-2xl font-medium tracking-tight text-foreground">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      {project.hardestBug ? (
        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-sm font-semibold tracking-wide text-foreground uppercase">
            What was hard
          </h2>
          <p className="mt-3 text-[1.02rem] leading-8 text-muted">{project.hardestBug}</p>
        </section>
      ) : null}

      {project.bookDemo ? (
        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-sm font-semibold tracking-wide text-foreground uppercase">
            Book a demo
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            This is a private product. I can walk through the workflows, roles, and what it looks
            like in production.
          </p>
          <Link href="/#contact" className="btn btn-primary mt-5">
            <Calendar className="h-4 w-4" />
            Book a demo
          </Link>
        </section>
      ) : null}

      <nav className="mt-14 flex items-start justify-between gap-6 border-t border-border pt-8 text-sm">
        {previous ? (
          <Link href={`/projects/${previous.id}`} className="max-w-[45%] text-muted hover:text-foreground">
            <span className="block text-xs tracking-wide uppercase">Previous</span>
            <span className="mt-1 block font-semibold text-foreground">{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.id}`}
            className="max-w-[45%] text-right text-muted hover:text-foreground"
          >
            <span className="block text-xs tracking-wide uppercase">Next</span>
            <span className="mt-1 block font-semibold text-foreground">{next.title}</span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}

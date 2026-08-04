"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Layers3, MonitorSmartphone } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

function ProjectMedia({ project }: { project: Project }) {
  return (
    <div className="relative flex min-h-[320px] flex-col border-b border-border lg:min-h-full lg:border-r lg:border-b-0">
      <div className="flex items-center gap-2 border-b border-border bg-background/50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 truncate font-mono text-[0.68rem] text-muted">
          {project.id}.controltech.app
        </span>
      </div>

      <div className="relative flex-1 overflow-hidden bg-[#0a1222]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover opacity-75"
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(37,99,235,0.28),rgba(11,17,32,0.55)_45%,rgba(11,17,32,0.92))]" />

        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.14em] text-secondary uppercase">
                {project.tag}
              </p>
              <p className="mt-2 max-w-xs text-sm text-muted">{project.org}</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-black/30 px-2 py-1 font-mono text-[0.62rem] text-muted backdrop-blur">
              <MonitorSmartphone className="h-3 w-3" />
              Live system
            </span>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-black/35 p-3 backdrop-blur">
                <Layers3 className="mb-2 h-4 w-4 text-secondary" />
                <p className="font-mono text-[0.62rem] text-muted uppercase">Architecture</p>
                <p className="mt-1 text-sm text-foreground">Full-stack product</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/35 p-3 backdrop-blur">
                <p className="font-mono text-[0.62rem] text-muted uppercase">Screenshot slot</p>
                <p className="mt-1 text-sm leading-5 text-foreground">
                  `/images/projects/{project.id}.png`
                </p>
              </div>
            </div>
            <p className="text-xs leading-5 text-muted">
              Drop a real UI capture at that path to replace the ambience image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudy({ project, active }: { project: Project; active: boolean }) {
  if (!active) return null;

  return (
    <article className="animate-rise mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-card via-card to-[#0d1830] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <ProjectMedia project={project} />

        <div className="space-y-8 p-6 sm:p-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-4 text-[0.98rem] leading-7 text-muted">
              <span className="font-medium text-foreground">Problem. </span>
              {project.problem}
            </p>
            <p className="mt-4 text-[0.98rem] leading-7 text-muted">
              <span className="font-medium text-foreground">Solution. </span>
              {project.solution}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.14em] text-secondary uppercase">
              Business Impact
            </h4>
            <ul className="mt-3 space-y-2">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.14em] text-secondary uppercase">
              Key Features
            </h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-xl border border-border bg-background/40 px-3 py-2.5 text-sm text-muted"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.14em] text-secondary uppercase">
              Technologies
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-border bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-accent/30 bg-accent-soft/50 p-4">
            <p className="font-mono text-xs tracking-[0.14em] text-secondary uppercase">
              Outcome
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground/90">{project.outcome}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0]?.id ?? "");

  return (
    <SectionShell id="work">
      <SectionHeading
        eyebrow="Featured Enterprise Projects"
        title="Case studies from production AI & analytics systems"
        lead="Deployed operational products — telematics intelligence, enterprise AI assistants, and multi-tenant platforms — written the way a consulting case study should read."
      />

      <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
        {projects.map((project) => {
          const active = project.id === activeId;
          return (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveId(project.id)}
              className={`shrink-0 rounded-2xl border px-4 py-3 text-left transition ${
                active
                  ? "border-accent bg-accent-soft text-foreground shadow-[0_0_0_1px_rgba(37,99,235,0.25)]"
                  : "border-border bg-card/70 text-muted hover:border-white/20 hover:text-foreground"
              }`}
            >
              <span className="block max-w-[15rem] text-sm font-medium">{project.title}</span>
              <span className="mt-1 block font-mono text-[0.65rem] tracking-[0.12em] uppercase opacity-80">
                {project.tag}
              </span>
            </button>
          );
        })}
      </div>

      {projects.map((project) => (
        <CaseStudy key={project.id} project={project} active={project.id === activeId} />
      ))}

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <button
            key={`card-${project.id}`}
            type="button"
            onClick={() => {
              setActiveId(project.id);
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group rounded-2xl border border-border bg-card/80 p-5 text-left transition hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)]"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="font-mono text-[0.68rem] tracking-[0.14em] text-secondary uppercase">
                {project.tag}
              </p>
              <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:text-secondary" />
            </div>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{project.problem}</p>
          </button>
        ))}
      </div>
    </SectionShell>
  );
}

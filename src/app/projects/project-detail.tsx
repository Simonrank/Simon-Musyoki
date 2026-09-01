"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { EnrichedProject } from "./lib/enrich";
import AnimatedStat from "./animated-stat";
import MermaidDiagram from "./mermaid-diagram";
import { CATEGORY_META } from "./lib/enrich";

export default function ProjectDetail({ project }: { project: EnrichedProject }) {
  const [technical, setTechnical] = useState(false);
  const [bugOpen, setBugOpen] = useState(false);
  const [day, setDay] = useState(1);

  const steps = project.retrospectiveSteps;
  const activeStep = useMemo(
    () => steps.find((step) => step.day === day) ?? steps[0],
    [day, steps],
  );
  const marketing = [project.problem, project.solution, project.outcome]
    .filter(Boolean)
    .join(" ");
  const body = technical ? project.descriptionTech : marketing;
  const category = CATEGORY_META[project.challengeCategory];

  return (
    <article className="mx-auto max-w-3xl px-5 py-8 lg:px-10 lg:py-10">
      <p className="inline-flex items-center gap-2 border border-border px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.12em] text-foreground uppercase">
        <span aria-hidden="true">{category.icon}</span>
        {category.label}
      </p>
      <h1 className="mt-4 font-display text-[clamp(1.8rem,4vw,2.7rem)] font-medium leading-tight tracking-tight text-foreground">
        {project.title}
      </h1>
      {project.subtitle ? (
        <p className="mt-2 text-base leading-7 text-muted">{project.subtitle}</p>
      ) : null}
      <p className="mt-1 text-sm text-muted">{project.org}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="border border-border px-2.5 py-1 font-mono text-xs text-muted"
          >
            {item}
          </span>
        ))}
      </div>

      {project.image ? (
        <div className="mt-8 overflow-hidden border border-border">
          <Image
            src={project.image}
              alt={`${project.title} product screenshot`}
            width={1600}
            height={900}
            className="h-auto w-full object-cover object-top"
            priority
          />
        </div>
      ) : null}

      <div className="mt-8 flex items-center justify-between gap-4 border-b border-border pb-3">
        <h2 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase">
          Description
        </h2>
        <button
          type="button"
          onClick={() => setTechnical((value) => !value)}
          aria-pressed={technical}
          className="btn btn-secondary min-h-8 px-3 py-1 text-xs"
        >
          {technical ? "Marketing copy" : "Technical copy"}
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={technical ? "tech" : "market"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="mt-4 text-[0.98rem] leading-7 text-muted"
        >
          {body}
        </motion.p>
      </AnimatePresence>

      <section className="mt-10">
        <h2 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase">
          {project.bookDemo ? "Book a demo" : "Live sandbox"}
        </h2>
        {project.bookDemo ? (
          <div className="mt-4 border border-border bg-card p-6">
            <p className="text-sm leading-6 text-muted">
              This is a private product. Book a walkthrough and I&apos;ll show the workflows,
              roles, and what it looks like in production.
            </p>
            <a href="/#contact" className="btn btn-primary mt-4">
              <Calendar className="h-4 w-4" />
              Book a demo
            </a>
          </div>
        ) : project.liveDemoUrl ? (
          <iframe
            title={`${project.title} live demo`}
            src={project.liveDemoUrl}
            sandbox="allow-scripts allow-same-origin"
            className="mt-4 h-[28rem] w-full border border-border bg-card"
          />
        ) : (
          <div className="mt-4 border border-dashed border-border bg-card/80 p-6">
            <p className="text-sm leading-6 text-muted">
              No public sandbox for this system. Client and internal products stay private —
              the GitHub profile carries the public engineering signal.
            </p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary mt-4"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Open GitHub
            </a>
          </div>
        )}
      </section>

      {project.metrics.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase">
            Metrics
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.metrics.map((metric) => (
              <AnimatedStat key={metric.label} label={metric.label} value={metric.value} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase">
          Hardest bug
        </h2>
        <div className="mt-4 border border-border">
          <button
            type="button"
            aria-expanded={bugOpen}
            onClick={() => setBugOpen((value) => !value)}
            className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-foreground"
          >
            What actually broke
            <span className="font-mono text-xs text-muted">{bugOpen ? "–" : "+"}</span>
          </button>
          {bugOpen ? (
            <p className="border-t border-border px-4 py-3 text-sm leading-7 text-muted">
              {project.hardestBug}
            </p>
          ) : null}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase">
          Architecture
        </h2>
        <div className="mt-4 border border-border bg-card p-4">
          <MermaidDiagram definition={project.architectureDiagram} />
        </div>
      </section>

      <section className="mt-10 pb-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase">
            Retrospective
          </h2>
          <p className="font-mono text-xs text-muted">
            Day {activeStep.day} of {steps.length}
          </p>
        </div>
        <input
          type="range"
          min={1}
          max={Math.max(steps.length, 1)}
          step={1}
          value={day}
          onChange={(event) => setDay(Number(event.target.value))}
          className="mt-4 w-full accent-foreground"
          aria-label="Retrospective day"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={day}
          aria-valuetext={`Day ${activeStep.day}: ${activeStep.title}`}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.day}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-4 border border-border bg-background/70 p-5"
          >
            <p className="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
              Day {activeStep.day}
            </p>
            <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-foreground">
              {activeStep.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted">{activeStep.description}</p>
          </motion.div>
        </AnimatePresence>
      </section>

      {project.liveDemoUrl ? (
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-foreground"
        >
          Open live demo
        </a>
      ) : null}
    </article>
  );
}

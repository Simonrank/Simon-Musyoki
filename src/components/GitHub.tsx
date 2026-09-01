import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { githubPinned, siteConfig } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export default function GitHubSection() {
  return (
    <SectionShell id="github" className="bg-[linear-gradient(180deg,rgba(17,24,39,0.4),transparent)]">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="GitHub"
          title="Open work & engineering signal"
          lead="Selected public repositories alongside a contribution footprint. Enterprise client systems remain private — their stories live in the case studies above."
        />
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary w-fit shrink-0"
        >
          Open GitHub
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="glass mt-10 overflow-hidden rounded-3xl p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-signal uppercase">
              Contribution activity
            </p>
            <p className="mt-2 text-sm text-muted">@Simonrank · public contribution graph</p>
          </div>
          <div className="flex gap-2 font-mono text-xs text-muted">
            <span className="rounded-md border border-border px-2 py-1">TypeScript</span>
            <span className="rounded-md border border-border px-2 py-1">Python</span>
            <span className="rounded-md border border-border px-2 py-1">SQL</span>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-background/50 p-4">
          {/* External contribution chart image — lightweight GitHub visual */}
          <Image
            src="https://ghchart.rshah.org/2563eb/Simonrank"
            alt="GitHub contribution graph for Simonrank"
            width={1100}
            height={180}
            unoptimized
            className="mx-auto min-w-[720px] w-full opacity-95"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {githubPinned.map((repo) => (
          <a
            key={repo.name}
            href={repo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-card p-5 transition hover:border-accent/45"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-foreground group-hover:text-signal">
                {repo.name}
              </h3>
              <ArrowUpRight className="h-4 w-4 text-muted" />
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{repo.description}</p>
            <p className="mt-5 font-mono text-xs text-signal">{repo.language}</p>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}

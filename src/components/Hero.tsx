"use client";

import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { heroMetrics, siteConfig } from "@/data/portfolio";
import { downloadCV } from "@/lib/download-cv";
import { publicPath } from "@/lib/public-path";
import SignalPlot from "@/components/ui/SignalPlot";
import Navbar from "./Navbar";

const disciplines = ["Data Science", "Software Engineering", "Fleet Intelligence"];

export default function Hero() {
  return (
    <>
      <Navbar />
      <section id="home" className="relative isolate overflow-hidden">
        <div className="grid-field" aria-hidden />

      <div className="container-site relative grid items-center gap-12 pt-24 pb-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-28 lg:pb-20">
        <div>
          <ul className="animate-rise flex flex-wrap items-center gap-x-3 gap-y-2">
            {disciplines.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 ? (
                  <span className="h-3 w-px bg-border-strong" aria-hidden />
                ) : null}
                <span className="t-label text-accent">{item}</span>
              </li>
            ))}
          </ul>

          <h1 className="animate-rise-d1 t-display mt-5 text-foreground">
            Simon
            <br />
            Musyoki
          </h1>

          <p className="animate-rise-d2 mt-6 max-w-xl font-display text-[1.4rem] leading-[1.35] tracking-tight text-foreground italic sm:text-[1.6rem]">
            {siteConfig.tagline}
          </p>

          <p className="animate-rise-d2 t-body mt-5 max-w-xl">
            {siteConfig.role} at {siteConfig.employer.company} in {siteConfig.location}. I build
            the dashboards, pipelines, and APIs that put live operational data in front of the
            people who have to act on it.
          </p>

          <div className="animate-rise-d3 mt-8 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="btn btn-primary group">
              View selected work
              <ArrowRight className="nudge h-4 w-4" />
            </Link>
            <button type="button" onClick={downloadCV} className="btn btn-secondary">
              <Download className="h-4 w-4" />
              Download CV
            </button>
          </div>

          <p className="animate-rise-d3 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="t-meta text-muted underline-offset-4 transition-colors hover:text-accent-deep hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="t-meta text-muted underline-offset-4 transition-colors hover:text-accent-deep hover:underline"
            >
              GitHub
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="t-meta break-all text-muted underline-offset-4 transition-colors hover:text-accent-deep hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>

          <dl className="animate-rise-d3 mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="metric-inline">
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
                <dd className="t-meta text-faint">{metric.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="animate-rise-d2 mx-auto w-full max-w-sm lg:max-w-none">
          <div className="card overflow-hidden">
            <Image
              src={publicPath("/images/user.jpeg")}
              alt={`Portrait of ${siteConfig.name}, ${siteConfig.role} at ${siteConfig.employer.company}`}
              width={720}
              height={900}
              priority
              sizes="(max-width: 1024px) 24rem, 34vw"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="border-t border-border">
              <div className="flex items-baseline justify-between gap-3 px-5 pt-4">
                <span className="t-label">Currently</span>
                <span className="t-meta text-muted">{siteConfig.location}</span>
              </div>
              <p className="px-5 pb-4 font-display text-lg leading-snug tracking-tight text-foreground">
                {siteConfig.employer.company}
              </p>
              <SignalPlot className="block h-12 w-full border-t border-border" />
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
    </>
  );
}

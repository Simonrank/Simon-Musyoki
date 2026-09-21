"use client";

import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { heroMetrics, siteConfig } from "@/data/portfolio";
import { downloadCV } from "@/lib/download-cv";
import { publicPath } from "@/lib/public-path";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section id="home" className="relative isolate overflow-hidden">
        <div className="grid-field" aria-hidden />

        <div className="container-site relative grid items-center gap-10 pt-24 pb-14 lg:grid-cols-[minmax(18rem,30rem)_18.5rem_14.5rem] lg:justify-between lg:gap-8 lg:pt-28 lg:pb-16 xl:grid-cols-[minmax(18rem,32rem)_20rem_15rem] xl:gap-10">
          <div className="min-w-0">
            <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
              <span className="hero-live" aria-hidden />
              <span className="t-label text-foreground">Data Scientist</span>
              <span className="text-border-strong" aria-hidden>
                /
              </span>
              <span className="t-label">Data Analyst</span>
            </p>

            <h1 className="animate-rise-d1 mt-5 font-display text-[clamp(2.5rem,4.8vw,3.85rem)] leading-[1.02] tracking-[-0.038em] text-foreground">
              Simon Musyoki
            </h1>

            <p className="animate-rise-d2 mt-4 text-[1.075rem] leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>

            <div className="animate-rise-d3 mt-7 flex flex-wrap items-center gap-3">
              <Link href="/#experience" className="btn btn-primary group">
                View selected work
                <ArrowRight className="nudge h-4 w-4" />
              </Link>
              <button type="button" onClick={downloadCV} className="btn btn-secondary">
                <Download className="h-4 w-4" />
                Download CV
              </button>
            </div>

            <p className="animate-rise-d3 mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
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
            </p>
          </div>

          <figure className="hero-portrait animate-rise-d2 mx-auto w-full max-w-[18.5rem] lg:mx-0 lg:max-w-none">
            <Image
              src={publicPath("/images/user.jpeg")}
              alt={`Portrait of ${siteConfig.name}, ${siteConfig.role} at ${siteConfig.employer.company}`}
              width={640}
              height={800}
              priority
              sizes="20rem"
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>

          <dl className="animate-rise-d3 grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-1 lg:divide-x-0 lg:divide-y lg:rounded-none lg:border-0 lg:border-l lg:bg-transparent lg:pl-8">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="px-4 py-4 lg:px-0 lg:py-5 first:lg:pt-0 last:lg:pb-0">
                <dt className="t-label">{metric.label}</dt>
                <dd className="mt-1.5 text-[1.02rem] font-medium tracking-tight text-foreground">
                  {metric.value}
                </dd>
                <dd className="t-meta mt-0.5 text-faint">{metric.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

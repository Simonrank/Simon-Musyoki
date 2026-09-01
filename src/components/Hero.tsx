"use client";

import { ArrowDownRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { heroMetrics, siteConfig } from "@/data/portfolio";
import { downloadCV } from "@/lib/download-cv";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <Navbar />

      <div className="container-site grid items-center gap-8 pb-12 pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-14 lg:pt-28">
        <div>
          <p className="animate-rise text-xs font-semibold tracking-[0.12em] text-accent uppercase">
            {siteConfig.heroRoles} · {siteConfig.location}
          </p>

          <h1 className="animate-rise-d1 mt-4 font-display text-[clamp(2.8rem,6.5vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.04em] text-foreground">
            {siteConfig.name}
          </h1>

          <p className="animate-rise-d2 mt-5 max-w-xl text-lg leading-8 text-muted">
            {siteConfig.tagline}
          </p>

          <p className="animate-rise-d2 mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
            {siteConfig.headline}
          </p>

          <div className="animate-rise-d3 mt-8 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="btn btn-primary">
              View projects
              <ArrowDownRight className="h-4 w-4" />
            </Link>
            <button type="button" onClick={downloadCV} className="btn btn-secondary">
              <Download className="h-4 w-4" />
              Download CV
            </button>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost min-h-9 px-3"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost min-h-9 px-3"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>

          <div className="animate-rise-d3 mt-8 rule" />
          <dl className="animate-rise-d3 mt-5 grid gap-5 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="metric-inline">
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
                <dd className="!font-normal !text-sm text-muted">{metric.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-rise-d2 mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden border border-border bg-card shadow-[0_24px_60px_-28px_rgba(26,25,22,0.35)]">
            <Image
              src="/images/user.jpeg"
              alt={`${siteConfig.name}, Data Scientist`}
              width={720}
              height={900}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="border-t border-border px-4 py-3">
              <p className="text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                Currently
              </p>
              <p className="mt-1 text-sm text-foreground">
                {siteConfig.employer.title}, {siteConfig.employer.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { heroMetrics, siteConfig } from "@/data/portfolio";
import { downloadCV } from "@/lib/download-cv";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-svh overflow-hidden">
      <div className="mesh" aria-hidden="true">
        <div className="mesh-grid" />
        <div
          className="mesh-orb"
          style={{
            width: 520,
            height: 520,
            top: "-8%",
            right: "-5%",
            background: "radial-gradient(circle, rgba(37,99,235,0.5), transparent 68%)",
          }}
        />
        <div
          className="mesh-orb"
          style={{
            width: 420,
            height: 420,
            bottom: "0%",
            left: "-8%",
            background: "radial-gradient(circle, rgba(56,189,248,0.28), transparent 70%)",
            animationDelay: "2s",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0b1120_78%)]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="container-site grid items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-28 lg:pt-32">
          <div>
            <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              <span className="text-xs text-muted">
                Available for senior analytics & AI conversations
              </span>
            </div>

            <h1 className="animate-rise-d1 mt-6 text-[clamp(3rem,7.5vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground">
              {siteConfig.name}
            </h1>

            <p className="animate-rise-d2 mt-5 text-xl font-medium tracking-tight text-transparent sm:text-2xl"
              style={{
                backgroundImage: "linear-gradient(90deg, #38bdf8, #60a5fa, #93c5fd)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              {siteConfig.role}
            </p>

            <p className="animate-rise-d2 mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
              {siteConfig.headline}
            </p>

            <div className="animate-rise-d3 mt-9 flex flex-wrap gap-3">
              <Link href="#work" className="btn btn-primary">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button type="button" onClick={downloadCV} className="btn btn-secondary">
                <Download className="h-4 w-4" />
                Download CV
              </button>
              <Link href="#contact" className="btn btn-ghost">
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </div>

            <dl className="animate-rise-d3 mt-12 grid gap-3 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-md"
                >
                  <dt className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                    {metric.value}
                  </dd>
                  <dd className="mt-1 text-sm text-muted">{metric.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-rise-d2 relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-secondary/70 via-accent/40 to-transparent opacity-80" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card">
              <Image
                src="/images/user.jpeg"
                alt={`${siteConfig.name}, Data Scientist at Controltech Limited`}
                width={720}
                height={900}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/70 to-transparent p-5 pt-20">
                <p className="text-sm font-medium text-foreground">
                  {siteConfig.employer.title}
                </p>
                <p className="text-sm text-secondary">{siteConfig.employer.company}</p>
                <p className="mt-1 text-xs text-muted">{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

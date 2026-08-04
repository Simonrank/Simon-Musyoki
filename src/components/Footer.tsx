"use client";

import Link from "next/link";
import { navLinks, siteConfig } from "@/data/portfolio";
import { downloadCV } from "@/lib/download-cv";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[#070c16]">
      <div className="container-site py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xl font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-md text-sm leading-7 text-muted">
              Data Scientist at Controltech Limited — building production AI, analytics, and
              fleet intelligence systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
            <button type="button" onClick={downloadCV} className="hover:text-foreground">
              Resume
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p className="font-mono tracking-[0.12em] uppercase">{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}

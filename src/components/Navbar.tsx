"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-site flex h-[72px] items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="relative z-[110] text-sm font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.82rem] font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-primary min-h-9 px-3.5 py-1.5 text-sm">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-[110] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-5 bg-foreground transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span className={`h-px w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-5 bg-foreground transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          } fixed inset-0 z-[105] bg-background transition-opacity`}
      >
        <nav className="container-site flex h-full flex-col justify-center gap-5 pt-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-medium tracking-tight text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

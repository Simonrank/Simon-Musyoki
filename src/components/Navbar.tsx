"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/portfolio";

const menuLinks = navLinks.filter((link) => link.href !== "/#contact");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] isolate border-b bg-background transition-colors duration-300 ${
        scrolled || open ? "border-border" : "border-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-base tracking-tight text-foreground"
        >
          Simon <span className="italic">Musyoki</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 font-mono text-[0.7rem] tracking-[0.12em] text-muted uppercase transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-primary ml-3 min-h-9 px-4 text-[0.8rem]">
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`h-px w-5 bg-foreground transition duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-foreground transition duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background md:hidden"
      >
        <nav aria-label="Mobile" className="container-site flex flex-col py-2">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3.5 font-mono text-[0.72rem] tracking-[0.12em] text-foreground uppercase last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-wrap items-center gap-3 py-4">
            <Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-primary">
              Get in touch
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="t-meta break-all text-muted"
              onClick={() => setOpen(false)}
            >
              {siteConfig.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

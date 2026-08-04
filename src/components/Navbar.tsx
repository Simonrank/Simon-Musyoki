"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between">
        <Link
          href="#home"
          onClick={() => setOpen(false)}
          className="relative z-[110] flex items-center gap-3"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={34}
            height={34}
            className="h-[34px] w-[34px] object-contain"
            priority
          />
          <span className="text-[0.98rem] font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contact" className="btn btn-primary min-h-10 px-4 py-2 text-sm">
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
        } fixed inset-0 z-[105] bg-background/95 backdrop-blur-xl transition-opacity`}
      >
        <nav className="container-site flex h-full flex-col justify-center gap-5 pt-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-semibold tracking-tight text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 w-fit"
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
}

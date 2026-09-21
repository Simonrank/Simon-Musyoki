import Link from "next/link";
import { navLinks, siteConfig } from "@/data/portfolio";

const social = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, external: true },
  { label: "GitHub", href: siteConfig.social.github, external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-site py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <Link href="/" className="font-display text-2xl tracking-tight text-foreground">
              Simon <span className="italic">Musyoki</span>
            </Link>
            <p className="t-small mt-3 max-w-sm">{siteConfig.tagline}</p>
          </div>

          <ul className="flex flex-col gap-2 md:items-start">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-[0.7rem] tracking-[0.12em] text-muted uppercase underline-offset-4 transition-colors hover:text-accent-deep hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-2 md:items-end">
            {social.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="font-mono text-[0.7rem] tracking-[0.12em] text-muted uppercase underline-offset-4 transition-colors hover:text-accent-deep hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-meta text-faint">
            © {year} {siteConfig.name}
          </p>
          <p className="t-meta text-faint">{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}

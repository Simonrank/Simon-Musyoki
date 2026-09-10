import Link from "next/link";
import { siteConfig } from "@/data/portfolio";

const links = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, external: true },
  { label: "GitHub", href: siteConfig.social.github, external: true },
  { label: "Email", href: `mailto:${siteConfig.email}`, external: false },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-site py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <Link href="/" className="font-display text-2xl tracking-tight text-foreground">
              Simon <span className="italic">Musyoki</span>
            </Link>
            <p className="t-small mt-3">{siteConfig.tagline}</p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
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

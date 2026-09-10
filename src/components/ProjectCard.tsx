import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { publicPath } from "@/lib/public-path";

export type ProjectCardProps = {
  index: number;
  id: string;
  title: string;
  subtitle?: string;
  tag: string;
  image?: string;
  metrics?: { label: string; value: string }[];
  stack?: string[];
  reveal?: boolean;
};

export default function ProjectCard({
  index,
  id,
  title,
  subtitle,
  tag,
  image,
  metrics = [],
  stack = [],
  reveal = true,
}: ProjectCardProps) {
  return (
    <li {...(reveal ? { "data-reveal": "" } : {})}>
      <Link
        href={`/projects/${id}`}
        className="group flex h-full flex-col focus-visible:outline-none"
      >
        <div className="flex items-baseline justify-between gap-4 pb-3">
          <span className="t-num text-[0.6875rem] tracking-[0.1em] text-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="t-label text-right leading-tight">{tag}</span>
        </div>

        <div className="project-shot aspect-[16/10]">
          {image ? (
            <Image
              src={publicPath(image)}
              alt={`${title} interface`}
              width={960}
              height={600}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="relative flex h-full items-end p-5">
              <span className="grid-field" aria-hidden />
              <span className="relative font-display text-lg leading-tight tracking-tight text-muted italic">
                {tag}
              </span>
            </div>
          )}
        </div>

        <h3 className="t-h3 mt-4 text-foreground transition-colors duration-300 group-hover:text-accent-deep">
          {title}
        </h3>
        {subtitle ? <p className="t-small mt-1.5">{subtitle}</p> : null}

        {metrics.length > 0 ? (
          <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {metrics.slice(0, 2).map((metric) => (
              <div key={metric.label} className="metric">
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-5">
          {stack.slice(0, 3).map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1 font-mono text-[0.6875rem] tracking-[0.1em] text-muted uppercase transition-colors duration-300 group-hover:text-accent-deep">
            Case study
            <ArrowUpRight className="nudge h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </li>
  );
}

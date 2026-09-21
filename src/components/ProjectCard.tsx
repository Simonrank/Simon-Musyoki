import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { publicPath } from "@/lib/public-path";

export type ProjectCardProps = {
  index: number;
  id: string;
  title: string;
  tag: string;
  image?: string;
  reveal?: boolean;
  compact?: boolean;
};

export default function ProjectCard({
  index,
  id,
  title,
  tag,
  image,
  reveal = true,
  compact = false,
}: ProjectCardProps) {
  const label = tag.replace(/^Featured · /, "");

  return (
    <li
      {...(reveal ? { "data-reveal": "" } : {})}
      className={compact ? "last:[&>a]:border-b-0" : ""}
    >
      <Link
        href={`/projects/${id}`}
        className={
          compact
            ? "group grid items-center gap-4 border-b border-border py-3 sm:grid-cols-[6.5rem_minmax(0,1fr)_auto] sm:gap-5"
            : "group grid items-center gap-4 border-b border-border py-6 sm:grid-cols-[8rem_minmax(0,1fr)_auto] sm:gap-8 lg:py-7"
        }
      >
        <div className="project-shot aspect-[16/10]">
          {image ? (
            <Image
              src={publicPath(image)}
              alt=""
              width={320}
              height={200}
              sizes={compact ? "6.5rem" : "8rem"}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="relative h-full min-h-[4.5rem] bg-surface" />
          )}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="t-num text-[0.6875rem] tracking-[0.1em] text-faint">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3
              className={`text-foreground transition-colors duration-300 group-hover:text-accent-deep ${
                compact ? "text-[1.05rem] font-medium tracking-tight" : "t-h3"
              }`}
            >
              {title}
            </h3>
          </div>
          <p className="t-label mt-1">{label}</p>
        </div>

        <ArrowUpRight className="nudge hidden h-4 w-4 text-muted sm:block group-hover:text-accent-deep" />
      </Link>
    </li>
  );
}

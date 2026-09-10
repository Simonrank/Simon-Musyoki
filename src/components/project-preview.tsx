"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ProjectCard, { type ProjectCardProps } from "@/components/ProjectCard";

const FEATURED_IDS = [
  "fleet-intelligence",
  "yakwetu-pricing",
  "rank-solutions",
] as const;

export type PreviewProject = Omit<ProjectCardProps, "index" | "reveal">;

export default function ProjectPreview({ items }: { items: PreviewProject[] }) {
  const [open, setOpen] = useState(false);

  const featured = FEATURED_IDS.map((id) => items.find((item) => item.id === id)).filter(
    (item): item is PreviewProject => Boolean(item),
  );
  const rest = items.filter(
    (item) => !FEATURED_IDS.includes(item.id as (typeof FEATURED_IDS)[number]),
  );

  return (
    <>
      <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, index) => (
          <ProjectCard key={project.id} index={index} {...project} />
        ))}
        {open
          ? rest.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                index={featured.length + index}
                reveal={false}
              />
            ))
          : null}
      </ul>

      {rest.length > 0 ? (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="btn btn-pill"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <>
                Show less
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                {`See ${rest.length} more`}
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      ) : null}
    </>
  );
}

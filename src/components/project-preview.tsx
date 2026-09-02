"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

const FEATURED_IDS = [
  "fleet-intelligence",
  "yakwetu-pricing",
  "rank-solutions",
] as const;

export type PreviewProject = {
  id: string;
  title: string;
  subtitle?: string;
  tag: string;
  image?: string;
};

export default function ProjectPreview({ items }: { items: PreviewProject[] }) {
  const [open, setOpen] = useState(false);
  const featured = FEATURED_IDS.map((id) => items.find((item) => item.id === id)).filter(
    (item): item is PreviewProject => Boolean(item),
  );
  const rest = items.filter(
    (item) => !FEATURED_IDS.includes(item.id as (typeof FEATURED_IDS)[number]),
  );
  const visible = open ? [...featured, ...rest] : featured;

  return (
    <>
      <ul className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            subtitle={project.subtitle}
            tag={project.tag}
            image={project.image}
          />
        ))}
      </ul>

      {rest.length > 0 ? (
        <div className="mt-14 flex justify-center">
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
                See more
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      ) : null}
    </>
  );
}

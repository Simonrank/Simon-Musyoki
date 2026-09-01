"use client";

import dynamic from "next/dynamic";
import type { EnrichedProject } from "./lib/enrich";

const ProjectDetail = dynamic(() => import("./project-detail"), { ssr: false });

export default function ProjectDetailLoader({ project }: { project: EnrichedProject }) {
  return <ProjectDetail project={project} />;
}

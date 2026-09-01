import { projects } from "@/data/portfolio";
import { enrichProjects } from "../lib/enrich";

export default function ProjectDetailLoading() {
  const count = enrichProjects(projects).length;
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 lg:px-10">
      <div className="h-5 w-28 border border-border bg-card" />
      <div className="mt-4 h-10 w-4/5 border border-border bg-card" />
      <div className="mt-8 h-48 border border-border bg-card" />
      <p className="sr-only">Loading project detail ({count} systems in the index).</p>
    </div>
  );
}

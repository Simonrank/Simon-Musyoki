import { redirect } from "next/navigation";
import { projects } from "@/data/portfolio";
import { enrichProjects } from "./lib/enrich";

export default function ProjectsIndexPage() {
  const [first] = enrichProjects(projects);
  redirect(`/projects/${first.id}`);
}

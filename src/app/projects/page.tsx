import { projects } from "@/data/portfolio";
import { enrichProjects } from "./lib/enrich";
import ProjectCard from "@/components/ProjectCard";

const items = enrichProjects(projects);

export default function ProjectsIndexPage() {
  return (
    <div className="container-site py-12 lg:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow eyebrow-plain justify-center">Selected work</p>
        <h1 className="section-title section-title-display">
          Featured <span className="text-accent">projects</span>
        </h1>
        <p className="section-lead mx-auto">
          Open a case study for the problem, what shipped, and what was hard.
        </p>
      </div>

      <ul className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
        {items.map((project) => (
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
    </div>
  );
}

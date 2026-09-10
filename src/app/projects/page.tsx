import { projects } from "@/data/portfolio";
import { enrichProjects } from "./lib/enrich";
import ProjectCard from "@/components/ProjectCard";

const items = enrichProjects(projects);

export default function ProjectsIndexPage() {
  return (
    <div className="container-site py-12 lg:py-16">
      <header className="max-w-2xl">
        <p className="eyebrow">Selected work</p>
        <h1 className="section-title section-title-display">
          Systems in <span className="text-accent">production</span>
        </h1>
        <p className="section-lead">
          Fleet intelligence, demand pricing, enterprise AI, and internal operations products.
          Each case study covers the problem, the approach, and what changed.
        </p>
      </header>

      <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            id={project.id}
            title={project.title}
            subtitle={project.subtitle}
            tag={project.tag}
            image={project.image}
            metrics={project.metrics}
            stack={project.stack}
          />
        ))}
      </ul>
    </div>
  );
}

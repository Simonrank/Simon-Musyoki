import { independentProjects, projectsForCompany } from "@/data/portfolio";
import { ProjectGroup } from "@/components/project-preview";

const atWork = projectsForCompany("Controltech Limited").map((project) => ({
  id: project.id,
  title: project.title,
  tag: project.tag,
  image: project.image,
}));

const other = independentProjects().map((project) => ({
  id: project.id,
  title: project.title,
  tag: project.tag,
  image: project.image,
}));

export default function ProjectsIndexPage() {
  return (
    <div className="container-site py-12 lg:py-16">
      <header>
        <p className="eyebrow">Work</p>
        <h1 className="section-title section-title-display">Selected work</h1>
      </header>

      <div className="mt-12 space-y-12">
        <ProjectGroup label="Controltech Limited" items={atWork} />
        <ProjectGroup label="Other important" items={other} />
      </div>
    </div>
  );
}

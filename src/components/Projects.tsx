import { projects } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";
import { enrichProjects } from "@/app/projects/lib/enrich";
import ProjectPreview from "@/components/project-preview";

export default function Projects() {
  const items = enrichProjects(projects).map((project) => ({
    id: project.id,
    title: project.title,
    subtitle: project.subtitle,
    tag: project.tag,
    image: project.image,
  }));

  return (
    <SectionShell id="projects">
      <SectionHeading
        align="center"
        eyebrow="Selected work"
        title="Featured projects"
        accentWord="projects"
      />
      <ProjectPreview items={items} />
    </SectionShell>
  );
}

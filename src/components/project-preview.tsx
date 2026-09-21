import ProjectCard, { type ProjectCardProps } from "@/components/ProjectCard";

export type PreviewProject = Omit<ProjectCardProps, "index" | "reveal" | "compact">;

export default function ProjectPreview({
  items,
  compact = false,
}: {
  items: PreviewProject[];
  compact?: boolean;
}) {
  return (
    <ul className={compact ? "mt-4 border-t border-border" : "mt-4 border-t border-border"}>
      {items.map((project, index) => (
        <ProjectCard key={project.id} index={index} compact={compact} {...project} />
      ))}
    </ul>
  );
}

export function ProjectGroup({
  label,
  items,
  compact = false,
}: {
  label: string;
  items: PreviewProject[];
  compact?: boolean;
}) {
  if (items.length === 0) return null;

  return (
    <div>
      <h3 className="t-label">{label}</h3>
      <ProjectPreview items={items} compact={compact} />
    </div>
  );
}

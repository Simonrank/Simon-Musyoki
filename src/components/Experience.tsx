import {
  experience,
  independentProjects,
  projectsForCompany,
} from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";
import RoleHighlights from "./experience-role";
import ProjectPreview, { type PreviewProject } from "@/components/project-preview";

function toPreview(
  project: { id: string; title: string; tag: string; image?: string },
): PreviewProject {
  return {
    id: project.id,
    title: project.title,
    tag: project.tag,
    image: project.image,
  };
}

export default function Experience() {
  const [current, ...earlier] = experience;
  const roleProjects = current
    ? projectsForCompany(current.company).map(toPreview)
    : [];
  const other = independentProjects().map(toPreview);

  return (
    <SectionShell id="experience">
      <SectionHeading eyebrow="Career" title="Experience" />

      <ol className="mt-10 border-t border-border">
        {current ? (
          <RoleEntry role={current} projects={roleProjects} />
        ) : null}

        {other.length > 0 ? (
          <li className="border-b border-border py-7" id="projects" data-reveal>
            <h3 className="t-h3 text-[1.375rem] text-foreground">Other important</h3>
            <p className="t-small mt-1">Independent products and collaborations.</p>
            <ProjectPreview items={other} compact />
          </li>
        ) : null}

        {earlier.map((role) => (
          <RoleEntry key={`${role.company}-${role.title}`} role={role} />
        ))}
      </ol>
    </SectionShell>
  );
}

function RoleEntry({
  role,
  projects = [],
}: {
  role: (typeof experience)[number];
  projects?: PreviewProject[];
}) {
  return (
    <li className="relative border-b border-border py-7 pl-6" data-reveal>
      <span
        className={`absolute top-[0.45rem] left-0 h-[7px] w-[7px] rounded-full ${
          role.current ? "bg-accent" : "bg-border-strong"
        }`}
        aria-hidden
      />
      <span className="absolute top-4 bottom-0 left-[3px] w-px bg-border" aria-hidden />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3
          className={
            role.current
              ? "t-h3 text-[1.375rem] text-foreground"
              : "text-[1.0625rem] font-medium tracking-tight text-foreground"
          }
        >
          {role.title}
        </h3>
        <p className="t-meta text-faint">{role.period}</p>
      </div>

      <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted">
        <span className="text-foreground">{role.company}</span>
        <span className="text-border-strong" aria-hidden>
          /
        </span>
        <span>{role.location}</span>
        {role.current ? <span className="chip chip-accent ml-1">Current</span> : null}
      </p>

      {"summary" in role && role.summary ? (
        <p className="t-small mt-3 max-w-3xl">{role.summary}</p>
      ) : null}

      {projects.length > 0 ? (
        <div className="mt-5">
          <p className="t-label">Selected work</p>
          <ProjectPreview items={projects} compact />
        </div>
      ) : null}

      <RoleHighlights highlights={role.highlights} />

      {"focus" in role && role.focus ? (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {role.focus.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

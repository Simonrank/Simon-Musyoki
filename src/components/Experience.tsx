import { education, experience } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";
import RoleHighlights from "./experience-role";

export default function Experience() {
  const credentials = education.filter(
    (item) => item.kind === "degree" || item.kind === "program",
  );
  const certificates = education.filter((item) => item.kind === "certificate");

  return (
    <SectionShell id="experience">
      <SectionHeading
        eyebrow="Career"
        title="Experience & Education"
        accentWord="Education"
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-16">
        <ol>
          {experience.map((role) => (
            <li
              key={`${role.company}-${role.title}`}
              className="relative pb-10 pl-6 last:pb-0"
              data-reveal
            >
              <span
                className={`absolute top-[0.45rem] left-0 h-[7px] w-[7px] rounded-full ${
                  role.current ? "bg-accent" : "bg-border-strong"
                }`}
                aria-hidden
              />
              <span
                className="absolute top-4 bottom-0 left-[3px] w-px bg-border"
                aria-hidden
              />

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
                {role.current ? (
                  <span className="chip chip-accent ml-1">Current</span>
                ) : null}
              </p>

              {"summary" in role && role.summary ? (
                <p className="t-small mt-3 max-w-2xl text-[0.9375rem]">{role.summary}</p>
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
          ))}
        </ol>

        <aside className="lg:sticky lg:top-24" data-reveal>
          <h3 className="t-label">Education</h3>
          <ul className="mt-4 border-t border-border">
            {credentials.map((item) => (
              <li key={item.institution} className="border-b border-border py-4">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-medium text-foreground">{item.institution}</p>
                  <p className="t-meta shrink-0 text-faint">{item.period}</p>
                </div>
                <p className="t-small mt-1">{item.detail}</p>
              </li>
            ))}
          </ul>

          {certificates.length > 0 ? (
            <div className="mt-6">
              <h3 className="t-label">Certification</h3>
              <ul className="mt-3 space-y-1.5">
                {certificates.map((item) => (
                  <li key={item.institution} className="t-small">
                    <span className="text-foreground">{item.institution}</span> · {item.detail}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>
    </SectionShell>
  );
}

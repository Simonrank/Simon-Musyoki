import { education, experience } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export default function Experience() {
  const credentials = education.filter(
    (item) => item.kind === "degree" || item.kind === "program",
  );
  const certificates = education.filter((item) => item.kind === "certificate");

  return (
    <SectionShell id="experience">
      <SectionHeading
        align="center"
        eyebrow="Career journey"
        title="Experience & Education"
        accentWord="Education"
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_18.5rem] lg:items-start lg:gap-16">
        <ol>
          {experience.map((role, index) => (
            <li
              key={`${role.company}-${role.title}`}
              className={`relative pl-6 ${index === 0 ? "pt-0" : "pt-10"}`}
            >
              <span
                className="absolute top-2 left-0 h-2.5 w-2.5 rounded-full bg-accent"
                aria-hidden
              />
              {index < experience.length - 1 ? (
                <span
                  className="absolute top-5 bottom-0 left-[4.5px] w-px bg-border"
                  aria-hidden
                />
              ) : null}

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3
                  className={
                    role.current
                      ? "font-display text-2xl font-medium tracking-tight text-foreground"
                      : "text-[1.05rem] font-semibold tracking-tight text-foreground"
                  }
                >
                  {role.title}
                </h3>
                <p className="font-mono text-xs tracking-[0.04em] text-muted">{role.period}</p>
              </div>
              <p className="mt-1 text-sm text-muted">
                {role.company}
                <span className="text-muted/50"> · </span>
                {role.location}
              </p>
              {"focus" in role && role.focus ? (
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                  {role.focus.join("  ·  ")}
                </p>
              ) : null}
              <ul className="mt-4 max-w-2xl space-y-1.5">
                {role.highlights.map((item) => (
                  <li key={item} className="text-sm leading-7 text-foreground">
                    <span className="mr-2 text-muted">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <aside className="border border-border bg-card p-6 shadow-[0_18px_40px_-28px_rgba(26,25,22,0.35)] lg:sticky lg:top-24">
          <p className="eyebrow eyebrow-plain">Education</p>
          <ul className="mt-5 space-y-5">
            {credentials.map((item) => (
              <li key={item.institution}>
                <p className="font-semibold text-foreground">{item.institution}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
                <p className="mt-1 font-mono text-xs tracking-[0.04em] text-muted">{item.period}</p>
              </li>
            ))}
          </ul>
          {certificates.length > 0 ? (
            <p className="mt-6 border-t border-border pt-4 text-sm leading-6 text-muted">
              {certificates.map((item) => item.institution).join(" · ")}
            </p>
          ) : null}
        </aside>
      </div>
    </SectionShell>
  );
}

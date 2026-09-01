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
        eyebrow="Experience"
        title="Controltech, and the work that trained the seat"
        lead="One production role. Earlier fieldwork is how I learned to collect clean data and brief people who have to act on it."
      />

      <ol className="mt-10">
        {experience.map((role, index) => (
          <li
            key={`${role.company}-${role.title}`}
            className={`grid gap-1 py-8 md:grid-cols-[minmax(0,1fr)_9rem] md:items-start md:gap-10 ${
              index === 0 ? "border-t border-border" : "border-t border-border/70"
            }`}
          >
            <div>
              <h3
                className={
                  role.current
                    ? "font-display text-2xl font-medium tracking-tight text-foreground"
                    : "text-[1.05rem] font-semibold tracking-tight text-foreground"
                }
              >
                {role.title}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {role.company}
                <span className="text-muted/50"> · </span>
                {role.location}
              </p>
              {role.current ? (
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted">{role.summary}</p>
              ) : null}
              <ul className="mt-4 max-w-2xl space-y-1.5">
                {role.highlights.map((item) => (
                  <li key={item} className="text-sm leading-7 text-foreground">
                    <span className="mr-2 text-muted">–</span>
                    {item}
                  </li>
                ))}
              </ul>
              {"focus" in role && role.focus ? (
                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
                  {role.focus.join("  ·  ")}
                </p>
              ) : null}
            </div>
            <p className="font-mono text-xs tracking-[0.04em] text-muted md:pt-2 md:text-right">
              {role.period}
            </p>
          </li>
        ))}
      </ol>

      <div className="border-t border-border pt-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Education</p>
        <ul className="mt-5">
          {credentials.map((item) => (
            <li
              key={item.institution}
              className="grid gap-1 py-4 first:pt-0 md:grid-cols-[minmax(0,1fr)_9rem] md:gap-10"
            >
              <div>
                <p className="font-semibold text-foreground">{item.institution}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
              </div>
              <p className="font-mono text-xs tracking-[0.04em] text-muted md:pt-1 md:text-right">
                {item.period}
              </p>
            </li>
          ))}
        </ul>
        {certificates.length > 0 ? (
          <p className="mt-2 text-sm text-muted">
            {certificates.map((item) => item.institution).join(" · ")}
          </p>
        ) : null}
      </div>
    </SectionShell>
  );
}

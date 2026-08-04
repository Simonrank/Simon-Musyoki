import { education, experience } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export default function Experience() {
  return (
    <SectionShell
      id="experience"
      className="bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_50%)]"
    >
      <SectionHeading
        eyebrow="Professional Experience"
        title="A full career path — from field analytics to production AI systems"
        lead="Controltech is the centerpiece of my current work. Every earlier role remains part of the story: survey design, field quality, dashboards, and stakeholder communication that still shape how I ship systems today."
      />

      <ol className="relative mt-14 space-y-0">
        <div
          aria-hidden="true"
          className="absolute top-3 bottom-3 left-[11px] w-px bg-gradient-to-b from-secondary via-accent/50 to-transparent md:left-[15px]"
        />

        {experience.map((role) => (
          <li key={`${role.company}-${role.title}`} className="relative pb-10 last:pb-0">
            <div className="grid gap-5 md:grid-cols-[2.2rem_1fr] md:gap-6">
              <div className="relative z-10 flex justify-start pt-2">
                <span
                  className={`mt-1 h-6 w-6 rounded-full border-2 ${
                    role.current
                      ? "border-secondary bg-accent shadow-[0_0_0_6px_rgba(37,99,235,0.18)]"
                      : "border-border bg-card"
                  }`}
                />
              </div>

              <article
                className={`overflow-hidden rounded-3xl border transition ${
                  role.current
                    ? "border-accent/40 bg-gradient-to-br from-card via-card to-[#0f1c38] shadow-[0_20px_60px_rgba(37,99,235,0.12)]"
                    : "border-border bg-card/90 hover:border-white/15"
                }`}
              >
                <div className="border-b border-border px-5 py-5 sm:px-7 sm:py-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-mono text-[0.68rem] tracking-[0.14em] text-secondary uppercase">
                          {role.period}
                        </p>
                        {role.current ? (
                          <span className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[0.65rem] tracking-wide text-blue-200 uppercase">
                            Current
                          </span>
                        ) : null}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-base text-secondary">{role.company}</p>
                      <p className="mt-1 text-sm text-muted">{role.location}</p>
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-[0.98rem] leading-7 text-muted">
                    {role.summary}
                  </p>
                </div>

                <ul className="grid gap-0 sm:grid-cols-2">
                  {role.highlights.map((item) => (
                    <li
                      key={item}
                      className="border-t border-border px-5 py-4 text-sm leading-7 text-muted sm:odd:border-r sm:px-7"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">Education</h3>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
          Formal foundations in applied statistics and advanced data science that underpin the
          systems work above.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {education.map((item) => (
            <li
              key={item.institution}
              className="rounded-2xl border border-border bg-card/80 px-5 py-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-foreground">{item.institution}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
                </div>
                <span className="shrink-0 font-mono text-[0.65rem] tracking-[0.12em] text-secondary uppercase">
                  {item.period}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

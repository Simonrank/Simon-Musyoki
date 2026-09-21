import { about, education, expertise, techStack } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

function renderWithBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function About() {
  const credentials = education.filter(
    (item) => item.kind === "degree" || item.kind === "program",
  );
  const certificates = education.filter((item) => item.kind === "certificate");

  return (
    <SectionShell id="about">
      <SectionHeading eyebrow="About" title={about.title} />

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:items-start xl:gap-24">
        <div data-reveal>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="t-lead max-w-2xl">
              {renderWithBold(paragraph)}
            </p>
          ))}
          <p className="mt-6 max-w-xl border-l border-accent pl-5 font-display text-xl leading-snug tracking-tight text-foreground italic">
            {about.tagline}
          </p>
        </div>

        <aside data-reveal>
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

      <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4" data-reveal>
        {expertise.map((item) => (
          <li
            key={item.title}
            className="border-t border-border py-5 pr-8 text-[0.975rem] text-foreground"
          >
            {item.title}
          </li>
        ))}
      </ul>

      <div className="mt-12" data-reveal>
        <h3 className="t-label">Toolkit</h3>
        <div className="mt-5 grid gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
          {techStack.map((group) => (
            <div key={group.category}>
              <h4 className="t-meta font-medium text-foreground">{group.category}</h4>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

import { about, expertise, techStack } from "@/data/portfolio";
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
  return (
    <SectionShell id="about">
      <SectionHeading eyebrow="About" title={about.title} />

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div data-reveal>
          <div className="max-w-2xl space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="t-body text-[1.0625rem]">
                {renderWithBold(paragraph)}
              </p>
            ))}
          </div>

          <p className="mt-8 max-w-2xl border-l border-accent pl-5 font-display text-xl leading-snug tracking-tight text-foreground italic">
            {about.tagline}
          </p>
        </div>

        <div data-reveal>
          <h3 className="t-label">Focus</h3>
          <ul className="mt-4 border-t border-border">
            {expertise.map((item) => (
              <li
                key={item.title}
                className="border-b border-border py-2.5 text-[0.9375rem] text-foreground"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 border-t border-border pt-10" data-reveal>
        <h3 className="t-label">Toolkit</h3>
        <div className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group) => (
            <div key={group.category}>
              <h4 className="t-meta font-medium text-foreground">{group.category}</h4>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="t-small">
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

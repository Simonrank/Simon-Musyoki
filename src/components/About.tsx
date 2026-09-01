import { about } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

const pillars = [
  { label: "Build", value: "Production web apps, dashboards, and data products." },
  { label: "Analyze", value: "Statistics, ML, and BI that inform real decisions." },
  { label: "Automate", value: "Reporting pipelines and systems that reduce manual work." },
  { label: "Solve", value: "Operational problems across fleet, HR, and business systems." },
] as const;

function renderWithBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-foreground">
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
      <SectionHeading eyebrow={about.label} title={about.title} />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-[1.02rem] leading-8 text-muted"
            >
              {renderWithBold(paragraph)}
            </p>
          ))}

          <p className="border-t border-border pt-5 text-[1.02rem] font-semibold leading-8 text-foreground">
            {about.tagline}
          </p>
        </div>

        <aside className="border border-border bg-card">
          {pillars.map((item, index) => (
            <div
              key={item.label}
              className={`px-5 py-4 ${index < pillars.length - 1 ? "border-b border-border" : ""}`}
            >
              <p className="font-mono text-[0.65rem] tracking-[0.16em] text-accent uppercase">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-7 text-foreground/90">{item.value}</p>
            </div>
          ))}
        </aside>
      </div>
    </SectionShell>
  );
}

import { LayoutDashboard, LineChart, Puzzle, Workflow } from "lucide-react";
import Link from "next/link";
import { about } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

const pillars = [
  {
    label: "Build",
    value: "Production web apps, dashboards, and data products.",
    icon: LayoutDashboard,
  },
  {
    label: "Analyze",
    value: "Statistics, ML, and BI that inform real decisions.",
    icon: LineChart,
  },
  {
    label: "Automate",
    value: "Reporting pipelines and systems that reduce manual work.",
    icon: Workflow,
  },
  {
    label: "Solve",
    value: "Operational problems across fleet, HR, and business systems.",
    icon: Puzzle,
  },
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

      <div className="mt-8 max-w-2xl space-y-5">
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

      <ul className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {pillars.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="practice-frame">
              <Icon className="h-8 w-8 text-accent" strokeWidth={1.6} aria-hidden />
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">{item.value}</p>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 flex justify-center">
        <Link href="/projects" className="btn btn-primary">
          View projects
        </Link>
      </div>
    </SectionShell>
  );
}

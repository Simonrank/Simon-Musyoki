import { researchBlurb, researchInterests } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export default function Research() {
  return (
    <SectionShell id="research">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
        <SectionHeading
          eyebrow="Research Interests"
          title="Questions I keep building around"
          lead={researchBlurb}
        />

        <ul className="flex flex-wrap gap-3 lg:pt-16">
          {researchInterests.map((topic) => (
            <li
              key={topic}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

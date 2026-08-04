import { about } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export default function About() {
  return (
    <SectionShell id="about">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <SectionHeading eyebrow={about.label} title={about.title} />

        <div className="space-y-6 lg:pt-10">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-[1.05rem] leading-8 text-muted">
              {paragraph}
            </p>
          ))}

          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            {[
              { label: "Focus", value: "Production AI & Analytics" },
              { label: "Domain", value: "Fleet · Ops · Enterprise AI" },
              { label: "Strength", value: "Decision systems end-to-end" },
              { label: "Approach", value: "Statistics + software delivery" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-gradient-to-br from-card to-card-elevated px-4 py-4"
              >
                <p className="font-mono text-[0.68rem] tracking-[0.14em] text-secondary uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

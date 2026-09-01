import { businessImpact } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export default function BusinessImpact() {
  return (
    <SectionShell id="impact">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <SectionHeading
          eyebrow="Impact"
          title="What changes when the system ships"
          lead="Value is not a model score. It is time saved, risk reduced, and decisions that no longer depend on spreadsheet archaeology."
        />

        <ol className="space-y-0">
          {businessImpact.map((item) => (
            <li
              key={item.title}
              className="border-t border-border py-4 last:border-b"
            >
              <div>
                <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

import { techStack } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export default function TechStack() {
  return (
    <SectionShell id="stack" className="bg-[linear-gradient(180deg,transparent,rgba(17,24,39,0.45),transparent)]">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools chosen for production delivery"
        lead="A pragmatic stack for analytics products — from notebooks and models to secure multi-role web systems."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {techStack.map((group) => (
          <div key={group.category} className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-mono text-xs tracking-[0.14em] text-secondary uppercase">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-background/40 px-3 py-1.5 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

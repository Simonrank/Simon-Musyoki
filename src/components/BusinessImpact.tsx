import { businessImpact } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export default function BusinessImpact() {
  return (
    <SectionShell id="impact">
      <SectionHeading
        eyebrow="Business Impact"
        title="How the work creates measurable value"
        lead="Every system is framed around a business outcome — less loss, faster decisions, fewer interruptions, stronger auditability."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {businessImpact.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-card p-6 transition hover:border-secondary/30"
          >
            <div className="mb-5 h-px w-10 bg-secondary" />
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.detail}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

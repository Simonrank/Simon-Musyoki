import { expertise } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export default function Expertise() {
  return (
    <SectionShell id="expertise">
      <SectionHeading
        eyebrow="Expertise"
        title="Where statistics, AI, and product engineering meet"
        lead="A senior practice spanning model thinking, enterprise software, and systems that have to work under operational pressure."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {expertise.map((item, index) => (
          <article
            key={item.title}
            className="group rounded-2xl border border-border bg-card p-5 transition hover:border-accent/40"
          >
            <p className="font-mono text-[0.68rem] tracking-[0.14em] text-secondary uppercase">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.detail}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

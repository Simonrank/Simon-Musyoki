import { expertise } from "@/data/portfolio";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

export default function Expertise() {
  return (
    <SectionShell id="expertise">
      <SectionHeading
        eyebrow="Expertise"
        title="A practice built at the intersection of models and systems"
        lead="Eight capabilities I use together — not as a checklist of buzzwords, but as one delivery loop from signal to shipped product."
      />

      <ol className="mt-8 divide-y divide-border border-y border-border">
        {expertise.map((item) => (
          <li
            key={item.title}
            className="grid gap-2 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:py-5"
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="text-[0.98rem] leading-7 text-muted sm:max-w-2xl">{item.detail}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}

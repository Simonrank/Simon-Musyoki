import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  accentWord?: string;
  lead?: string;
  align?: "left" | "center";
};

function TitleWithAccent({ title, accentWord }: { title: string; accentWord?: string }) {
  if (!accentWord || !title.includes(accentWord)) {
    return title;
  }

  const index = title.lastIndexOf(accentWord);

  return (
    <>
      {title.slice(0, index)}
      <span className="text-accent">{accentWord}</span>
      {title.slice(index + accentWord.length)}
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accentWord,
  lead,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${centered ? "eyebrow-plain justify-center" : ""}`}>{eyebrow}</p>
      <h2 className={`section-title ${centered ? "section-title-display" : ""}`}>
        <TitleWithAccent title={title} accentWord={accentWord} />
      </h2>
      {lead ? (
        <p className={`section-lead ${centered ? "mx-auto" : ""}`}>{lead}</p>
      ) : null}
    </div>
  );
}

export function SectionShell({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section border-t border-border ${className}`}>
      <div className="container-site">{children}</div>
    </section>
  );
}

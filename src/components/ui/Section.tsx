import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  accentWord?: string;
  lead?: string;
  /** Right-aligned slot on desktop — a link or button that belongs to the section. */
  action?: ReactNode;
};

function TitleWithAccent({ title, accentWord }: { title: string; accentWord?: string }) {
  if (!accentWord || !title.includes(accentWord)) return title;

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
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">
          <TitleWithAccent title={title} accentWord={accentWord} />
        </h2>
        {lead ? <p className="section-lead">{lead}</p> : null}
      </div>
      {action ? <div className="shrink-0 sm:pb-1">{action}</div> : null}
    </div>
  );
}

export function SectionShell({
  id,
  children,
  className = "",
  bordered = true,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`section ${bordered ? "border-t border-border" : ""} ${className}`}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

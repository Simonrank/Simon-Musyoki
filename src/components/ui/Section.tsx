import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
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

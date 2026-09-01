"use client";

import { useEffect, useId, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function MermaidDiagram({ definition }: { definition: string }) {
  const reactId = useId().replace(/:/g, "");
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "120px" });
  const [svg, setSvg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;

    async function renderDiagram() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "base",
          themeVariables: {
            primaryColor: "#f7f4ee",
            primaryTextColor: "#1a1916",
            primaryBorderColor: "#0e7a66",
            lineColor: "#0e7a66",
            secondaryColor: "#ffffff",
            tertiaryColor: "#f7f4ee",
            background: "#ffffff",
            mainBkg: "#f7f4ee",
            nodeBorder: "#0e7a66",
            clusterBkg: "#ffffff",
            titleColor: "#1a1916",
            fontFamily: "IBM Plex Sans, sans-serif",
          },
        });
        const id = `architecture-${reactId}`;
        const { svg: rendered } = await mermaid.render(id, definition);
        if (!cancelled) {
          setSvg(rendered);
          setError("");
        }
      } catch {
        if (!cancelled) {
          setError("Architecture diagram could not be rendered.");
        }
      }
    }

    void renderDiagram();
    return () => {
      cancelled = true;
    };
  }, [definition, reactId, inView]);

  if (error) {
    return (
      <p ref={ref} className="text-sm text-muted">
        {error}
      </p>
    );
  }

  if (!svg) {
    return (
      <p ref={ref} className="text-sm text-muted">
        {inView ? "Rendering architecture…" : "Architecture diagram loads when you scroll here."}
      </p>
    );
  }

  return (
    <div
      ref={ref}
      className="overflow-x-auto [&_svg]:mx-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

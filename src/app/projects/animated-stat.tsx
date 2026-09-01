"use client";

import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

function parseNumeric(value: string) {
  const match = value.replace(/,/g, "").match(/-?\d+(\.\d+)?/);
  return match ? Number(match[0]) : null;
}

export default function AnimatedStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const numeric = useMemo(() => parseNumeric(value), [value]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [display, setDisplay] = useState(numeric === null ? value : "0");

  useEffect(() => {
    if (!inView) return;
    if (numeric === null) {
      setDisplay(value);
      return;
    }

    const suffix = value.replace(/^-?\d[\d,]*(?:\.\d+)?/, "");
    const duration = 700;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.round(numeric * eased);
      setDisplay(`${current.toLocaleString()}${suffix}`);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, value]);

  return (
    <div ref={ref} className="border border-border bg-background/60 p-4">
      <p className="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
        {label}
      </p>
      <p className="mt-2 font-display text-2xl font-medium tracking-tight text-foreground">
        {display}
      </p>
    </div>
  );
}

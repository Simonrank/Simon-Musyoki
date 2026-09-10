"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

const COLLAPSED = 3;

export default function RoleHighlights({ highlights }: { highlights: readonly string[] }) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const hidden = highlights.length - COLLAPSED;
  const visible = open ? highlights : highlights.slice(0, COLLAPSED);

  return (
    <>
      <ul id={listId} className="mt-4 max-w-2xl space-y-2.5">
        {visible.map((item) => (
          <li key={item} className="relative pl-4 text-[0.9375rem] leading-7 text-muted">
            <span
              className="absolute top-[0.85em] left-0 h-px w-2 bg-border-strong"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>

      {hidden > 0 ? (
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={listId}
          className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.6875rem] tracking-[0.12em] text-muted uppercase transition-colors hover:text-accent-deep"
        >
          {open ? "Show less" : `${hidden} more`}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      ) : null}
    </>
  );
}

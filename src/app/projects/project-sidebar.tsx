"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { projects } from "@/data/portfolio";
import {
  enrichProjects,
  groupByCategory,
  matchesQuery,
  type EnrichedProject,
} from "./lib/enrich";

const enriched = enrichProjects(projects);

export default function ProjectSidebar() {
  const params = useParams<{ slug?: string }>();
  const router = useRouter();
  const activeSlug = params.slug ?? enriched[0]?.id;
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!query.trim()) return enriched;
    return enriched.filter((project) => matchesQuery(project, query));
  }, [query]);

  const groups = useMemo(() => groupByCategory(filtered), [filtered]);
  const flat = useMemo(() => groups.flatMap((group) => group.items), [groups]);

  useEffect(() => {
    setOpen(false);
  }, [activeSlug]);

  function selectProject(project: EnrichedProject) {
    router.push(`/projects/${project.id}`);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (!["ArrowDown", "ArrowUp", "Enter"].includes(event.key)) return;
    event.preventDefault();

    const currentIndex = flat.findIndex((project) => project.id === activeSlug);
    if (event.key === "Enter") {
      const current = flat[currentIndex] ?? flat[0];
      if (current) selectProject(current);
      return;
    }

    if (flat.length === 0) return;
    const delta = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (currentIndex + delta + flat.length) % flat.length;
    selectProject(flat[nextIndex]);
  }

  function ListContents() {
    return (
      <>
      <div className="border-b border-border p-4">
        <p className="font-mono text-[0.68rem] tracking-[0.14em] text-foreground uppercase">
          Projects
        </p>
        <label className="relative mt-3 block">
          <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter by title or description"
            className="w-full border border-border bg-background/70 py-2 pr-3 pl-9 text-sm text-foreground outline-none transition-all duration-300 ease-in-out placeholder:text-muted/70 focus:border-accent"
          />
        </label>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        {groups.length === 0 ? (
          <p className="px-2 py-6 text-sm text-muted">No projects match that filter.</p>
        ) : (
          groups.map((group) => (
            <section key={group.category} className="mb-5">
              <h2 className="px-2 font-mono text-[0.68rem] tracking-[0.12em] text-muted uppercase">
                {group.icon} {group.label}
              </h2>
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06 } },
                }}
                className="mt-2 space-y-1"
              >
                {group.items.map((project) => {
                  const active = project.id === activeSlug;
                  return (
                    <motion.li
                      key={project.id}
                      variants={{
                        hidden: { opacity: 0, x: -8 },
                        show: { opacity: 1, x: 0 },
                      }}
                    >
                      <Link
                        href={`/projects/${project.id}`}
                        aria-current={active ? "page" : undefined}
                        className={`block border-l-2 px-3 py-2.5 transition-all duration-300 ease-in-out ${
                          active
                            ? "border-accent bg-accent-soft"
                            : "border-transparent hover:border-border hover:bg-background/50"
                        }`}
                      >
                        <p className="text-sm font-semibold text-foreground">{project.title}</p>
                        <p className="mt-0.5 line-clamp-2 text-xs leading-5 text-muted">
                          {project.subtitle ?? project.tag}
                        </p>
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </section>
          ))
        )}
      </div>
    </>
    );
  }

  return (
    <>
      <div className="fixed top-[84px] left-4 z-[90] md:hidden">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-border bg-background/80 backdrop-blur-md"
          aria-label={open ? "Close project list" : "Open project list"}
          aria-expanded={open}
          aria-controls="project-sidebar"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <aside
        id="project-sidebar"
        role="navigation"
        aria-label="Project list"
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="hidden h-full w-[30%] shrink-0 flex-col border-r border-border bg-card outline-none md:flex"
      >
        <ListContents />
      </aside>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[95] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-foreground/30"
              aria-label="Close project list"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -24, opacity: 0 }}
              transition={{ duration: 0.25 }}
              tabIndex={0}
              onKeyDown={onKeyDown}
              className="relative flex h-full w-[min(88vw,22rem)] flex-col border-r border-border bg-card outline-none"
            >
              <ListContents />
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

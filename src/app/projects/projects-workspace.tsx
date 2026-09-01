"use client";

import type { ReactNode } from "react";
import ProjectSidebar from "./project-sidebar";

export default function ProjectsWorkspace({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[calc(100vh-72px)]">
      <ProjectSidebar />
      <section className="min-w-0 flex-1 overflow-y-auto md:w-[70%]">{children}</section>
    </div>
  );
}

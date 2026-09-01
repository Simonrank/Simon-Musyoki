import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectsWorkspace from "./projects-workspace";

export const metadata: Metadata = {
  title: "Projects — Simon Musyoki",
  description:
    "Interactive case studies across performance, architecture, UI/UX, and DevOps — fleet intelligence, AI systems, and operational platforms.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-[72px]">
        <ProjectsWorkspace>{children}</ProjectsWorkspace>
      </main>
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects — Simon Musyoki",
  description:
    "Case studies in fleet intelligence, AI systems, and operational products.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-[72px]">
        {children}
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies in fleet intelligence, demand pricing, enterprise AI, and operations products by Simon Musyoki.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

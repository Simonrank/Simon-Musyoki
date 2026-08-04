import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import BusinessImpact from "@/components/BusinessImpact";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import GitHubSection from "@/components/GitHub";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main-content">
        <Projects />
        <About />
        <Experience />
        <Expertise />
        <TechStack />
        <BusinessImpact />
        <Research />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ParticleSwarm from "@/components/ParticleSwarm";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main-content">
        <About />
        <Projects />
        <Experience />
        <ParticleSwarm />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

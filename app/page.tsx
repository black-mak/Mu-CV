import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import SealCTA from "@/components/SealCTA";
import Contact from "@/components/Contact";

// Visual hierarchy: Identity expertise → Design experience → Proof →
// Credentials → Secondary background. Skills lead because the client
// hires the identity craft first; the résumé data supports it.
export default function Page() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <Skills />
      <Experience />
      <Credentials />
      <SealCTA />
      <Contact />
    </>
  );
}

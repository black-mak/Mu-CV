import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import WorkTeaser from "@/components/WorkTeaser";
import Skills from "@/components/Skills";
import IllustratorTool from "@/components/IllustratorTool";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import SealCTA from "@/components/SealCTA";
import Contact from "@/components/Contact";

// Visual hierarchy: Identity expertise → Proof in Marks → Skills →
// Proprietary Tooling & Automation R&D → Experience → Credentials → Studio Seal → Contact.
export default function Page() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <WorkTeaser />
      <Skills />
      <IllustratorTool />
      <Experience />
      <Credentials />
      <SealCTA />
      <Contact />
    </>
  );
}

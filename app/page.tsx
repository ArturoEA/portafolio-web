import About from "@/components/About";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const bubbleColors = {
  first: "16,185,129",
  second: "0,0,0",
  third: "34,197,94",
  fourth: "2,44,34",
  fifth: "4,120,87",
  sixth: "15,23,42",
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BubbleBackground
        interactive
        colors={bubbleColors}
        className="fixed inset-0 -z-10 size-full bg-zinc-950"
      />
      <div className="relative z-10">
        <Navbar />
        <main className="bg-transparent">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
      </div>
    </div>
  );
}

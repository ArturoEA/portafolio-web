import About from "@/components/About";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { getDictionary, Locale } from "@/lib/dictionaries";

const bubbleColors = {
  first: "4,120,87",
  second: "0,0,0",
  third: "21,128,61",
  fourth: "2,44,34",
  fifth: "4,120,87",
  sixth: "4,120,87",
};

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="relative min-h-screen">
      <BubbleBackground
        interactive
        colors={bubbleColors}
        className="fixed inset-0 z-0 size-full bg-transparent"
      />
      <div className="relative z-10">
        <Navbar lang={lang} dict={{ links: dict.nav, contact: dict.hero.contact }} />
        <main className="bg-transparent">
          <Hero dict={dict.hero} siteConfig={dict.siteConfig} />
          <About dict={dict.about} />
          <Skills dict={dict.skills} />
          <Projects dict={dict.projects} />
          <Certifications dict={dict.certifications} />
          <Contact dict={dict.contact} />
        </main>
      </div>
    </div>
  );
}

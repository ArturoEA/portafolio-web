import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { aboutContent } from "@/lib/data";

export default function About() {
  return (
    <AnimatedSection
      id="sobre-mi"
      className="border-t border-zinc-800/60 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[85vw]">
        <SectionHeading
          label="Sobre mí"
          title="Ingeniería con visión de negocio"
        />
        <p className="max-w-4xl text-base leading-relaxed text-zinc-100 sm:text-lg 2xl:text-xl 2xl:max-w-5xl 2xl:leading-loose">
          {aboutContent.description}
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.softSkills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 transition-colors hover:border-emerald-500/30 hover:bg-zinc-900"
            >
              <p className="text-sm font-medium text-zinc-200">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

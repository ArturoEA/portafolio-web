import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import type { Dictionary } from "@/lib/dictionaries";

export default function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <AnimatedSection
      id="sobre-mi"
      className="border-t border-zinc-800/60 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[85vw]">
        <SectionHeading
          label={dict.label}
          title={dict.title}
        />
        <p className="max-w-4xl text-base leading-relaxed text-zinc-100 sm:text-lg 2xl:text-xl 2xl:max-w-5xl 2xl:leading-loose">
          {dict.description}
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.softSkills.map((skill) => (
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

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import type { Dictionary } from "@/lib/dictionaries";

export default function Certifications({ dict }: { dict: Dictionary["certifications"] }) {
  return (
    <AnimatedSection
      id="certificaciones"
      className="border-t border-zinc-800/60 px-6 py-24"
      delay={0.1}
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[85vw]">
        <SectionHeading
          label={dict.label}
          title={dict.title}
          description={dict.description}
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((cert) => (
            <li
              key={cert.title}
              className="flex flex-col justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-emerald-500/20 hover:bg-zinc-900/70"
            >
              <span className="text-base font-semibold text-zinc-200">
                {cert.title}
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-zinc-400">
                  {cert.issuer}
                </span>
                {cert.status && (
                  <span className="w-fit rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                    {cert.status}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

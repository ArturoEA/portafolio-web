import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <AnimatedSection
      id="certificaciones"
      className="border-t border-zinc-800/60 px-6 py-24"
      delay={0.1}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Formación continua"
          title="Certificaciones y cursos"
          description="Actualización constante en tecnologías web, redes, seguridad e inteligencia artificial."
        />
        <ul className="space-y-3">
          {certifications.map((cert) => (
            <li
              key={cert.title}
              className="flex flex-col gap-1 rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 transition-colors hover:border-emerald-500/20 hover:bg-zinc-900/70 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <span className="text-sm font-medium text-zinc-200">
                {cert.title}
              </span>
              <span className="shrink-0 text-sm text-zinc-500">
                {cert.issuer}
                {cert.status && (
                  <span className="ml-2 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                    {cert.status}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

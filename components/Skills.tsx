"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/lib/data";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="border-t border-zinc-800/60 px-6 py-24"
      delay={0.1}
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[85vw]">
        <SectionHeading
          label="Stack tecnológico"
          title="Herramientas y tecnologías"
          description="Stack moderno para construir productos escalables, desde la interfaz hasta la infraestructura."
        />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: index * 0.2 }}
              className="rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-700 hover:text-slate-100 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import PremiumMaquirentMedia from "./PremiumMaquirentMedia";
import type { Dictionary } from "@/lib/dictionaries";

export default function Projects({ dict }: { dict: Dictionary["projects"] }) {
  return (
    <AnimatedSection
      id="proyectos"
      className="border-t border-zinc-800/60 px-6 py-24"
      delay={0.1}
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[85vw]">
        <SectionHeading
          label={dict.label}
          title={dict.title}
          description={dict.description}
        />
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {dict.items.map((project, index) => {
            const isMaquirent = project.id === "maquirent";
            
            return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-emerald-500/30 hover:bg-zinc-900/70 ${
                isMaquirent ? "lg:col-span-2 lg:flex-row items-center" : ""
              }`}
            >
              <div className={isMaquirent ? "w-full lg:w-1/2 p-6 lg:p-8 flex items-center justify-center bg-black/20" : "w-full"}>
                {isMaquirent && "videoUrl" in project && project.videoUrl ? (
                  <PremiumMaquirentMedia videoUrl={(project as any).videoUrl} />
                ) : (
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-slate-800 sm:h-56">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>
              <div className={`flex flex-1 flex-col p-6 ${isMaquirent ? "lg:w-1/2 lg:p-12 lg:justify-center" : ""}`}>
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  {project.category}
                </p>
                <h3 className={`mt-3 font-semibold text-zinc-100 ${isMaquirent ? "text-2xl lg:text-3xl" : "text-xl"}`}>
                  {project.title}
                </h3>
                <p className={`mt-4 flex-1 leading-relaxed text-white whitespace-pre-line ${isMaquirent ? "text-sm md:text-base text-zinc-300" : "text-base"}`}>
                  {project.description}
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-emerald-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

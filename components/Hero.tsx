"use client";

import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400"
          >
            Portafolio Profesional
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-xl font-medium text-zinc-300 sm:text-2xl"
          >
            {siteConfig.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
            >
              Contactar
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-8 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
            >
              Ver Proyectos
            </a>
            <a
              href={siteConfig.cvUrl}
              download="Arturo_Esquivel_CV.pdf"
              className="inline-flex items-center justify-center rounded-full border border-emerald-500/40 px-8 py-3 text-sm font-semibold text-emerald-400 transition-colors hover:border-emerald-400 hover:bg-emerald-500/10"
            >
              Descargar CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex shrink-0 justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-64 w-64 overflow-hidden rounded-2xl bg-slate-800 shadow-2xl ring-1 ring-zinc-700/50 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
          >
            <Image
              src={siteConfig.profileImage}
              alt={`Foto de perfil de ${siteConfig.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 256px, 320px"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

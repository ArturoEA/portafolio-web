import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/data";

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <AnimatedSection
      id="contacto"
      className="border-t border-zinc-800/60 px-6 py-24"
      delay={0.1}
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
          Contacto
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          ¿Buscando construir software? Hablemos
        </h2>
        <div className="mt-10 flex flex-col items-center gap-3 text-zinc-400 sm:flex-row sm:justify-center sm:gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-emerald-400"
          >
            {siteConfig.email}
          </a>
          <span className="hidden text-zinc-700 sm:inline">|</span>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="transition-colors hover:text-emerald-400"
          >
            {siteConfig.phone}
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
          >
            <LinkedInIcon />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
          >
            <GitHubIcon />
          </a>
        </div>
        <p className="mt-16 text-xs text-zinc-600">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </AnimatedSection>
  );
}

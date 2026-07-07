"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LanguageToggle from "./LanguageToggle";
import type { Dictionary } from "@/lib/dictionaries";

export default function Navbar({ lang, dict }: { lang: string; dict: { links: Dictionary["nav"], contact: string } }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl 2xl:max-w-[85vw] items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="text-sm font-semibold tracking-tight text-zinc-100 transition-colors hover:text-emerald-400"
        >
          Arturo Esquivel Alvarado
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {dict.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <LanguageToggle lang={lang} />
          <a
            href="#contacto"
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            {dict.contact}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arturo Salvador Esquivel Alvarado | Full Stack Developer",
  description:
    "Desarrollador Full Stack & Ingeniero de Sistemas. Transformo requerimientos complejos en soluciones web y sistemas empresariales eficientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("scroll-smooth dark", inter.variable, "font-sans", geist.variable)}>
      <body className="relative min-h-screen font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}

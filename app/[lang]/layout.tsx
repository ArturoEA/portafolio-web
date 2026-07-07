import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "../globals.css";
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} className={cn("scroll-smooth dark", inter.variable, "font-sans", geist.variable)}>
      <body className="relative min-h-screen font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}

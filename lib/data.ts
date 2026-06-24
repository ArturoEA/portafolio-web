export const siteConfig = {
  name: "Arturo Salvador Esquivel Alvarado",
  title: "Desarrollador Full Stack & Ingeniero de Sistemas",
  tagline:
    "Bachiller en Ingeniería de Sistemas con más de un año de experiencia construyendo soluciones web y aplicaciones nativas. Transformo requerimientos complejos en software empresarial eficiente. Actualmente en preparación para la certificación AWS Solutions Architect.",
  email: "earturosalvador@gmail.com",
  phone: "+51 969 775 015",
  cvUrl: "/ARTURO_ESQUIVEL_ALVARADO_CV.pdf",
  profileImage: "/fotoPerfil.jpeg",
  social: {
    linkedin: "https://www.linkedin.com/in/arturo-salvador-esquivel-alvarado",
    github: "https://github.com/ArturoEA",
  },
};

export const aboutContent = {
  description:
    "Soy un desarrollador orientado a resolver problemas empresariales reales, combinando un sólido perfil técnico con visión de negocio. Durante más de un año, he construido soluciones para industrias exigentes, logrando mejoras medibles en eficiencia operativa y reducción de costos en la nube. Me destaco por mi capacidad autodidacta, mi nivel de inglés B2 que me permite colaborar en entornos internacionales, y un fuerte enfoque en la calidad del producto. Mi objetivo es crear plataformas SaaS escalables que aporten valor directo a la operación del cliente.",
  softSkills: [
    "Liderazgo en toma de requisitos",
    "Resolución de incidencias críticas",
    "Trabajo autónomo",
    "Orientación a resultados",
  ],
};

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Figma (UX/UI)",
  "Node.js",
  "NestJS",
  "PHP (Laravel)",
  "Java",
  "AWS Solutions Architect (En curso)",
  "Firebase",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Git / GitHub",
];

export const projects = [
  {
    id: "maquirent",
    title: "MAQUIRENT",
    category: "SaaS / Gestión Operativa",
    image: "/Collage_MAQUIRENTAPP.jpeg",
    imageAlt: "Captura de la aplicación MAQUIRENT",
    description:
      "Desarrollo integral bajo arquitectura MVVM y Offline-First con Firebase. Digitalización del ciclo de vida de maquinaria pesada, reduciendo el tiempo de generación de documentos en un 70% y optimizando el almacenamiento cloud en un 75%.",
  },
  {
    id: "credifac",
    title: "CREDIFAC",
    category: "Ingeniería de Requisitos y UX/UI",
    image: "/Collage_CREDIFAC.png",
    imageAlt: "Prototipos y diseño UX/UI de CREDIFAC",
    description:
      "Liderazgo en levantamiento de requerimientos con stakeholders internacionales. Documentación de más de 240 historias de usuario y diseño de +100 prototipos de alta fidelidad para plataformas web y móvil.",
  },
  {
    id: "club-el-combe",
    title: "Club El Combe",
    category: "Web Full Stack",
    image: "/Collage_ElCombe.jpeg",
    imageAlt: "Portal web Club El Combe",
    description:
      "Desarrollo end-to-end de portal de gestión usando PHP (Laravel), MySQL y Tailwind. Implementación de módulos dinámicos y automatización de despliegue en servidor Linux.",
  },
];

export const certifications = [
  { title: "React Foundations for Next.js", issuer: "Vercel" },
  {
    title: "CS50's Web Programming with Python and JavaScript",
    issuer: "Harvard University",
    status: "En curso",
  },
  { title: "Linux Essentials", issuer: "Cisco Networking Academy" },
  {
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
  },
  {
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
  },
  {
    title: "Programación Avanzada en C",
    issuer: "Cisco Networking Academy",
  },
  {
    title: "CLA - Programming Essentials in C",
    issuer: "Cisco Networking Academy",
  },
  {
    title: "Introducción a la Ciberseguridad",
    issuer: "Cisco Networking Academy",
  },
  { title: "Fundamentos de IA", issuer: "IBM SkillsBuild" },
];

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Contacto", href: "#contacto" },
];

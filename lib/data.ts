export const siteConfig = {
  name: "Arturo Esquivel",
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
    "Soy un desarrollador orientado a resolver problemas empresariales reales, combinando un sólido perfil técnico con visión de negocio. Durante más de un año, he construido soluciones para industrias exigentes, logrando mejoras medibles en eficiencia operativa y reducción de costos en la nube. Me destaco por mi capacidad autodidacta, mi nivel de inglés B2 que me permite colaborar en entornos internacionales, y un fuerte enfoque en la calidad del producto. Mi objetivo es crear software escalable que aporte valor directo a la operación del cliente.",
  softSkills: [
    "Liderazgo en toma de requisitos",
    "Resolución de incidencias críticas",
    "Trabajo autónomo",
    "Orientación a resultados",
  ],
};

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Django",
  "PHP",
  "Laravel",
  "Java",
  "ASP.NET",
  "Tailwind CSS",
  "Bootstrap",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Docker",
  "Git / GitHub",
  "Figma",
  "AWS Solutions Architect (En curso)",
];

export const projects = [
  {
    id: "maquirent",
    title: "MAQUIRENT",
    category: "Gestión Operativa",
    image: "/Collage_MAQUIRENTAPP.jpeg",
    videoUrl: "https://www.youtube.com/embed/aQSMzCVpwxg?autoplay=1&loop=1&playlist=aQSMzCVpwxg&controls=1&mute=1",
    imageAlt: "Captura de la aplicación MAQUIRENT",
    description:
      "Aplicación móvil desarrollada en Java con arquitectura MVVM, diseñada para digitalizar la administración operativa y el alquiler de maquinaria pesada (grupos electrógenos). Construida para resolver desafíos logísticos reales en campo utilizando Firebase como infraestructura en la nube optimizada.\n\n• Arquitectura Offline-First: Implementación de persistencia local con Firestore, garantizando la continuidad del trabajo en zonas sin conexión a internet y sincronización automática al recuperar la red.\n\n• Automatización y Ahorro Cloud: Reducción del 70% en tiempos de generación de reportes (Word/PDF nativos) y desarrollo de compresión de imágenes que disminuye los costos de almacenamiento en un 75%.\n\n• Control y Seguridad: Sistema de gestión del ciclo de vida de los equipos con control de acceso basado en roles (RBAC), separando permisos administrativos de operativos.",
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
      "Desarrollo full stack de portal de gestión usando PHP (Laravel), MySQL y Tailwind. Implementación de módulos dinámicos y automatización de despliegue en servidor Linux.",
  },
];

export const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Adrian Cantrill / Amazon Web Services",
    status: "En preparación",
  },
  {
    title: "CS50's Web Programming with Python and JavaScript",
    issuer: "EDX - Harvard University",
    status: "En curso",
  },
  { title: "React Foundations for Next.js", issuer: "Vercel" },
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

import {
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export const profileData = {
  name: "Andrés De Los Santos",
  bio: "Full Stack Developer & Teaching Assistant",
  avatar: "/andres.jpg",
  location: "Buenos Aires, Argentina",
};

export type SocialLink = {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  color: string;
  featured?: boolean;
};

function gmailCompose(to: string, subject: string, body: string): string {
  const params = new URLSearchParams({ view: "cm", fs: "1", tf: "1", to, su: subject, body });
  return `https://mail.google.com/mail/?${params}`;
}

export const socialLinks: SocialLink[] = [
  {
    id: "portfolio",
    title: "Portfolio Personal",
    description: "Mis proyectos y experiencia profesional",
    url: "https://portfolio-qm9g.vercel.app/",
    icon: Globe,
    color: "bg-blue-600 hover:bg-blue-700",
    featured: true,
  },
  {
    id: "github",
    title: "GitHub",
    description: "Repositorios y código abierto",
    url: "https://github.com/andresdelossantos99",
    icon: Github,
    color: "bg-gray-800 hover:bg-gray-900",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Perfil profesional y networking",
    url: "https://www.linkedin.com/in/andres-de-los-santos-48382a349/",
    icon: Linkedin,
    color: "bg-blue-700 hover:bg-blue-800",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "Solo mensajes escritos",
    url: "https://wa.link/b4wyji",
    icon: MessageCircle,
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "Cuenta de mi trabajo Actual",
    url: "https://www.instagram.com/roots_cooperativa/#",
    icon: Instagram,
    color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
  },
  {
    id: "project",
    title: "Best Proyect",
    description: "best proyect in dev",
    url: "https://frontend-rootscoop.vercel.app/",
    icon: Rocket,
    color: "bg-gray-600 hover:bg-gray-500",
  },
  {
    id: "email",
    title: "Email",
    description: "Contacto directo",
    url: gmailCompose(
      "andresdelossantos99@gmail.com",
      "Consulta desde tu LinkTree",
      "Hola Andrés, ¿cómo estás? Te escribo por…",
    ),
    icon: Mail,
    color: "bg-red-600 hover:bg-red-700",
  },
];

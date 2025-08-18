"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Instagram,
  Github,
  Linkedin,
  Mail,
  Globe,
  ExternalLink,
  Rocket,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function LinkTree() {
  const [copied, setCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const profileData = {
    name: "Andrés De Los Santos",
    bio: "Full Stack Developer & Teaching Assistant",
    avatar: "/andres.jpg",
    location: "Buenos Aires, Argentina",
  };

  const socialLinks = [
    {
      id: 1,
      title: "Portfolio Personal",
      description: "Mis proyectos y experiencia profesional",
      url: "https://portfolio-qm9g.vercel.app/",
      icon: Globe,
      color: "bg-blue-600 hover:bg-blue-700",
      featured: true,
    },
    {
      id: 2,
      title: "GitHub",
      description: "Repositorios y código abierto",
      url: "https://github.com/andresdelossantos99",
      icon: Github,
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      id: 3,
      title: "LinkedIn",
      description: "Perfil profesional y networking",
      url: "https://www.linkedin.com/in/andres-de-los-santos-48382a349/",
      icon: Linkedin,
      color: "bg-blue-700 hover:bg-blue-800",
    },
    {
      id: 4,
      title: "WhatsApp",
      description: "Solo mensajes escritos",
      url: "https://wa.link/b4wyji",
      icon: MessageCircle,
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      id: 5,
      title: "Instagram",
      description: "Cuenta de mi trabajo Actual",
      url: "https://www.instagram.com/roots_cooperativa/#",
      icon: Instagram,
      color:
        "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    },
    {
      id: 6,
      title: "Best Proyect",
      description: "best proyect in dev",
      url: "https://frontend-rootscoop.vercel.app/",
      icon: Rocket,
      color: "bg-gray-600 hover:bg-gray-500",
    },
    {
      id: 7,
      title: "Email",
      description: "Contacto directo",
      url: gmailCompose(
        "andresdelossantos99@gmail.com",
        "Consulta desde tu LinkTree",
        "Hola Andrés, ¿cómo estás? Te escribo por…"
      ),
      icon: Mail,
      color: "bg-red-600 hover:bg-red-700",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: profileData.name,
          text: profileData.bio,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-56 h-56 bg-indigo-500/10 rounded-full blur-xl"></div>

        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-pink-500/8 to-yellow-500/8 rounded-full blur-2xl transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:py-12">
        <div className="w-full max-w-sm sm:max-w-md mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <div className="relative mb-4 sm:mb-6">
              <Avatar className="w-24 h-24 sm:w-28 sm:h-28 mx-auto border-4 border-white/20 shadow-2xl">
                <AvatarImage
                  src={profileData.avatar || "/placeholder.svg"}
                  alt={profileData.name}
                  className="object-cover object-center"
                />
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white text-xl sm:text-2xl font-bold">
                  {profileData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 sm:border-4 border-black flex items-center justify-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {profileData.name}
            </h1>
            <p className="text-gray-400 mb-1 text-sm sm:text-base">
              {profileData.bio}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              📍 {profileData.location}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={link.id}
                  variant="ghost"
                  className={`
                    w-full h-auto p-0 rounded-xl sm:rounded-2xl overflow-hidden
                    hover:scale-105 transition-all duration-300
                    ${link.featured ? "ring-2 ring-white/20" : ""}
                  `}
                  onClick={() => window.open(link.url, "_blank")}
                >
                  <div
                    className={`
                    w-full flex items-center p-3 sm:p-4 text-left
                    ${link.color}
                    ${
                      link.featured
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : ""
                    }
                  `}
                  >
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-base sm:text-lg mb-1">
                        {link.title}
                        {link.featured && (
                          <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                            ✨ Destacado
                          </span>
                        )}
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 ml-2 flex-shrink-0" />
                  </div>
                </Button>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              variant="ghost"
              className="text-gray-500 hover:text-gray-400 text-xs sm:text-sm"
              onClick={() =>
                window.open("https://github.com/andresdelossantos99", "_blank")
              }
            >
              🎃 Si te gusta lo que hago no dudes en contactarme 😎
            </Button>
          </div>
        </div>
      </div>

      {copied && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          ¡Enlace copiado al portapapeles!
        </div>
      )}
    </div>
  );
}

function gmailCompose(to: string, subject: string, body: string): string {
  const baseUrl = "https://mail.google.com/mail/?view=cm&fs=1&tf=1";
  const encodedTo = encodeURIComponent(to);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  return `${baseUrl}&to=${encodedTo}&su=${encodedSubject}&body=${encodedBody}`;
}

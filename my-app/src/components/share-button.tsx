"use client";

import { useEffect, useRef, useState } from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ShareButton({ title, text }: { title: string; text: string }) {
  const [message, setMessage] = useState("");
  const [sharing, setSharing] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function handleShare() {
    setSharing(true);
    setMessage("");
    if (timer.current) clearTimeout(timer.current);
    try {
      if (navigator.share) {
        try {
          await navigator.share({ title, text, url: window.location.href });
          return;
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") return;
        }
      }
      await navigator.clipboard.writeText(window.location.href);
      setMessage("¡Enlace copiado al portapapeles!");
    } catch {
      setMessage("No se pudo copiar el enlace. Puedes copiarlo desde la barra de direcciones.");
    } finally {
      setSharing(false);
      timer.current = setTimeout(() => setMessage(""), 4000);
    }
  }

  return (
    <>
      <Button type="button" variant="ghost" className="text-gray-400" disabled={sharing} onClick={handleShare}>
        <Share2 aria-hidden="true" /> Compartir perfil
      </Button>
      <div role="status" aria-live="polite" aria-atomic="true">
        {message && <p className="fixed bottom-4 left-1/2 -translate-x-1/2 w-max max-w-[calc(100%-2rem)] bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-sm">{message}</p>}
      </div>
    </>
  );
}

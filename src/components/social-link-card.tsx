import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SocialLink } from "@/lib/profile";
import { cn } from "@/lib/utils";

export function SocialLinkCard({ link }: { link: SocialLink }) {
  const Icon = link.icon;

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full h-auto p-0 whitespace-normal rounded-xl sm:rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 motion-reduce:transform-none motion-reduce:transition-none",
        link.featured && "ring-2 ring-white/20",
      )}
    >
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        <div className={cn("w-full flex items-center p-3 sm:p-4 text-left", link.color, link.featured && "bg-gradient-to-r from-blue-600 to-purple-600")}>
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl mr-3 sm:mr-4 flex-shrink-0">
            <Icon aria-hidden="true" className="size-5 sm:size-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold text-white text-base sm:text-lg mb-1">
              {link.title}
              {link.featured && <span className="inline-block ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">✨ Destacado</span>}
            </h2>
            <p className="text-white/80 text-xs sm:text-sm">{link.description}</p>
          </div>
          <ExternalLink aria-hidden="true" className="size-4 sm:size-5 text-white/60 ml-2 flex-shrink-0" />
        </div>
      </a>
    </Button>
  );
}

import { AnimatedBackground } from "@/components/animated-background";
import { ProfileHeader } from "@/components/profile-header";
import { ShareButton } from "@/components/share-button";
import { SocialLinkCard } from "@/components/social-link-card";
import { Button } from "@/components/ui/button";
import { profileData, socialLinks } from "@/lib/profile";

export default function LinkTree() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <AnimatedBackground />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:py-12">
        <div className="w-full max-w-sm sm:max-w-md mx-auto">
          <ProfileHeader />
          <nav aria-label="Enlaces de Andrés" className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {socialLinks.map((link) => <SocialLinkCard key={link.id} link={link} />)}
          </nav>
          <footer className="text-center">
            <ShareButton title={profileData.name} text={profileData.bio} />
            <Button asChild variant="ghost" className="h-auto whitespace-normal text-gray-500 hover:text-gray-400 text-xs sm:text-sm">
              <a href="https://github.com/andresdelossantos99" target="_blank" rel="noopener noreferrer">
                🎃 Si te gusta lo que hago no dudes en contactarme 😎
              </a>
            </Button>
          </footer>
        </div>
      </main>
    </div>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { profileData } from "@/lib/profile";

export function ProfileHeader() {
  return (
    <header className="text-center mb-6 sm:mb-8">
      <div className="relative w-24 sm:w-28 mx-auto mb-4 sm:mb-6">
        <Avatar className="w-24 h-24 sm:w-28 sm:h-28 border-4 border-white/20 shadow-2xl">
          <AvatarImage src={profileData.avatar} alt={profileData.name} className="object-cover object-center" />
          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white text-xl sm:text-2xl font-bold">
            {profileData.name.split(" ").map((name) => name[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div aria-hidden="true" className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 sm:border-4 border-black flex items-center justify-center">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full" />
        </div>
      </div>
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">{profileData.name}</h1>
      <p className="text-gray-400 mb-1 text-sm sm:text-base">{profileData.bio}</p>
      <p className="text-gray-500 text-xs sm:text-sm">📍 {profileData.location}</p>
    </header>
  );
}

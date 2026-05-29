import { Share2, MessageCircle } from "lucide-react";
import { SiTiktok, SiFacebook, SiX, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";

const SocialShare = () => {
  const shareUrl = window.location.href;
  const shareText = "Descubre HALU - El mejor software escolar para gestión educativa integral 🎓";

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      name: "Facebook",
      icon: SiFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "X (Twitter)",
      icon: SiX,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: "bg-black hover:bg-gray-800"
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "bg-blue-700 hover:bg-blue-800"
    },
    {
      name: "TikTok",
      icon: SiTiktok,
      url: "https://www.tiktok.com/@halu.plataforma",
      color: "bg-black hover:bg-gray-800"
    }
  ];

  const handleShare = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
      <div className="text-center mb-4">
        <Share2 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          ¡Comparte HALU!
        </h3>
        <p className="text-sm text-gray-600">
          Ayuda a otros colegios a descubrir la mejor plataforma educativa
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2">
        {shareLinks.map((social) => (
          <Button
            key={social.name}
            onClick={() => handleShare(social.url)}
            className={`${social.color} text-white p-2 w-10 h-10`}
            size="sm"
            aria-label={`Compartir en ${social.name}`}
          >
            <social.icon className="w-4 h-4" />
          </Button>
        ))}
      </div>
      
      <p className="text-xs text-gray-500 text-center mt-3">
        Síguenos en TikTok: @halu.plataforma
      </p>
    </div>
  );
};

export default SocialShare;
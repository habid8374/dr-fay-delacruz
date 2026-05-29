import { useState } from "react";
import { ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface VideoPlayerDialogProps {
  trigger: React.ReactElement<ButtonProps>;
}

export const VideoPlayerDialog = ({ trigger }: VideoPlayerDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 bg-black border-0 aspect-video">
        {isOpen && (
          <video
            src="/halu-uploads/2025-08-07-220018827.mp4" // Ruta pública
            controls
            autoPlay
            muted
            preload="none" // No carga hasta que se abre
            poster="/halu-uploads/video-thumbnail.jpg" // Imagen previa
            aria-label="Video explicativo de la plataforma HALU"
            className="w-full h-full"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

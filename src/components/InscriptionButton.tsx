import { useState } from "react";
import { Button } from "@/components/ui/button";
import InscriptionModal from "./InscriptionModal";
import { ClipboardList } from "lucide-react";

interface InscriptionButtonProps {
  /** "dark" para fondos oscuros (hero), "light" para fondos claros (cards/secciones) */
  theme?: "dark" | "light";
  className?: string;
}

const InscriptionButton = ({ theme = "dark", className = "" }: InscriptionButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const darkStyle = "h-11 border border-white/25 bg-white/10 font-semibold text-white shadow-none backdrop-blur-sm transition-colors hover:bg-white/15";
  const lightStyle = "h-11 font-semibold";

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        size="lg"
        variant={theme === "light" ? "default" : undefined}
        className={theme === "dark" ? `${darkStyle} ${className}` : `${lightStyle} ${className}`}
      >
        <ClipboardList className="h-4 w-4" />
        Inscripciones en línea
      </Button>

      <InscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default InscriptionButton;

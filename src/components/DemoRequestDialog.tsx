import { useState } from "react";
import { ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DemoRequestForm } from "./DemoRequestForm";

interface DemoRequestDialogProps {
  trigger: React.ReactElement<ButtonProps>;
}

export const DemoRequestDialog = ({ trigger }: DemoRequestDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Solicitar una Demo</DialogTitle>
          <DialogDescription>
            Completa el formulario y uno de nuestros especialistas se pondrá en contacto contigo para agendar una demostración personalizada.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <DemoRequestForm onSuccess={() => setIsOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
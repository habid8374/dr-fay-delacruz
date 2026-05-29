import { useState } from "react";
import { MessageCircle, X, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useChat } from "@/contexts/ChatContext";

const OfflineChat = () => {
  const { offlineChatOpen, setOfflineChatOpen } = useChat();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrblolpq";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: "Mensaje Offline",
          timestamp: new Date().toLocaleString('es-CO'),
        }),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Te responderemos pronto. Revisa tu email.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setOfflineChatOpen(false);
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!offlineChatOpen) {
    return (
      <Button
        onClick={() => setOfflineChatOpen(true)}
        className="fixed bottom-48 left-4 sm:left-6 z-30 bg-gray-600 hover:bg-gray-700 text-white rounded-full w-14 h-14 shadow-lg"
        aria-label="Enviar mensaje offline"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 sm:left-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border">
      {/* Header */}
      <div className="bg-gray-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="font-semibold">Soporte HALU</div>
            <div className="text-xs opacity-90">Fuera de línea</div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOfflineChatOpen(false)}
          className="text-white hover:bg-gray-500 p-1"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div className="text-sm text-gray-600 mb-4">
          Nuestro equipo no está disponible ahora. Déjanos tu mensaje y te responderemos pronto.
        </div>

        <div>
          <Input
            name="name"
            placeholder="Tu nombre *"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <Input
            name="email"
            type="email"
            placeholder="Tu email *"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <Input
            name="phone"
            type="tel"
            placeholder="Tu teléfono (opcional)"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Textarea
            name="message"
            placeholder="Tu mensaje *"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            required
          />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gray-600 hover:bg-gray-700"
        >
          {isSubmitting ? (
            "Enviando..."
          ) : (
            <>
              Enviar mensaje
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Te responderemos en menos de 24 horas
        </p>
      </form>
    </div>
  );
};

export default OfflineChat;
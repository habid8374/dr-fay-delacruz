import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrblolpq";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Por favor ingresa tu correo electrónico",
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
          email,
          type: "Newsletter Subscription",
          timestamp: new Date().toLocaleString('es-CO'),
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        toast({
          title: "¡Suscripción exitosa!",
          description: "Te mantendremos informado sobre HALU y educación.",
        });
        setEmail("");
      } else {
        throw new Error("Error en la suscripción");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          ¡Gracias por suscribirte!
        </h3>
        <p className="text-gray-600">
          Recibirás noticias sobre educación y actualizaciones de HALU.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="w-6 h-6 text-blue-600" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Mantente Informado
          </h3>
          <p className="text-sm text-gray-600">
            Recibe noticias sobre educación y actualizaciones de HALU
          </p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          disabled={isSubmitting}
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
        >
          {isSubmitting ? "..." : "Suscribirse"}
        </Button>
      </form>
      
      <p className="text-xs text-gray-500 mt-2">
        No spam. Puedes cancelar en cualquier momento.
      </p>
    </div>
  );
};

export default Newsletter;
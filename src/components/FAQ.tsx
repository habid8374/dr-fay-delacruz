import { useState } from "react";
import { ChevronDown, ChevronUp, Search, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "¿Cuánto tiempo toma implementar HALU en mi colegio?",
    answer: "La implementación completa toma solo 15 días hábiles. Incluye configuración, capacitación del equipo, migración de datos y puesta en marcha.",
  },
  {
    question: "¿Qué incluye el soporte técnico?",
    answer: "Soporte 24/7 vía WhatsApp, email y teléfono. Incluye capacitaciones, actualizaciones automáticas y resolución de incidencias sin costo adicional.",
  },
  {
    question: "¿Es seguro para los datos de nuestros estudiantes?",
    answer: "Sí, utilizamos encriptación SSL, respaldos automáticos diarios y cumplimos con todas las normativas de protección de datos en Colombia.",
  },
  {
    question: "¿Funciona con cualquier tamaño de colegio?",
    answer: "Sí, HALU se adapta desde colegios pequeños de 50 estudiantes hasta grandes instituciones con más de 2000 estudiantes.",
  },
  {
    question: "¿Necesitamos cambiar nuestros computadores?",
    answer: "No, HALU funciona en cualquier computador con internet. Es compatible con Windows, Mac y dispositivos móviles.",
  },
  {
    question: "¿Cómo funciona la capacitación del personal?",
    answer: "Incluimos capacitación presencial o virtual para todo tu equipo, manuales digitales y videos tutoriales. El proceso es muy intuitivo.",
  },
  {
    question: "¿Qué pasa si tenemos problemas después de la implementación?",
    answer: "Nuestro soporte técnico está disponible 24/7. Además, ofrecemos garantía de satisfacción y acompañamiento continuo.",
  },
  {
    question: "¿Podemos probar el sistema antes de comprarlo?",
    answer: "¡Por supuesto! Ofrecemos una demo gratuita personalizada donde podrás ver exactamente cómo funcionaría en tu colegio.",
  },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const filtered = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggle = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-primary/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resolvemos tus dudas sobre HALU
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Todo lo que necesitas saber antes de empezar
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 w-4 h-4" />
            <Input
              placeholder="Buscar pregunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background border-border/60"
            />
          </div>
        </div>

        {/* Items */}
        <div className="max-w-3xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">No encontramos respuestas para tu búsqueda.</p>
              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/573246868538?text=Hola, tengo una pregunta sobre HALU que no está en el FAQ",
                    "_blank"
                  )
                }
                variant="action"
              >
                <MessageCircle className="w-4 h-4" />
                Pregúntanos por WhatsApp
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border/60 bg-card overflow-hidden transition-all duration-200 hover:border-primary/25"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground text-sm md:text-base leading-snug">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                    )}
                  </button>

                  {openItems.includes(index) && (
                    <div className="px-6 pb-5 border-t border-border/40">
                      <p className="text-muted-foreground text-sm leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA bottom */}
        <div className="text-center mt-12">
          <div className="rounded-2xl border border-primary/20 bg-primary/8 p-6 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-base font-semibold text-foreground mb-1">
              ¿No encontraste lo que buscabas?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Nuestro equipo está listo para resolver todas tus dudas
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() =>
                  window.open("https://wa.me/573246868538?text=Hola, tengo preguntas sobre HALU", "_blank")
                }
                variant="action"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                onClick={() => document.querySelector("#demo-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Solicitar Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

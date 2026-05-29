import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Gift, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="relative border-b border-white/10 bg-gradient-to-r from-edu-blue via-[hsl(244_75%_52%)] to-edu-purple text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,hsl(0_0%_100%/0.06)_50%,transparent_60%)]"
          aria-hidden
        />
        <div className="container relative mx-auto px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="block sm:hidden">
            <div className="mb-2 flex items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2">
                <Gift className="h-4 w-4 shrink-0 text-white/90" />
                <span className="truncate text-sm font-semibold tracking-tight">
                  Promoción: sitio web sin costo para nuevas instituciones
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsVisible(false)}
                className="shrink-0 rounded-md p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Cerrar aviso"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mb-2 text-xs leading-snug text-white/90">
              Cupos limitados para colegios que activan HALU. Incluye diseño, hosting y dominio el primer año.
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs tabular-nums text-white/85">
                <Clock className="h-3.5 w-3.5 shrink-0" />
                <span>
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
                </span>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="h-8 shrink-0 border-0 bg-white px-3 text-xs font-semibold text-slate-900 shadow-none hover:bg-white/90"
                onClick={() => setShowModal(true)}
              >
                Detalles
              </Button>
            </div>
          </div>

          <div className="hidden items-center justify-between gap-4 sm:flex">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <Gift className="h-5 w-5 shrink-0 text-white/90" />
              <div className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                <span className="text-sm font-semibold tracking-tight md:text-[0.95rem]">
                  Promoción limitada: sitio web institucional sin costo al contratar HALU
                </span>
                <span className="inline-flex items-center gap-2 text-xs tabular-nums text-white/85 md:text-sm">
                  <Clock className="h-4 w-4 shrink-0" />
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </span>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="border-0 bg-white font-semibold text-slate-900 shadow-none hover:bg-white/90"
                onClick={() => setShowModal(true)}
              >
                Ver condiciones
              </Button>
              <button
                type="button"
                onClick={() => setIsVisible(false)}
                className="rounded-md p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Cerrar aviso"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="mx-4 max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold tracking-tight sm:text-2xl">
              Promoción: sitio web para su institución
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-2">
            <div className="text-center">
              <div className="mb-2 text-2xl font-semibold text-primary sm:text-3xl">Incluido sin costo adicional</div>
              <p className="text-sm text-muted-foreground sm:text-base">
                Para un número limitado de colegios que contraten la plataforma HALU
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted/40 p-5 sm:p-6">
              <h3 className="mb-3 text-base font-semibold text-foreground">Qué incluye</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Diseño acorde a la identidad de su institución
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Formulario de inscripción conectado con HALU
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Secciones institucionales y galería
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Hosting y dominio el primer año
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Integración con los módulos de la plataforma
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="mb-4 text-sm text-muted-foreground">
                Valor referencial del paquete web: $2.500.000 COP — bonificado en esta promoción.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    setShowModal(false);
                    document.querySelector("#demo-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Hablar con ventas
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => window.open("https://haluplataform.com", "_blank")}
                >
                  Ver planes HALU
                </Button>
              </div>
            </div>

            <p className="text-center text-xs leading-relaxed text-muted-foreground">
              Aplican términos comerciales y cupos limitados. Entrega estimada en hasta 15 días hábiles tras la firma
              del contrato.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UrgencyBanner;
import { Button } from "@/components/ui/button";
import { Calendar, Play, ExternalLink, BadgeCheck, Zap, CalendarClock, Lock } from "lucide-react";
import { DemoRequestDialog } from "./DemoRequestDialog";
import { VideoPlayerDialog } from "./VideoPlayerDialog";
import { AnimateOnScroll } from "./AnimateOnScroll";

const trustIndicators = [
  { icon: BadgeCheck, stat: "100%", label: "Cumplimiento legal" },
  { icon: Zap, stat: "70%", label: "Menos trabajo manual" },
  { icon: CalendarClock, stat: "15 días", label: "Implementación típica" },
  { icon: Lock, stat: "SSL", label: "Conexión segura" },
];

const CTASection = () => {
  return (
    <section id="demo-section" className="relative overflow-hidden bg-gradient-hero py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,hsl(0_0%_100%/0.14),transparent)]" aria-hidden />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <AnimateOnScroll className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Próximo paso</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            ¿Listo para modernizar la gestión de su{" "}
            <span className="bg-gradient-to-r from-white to-white/75 bg-clip-text text-transparent">
              institución educativa?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
            Centralice admisiones, académicos, convivencia y reportes en una sola plataforma, con acompañamiento y
            capacitación para su equipo.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {/* Botón de solicitar demo */}
            <DemoRequestDialog
              trigger={
                <Button
                  size="lg"
                  className="h-12 bg-white text-base font-semibold text-primary shadow-strong hover:bg-white/95"
                >
                  <Calendar className="w-5 h-5" />
                  Solicitar demo gratuita
                </Button>
              }
            />
            
            {/* Botón de ver presentación (video local) */}
            <VideoPlayerDialog
              trigger={
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 border-white/30 bg-white/10 text-base text-white backdrop-blur-sm hover:bg-white/18"
                >
                  <Play className="w-5 h-5" />
                  Ver presentación
                </Button>
              }
            />

            {/* Botón de acceso al sistema */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 border-white/30 bg-white/10 text-base text-white backdrop-blur-sm hover:bg-white/18"
            >
              <a href="/plataforma">
                <ExternalLink className="w-5 h-5" />
                Acceder al sistema
              </a>
            </Button>
          </div>

          {/* Indicadores de confianza */}
          <div className="mt-14 grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8">
            {trustIndicators.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll key={item.label} delay={index * 0.15}>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="text-xl font-semibold tabular-nums text-white">{item.stat}</div>
                    <div className="text-sm text-white/75">{item.label}</div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          <div className="mt-10 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur-sm">
            <span className="font-medium text-white">Demo sin costo:</span> recorrido guiado, ajuste a su institución y
            lineamientos de puesta en marcha.
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CTASection;

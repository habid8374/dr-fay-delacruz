import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, TrendingDown, Zap } from "lucide-react";
import { DemoRequestDialog } from "./DemoRequestDialog";
import { VideoPlayerDialog } from "./VideoPlayerDialog";
import InscriptionButton from "./InscriptionButton";

const HERO_TITLES = [
  {
    main: "HALU: Software Escolar y Plataforma Académica Integral",
    highlight: "Gestión de Colegios con Tecnología Avanzada",
    subtitle:
      "El software escolar líder en Colombia que automatiza admisiones, gestión académica, convivencia escolar y reportes. Más de 500 instituciones educativas ya confían en HALU.",
  },
  {
    main: "Software Escolar Todo-en-Uno",
    highlight: "Plataforma Académica Integral",
    subtitle:
      "Gestiona tu institución educativa con la plataforma académica más completa. Automatiza procesos, mejora la calidad educativa y cumple con la Ley 1620 de forma eficiente.",
  },
  {
    main: "Transforma tu Institución",
    highlight: "Con el Mejor Software Escolar",
    subtitle:
      "Reduce 70% el trabajo manual, mejora la comunicación con familias y optimiza la gestión académica con tecnología de vanguardia diseñada para colegios en Colombia.",
  },
] as const;

const QUICK_STATS = [
  { icon: Users, value: "500+", label: "Colegios que confían en HALU" },
  { icon: TrendingDown, value: "70%", label: "Menos trabajo manual" },
  { icon: Zap, value: "72h", label: "Tiempo de implementación" },
];

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % HERO_TITLES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-14 md:pt-8 md:pb-24"
      aria-label="Presentación principal"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/halu-uploads/fondo-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay oscuro semitransparente para mejorar el contraste del texto blanco */}
      <div className="absolute inset-0 bg-black/50" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950/92 via-slate-950/72 to-primary/30"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,hsl(var(--edu-blue)/0.25),transparent)]" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-5 md:space-y-8">

            {/* Badge */}
            <div className="inline-flex justify-center">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                Plataforma escolar en Colombia
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-5">
              <h1 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                {HERO_TITLES[currentTitle].main}{" "}
                <span className="bg-gradient-to-r from-sky-300 via-blue-200 to-white/75 bg-clip-text text-transparent">
                  {HERO_TITLES[currentTitle].highlight}
                </span>
              </h1>

              <p className="text-pretty text-sm leading-relaxed text-white/85 sm:text-base md:text-xl md:leading-relaxed">
                {HERO_TITLES[currentTitle].subtitle}
              </p>
            </div>

            {/* Quick stats row */}
            <div className="flex items-stretch justify-center gap-4 border-y border-white/10 py-4 sm:gap-6">
              {QUICK_STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-1 flex-col items-center gap-1 text-center sm:flex-none ${
                    i !== 0 ? "border-l border-white/10 pl-4 sm:pl-6" : ""
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <s.icon className="h-4 w-4 shrink-0 text-sky-300" />
                    <span className="text-base font-bold text-white sm:text-lg">{s.value}</span>
                  </div>
                  <span className="text-[11px] leading-tight text-white/70 sm:text-xs">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col items-stretch gap-4 pt-2 sm:items-center">
              <DemoRequestDialog
                trigger={
                  <Button variant="hero" size="lg" className="h-12 w-full text-base shadow-strong sm:w-auto sm:px-10">
                    Solicitar demo gratuita
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                }
              />

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
                <InscriptionButton />
                <VideoPlayerDialog
                  trigger={
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-11 border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/12"
                    >
                      <Play className="h-5 w-5" />
                      Ver video
                    </Button>
                  }
                />
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/12"
                  onClick={() => window.location.href = "/plataforma"}
                >
                  Acceder a la plataforma
                </Button>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 pt-2" role="tablist" aria-label="Mensajes destacados">
              {HERO_TITLES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === currentTitle}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTitle ? "w-8 bg-white" : "w-2 bg-white/35 hover:bg-white/50"
                  }`}
                  onClick={() => setCurrentTitle(index)}
                  aria-label={`Ver mensaje ${index + 1} de ${HERO_TITLES.length}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />
    </section>
  );
};

export default HeroSection;

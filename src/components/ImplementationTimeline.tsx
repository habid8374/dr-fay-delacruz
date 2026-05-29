import { Calendar, Settings, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    day: "Día 1-3",
    title: "Configuración Inicial",
    description: "Instalación del sistema y configuración básica de tu institución",
    icon: Settings,
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    dot: "bg-primary",
  },
  {
    day: "Día 4-8",
    title: "Capacitación del Equipo",
    description: "Entrenamiento completo para administradores y personal clave",
    icon: Users,
    iconBg: "bg-edu-purple/20",
    iconColor: "text-edu-purple",
    dot: "bg-edu-purple",
  },
  {
    day: "Día 9-12",
    title: "Migración de Datos",
    description: "Importación segura de información existente de estudiantes",
    icon: Calendar,
    iconBg: "bg-edu-orange/20",
    iconColor: "text-edu-orange",
    dot: "bg-edu-orange",
  },
  {
    day: "Día 13-15",
    title: "Puesta en Marcha",
    description: "Sistema completamente operativo y soporte continuo",
    icon: CheckCircle,
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
    dot: "bg-accent",
  },
];

const ImplementationTimeline = () => {
  return (
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-primary/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Proceso de implementación
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Implementación en Solo{" "}
            <span className="text-primary">15 Días</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proceso estructurado y probado que garantiza una transición suave y sin interrupciones
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border/60" />

            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center mb-8 md:mb-12">
                {/* Dot */}
                <div
                  className={`shrink-0 w-8 h-8 ${step.dot} rounded-full flex items-center justify-center z-10
                    md:absolute md:left-1/2 md:-translate-x-1/2`}
                >
                  <step.icon className="w-4 h-4 text-white" strokeWidth={2} />
                </div>

                {/* Card */}
                <div
                  className={`ml-6 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="rounded-xl border border-border/60 bg-card p-5 shadow-soft hover:shadow-medium transition-all duration-200 hover:-translate-y-0.5">
                    <div className={`inline-flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className={`w-8 h-8 ${step.iconBg} rounded-lg flex items-center justify-center`}>
                        <step.icon className={`w-4 h-4 ${step.iconColor}`} strokeWidth={1.75} />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${step.iconColor}`}>
                        {step.day}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="rounded-2xl border border-primary/20 bg-primary/8 px-6 py-5 max-w-2xl mx-auto">
            <h3 className="text-base font-semibold text-foreground mb-1">¿Listo para comenzar?</h3>
            <p className="text-sm text-muted-foreground">
              Nuestro equipo te acompañará en cada paso del proceso para garantizar el éxito de la implementación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationTimeline;

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const ProblemSolutionSection = () => {
  const problems = [
    {
      title: "Procesos Manuales y Desorganizados",
      description: "Los colegios en Colombia enfrentan procesos administrativos ineficientes con documentación dispersa, registros en papel y procesos lentos que consumen tiempo valioso del personal. La falta de software escolar adecuado genera pérdida de información y retrasa la toma de decisiones."
    },
    {
      title: "Falta de Trazabilidad Estudiantil",
      description: "Sin una plataforma académica integral, la información del estudiante está fragmentada. No existe seguimiento completo del desarrollo académico, comportamental y social, dificultando la identificación temprana de problemas y la personalización del apoyo educativo."
    },
    {
      title: "Comunicación Ineficiente con Familias",
      description: "Las instituciones educativas luchan por mantener informadas a las familias. La comunicación es reactiva en lugar de proactiva, sin un sistema automatizado que mantenga a los padres actualizados sobre el progreso de sus hijos y eventos importantes."
    },
    {
      title: "Cumplimiento Normativo Complejo",
      description: "El cumplimiento con la Ley 1620 y otras regulaciones educativas colombianas es complejo. La generación manual de reportes requeridos por entidades regulatorias consume tiempo y es propenso a errores, afectando la acreditación institucional."
    }
  ];

  const solutions = [
    {
      title: "Automatización Integral con Software Escolar",
      description: "HALU digitaliza completamente los procesos educativos: desde admisiones hasta reportes finales, todo en una sola plataforma académica. Reduce 70% el trabajo manual y elimina errores en la gestión de información estudiantil."
    },
    {
      title: "Ecosistema EDIE Unificado para Gestión Académica",
      description: "Nuestra plataforma académica ofrece seguimiento 360° del estudiante: académico, comportamental y de desarrollo integral en tiempo real. Permite identificar oportunidades de mejora y personalizar la experiencia educativa."
    },
    {
      title: "Comunicación Inteligente con Familias",
      description: "Correos automáticos, notificaciones personalizadas y comunicación proactiva con familias y acudientes. Mantén a los padres informados en tiempo real sobre el progreso académico y comportamental de sus hijos."
    },
    {
      title: "Cumplimiento Automático de Normativas",
      description: "Generación automática de reportes normativos, seguimiento de la Ruta de Convivencia Escolar y alertas de cumplimiento. Asegura el cumplimiento con la Ley 1620 y otras regulaciones educativas colombianas sin esfuerzo adicional."
    }
  ];

  return (
    <section id="features" className="border-b border-border/60 bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateOnScroll className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Enfoque</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            De la gestión manual al{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">software escolar integrado</span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Alineamos procesos administrativos y pedagógicos en una sola plataforma, para que su equipo dedique más
            tiempo a la comunidad educativa y menos a la papelería.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Problems */}
          <AnimateOnScroll className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold text-destructive">Desafíos frecuentes</h3>
              <p className="mt-2 text-sm text-muted-foreground">Situaciones que vemos en instituciones de distintos tamaños</p>
            </div>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-destructive/15 bg-destructive/[0.04] p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-destructive" strokeWidth={1.75} />
                  <div>
                    <h4 className="font-semibold text-destructive">{problem.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Solutions */}
          <AnimateOnScroll className="space-y-8" delay={0.2}>
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold text-accent">Cómo lo resuelve HALU</h3>
              <p className="mt-2 text-sm text-muted-foreground">Respuestas concretas dentro del ecosistema EDIE</p>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-accent/15 bg-accent/[0.04] p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-accent" strokeWidth={1.75} />
                  <div>
                    <h4 className="font-semibold text-accent">{solution.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
import { Users, Target, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Transformar la gestión educativa en Colombia mediante tecnología innovadora que simplifique procesos y mejore la calidad educativa.",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Heart,
    title: "Visión",
    description:
      "Ser la plataforma educativa líder en Latinoamérica, conectando instituciones, estudiantes y familias en un ecosistema digital integral.",
    iconBg: "bg-destructive/20",
    iconColor: "text-destructive",
  },
  {
    icon: Award,
    title: "Valores",
    description:
      "Innovación, transparencia, compromiso con la educación y excelencia en el servicio al cliente son nuestros pilares fundamentales.",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
];

const AboutUs = () => {
  return (
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Nosotros
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quiénes Somos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos un equipo apasionado por la educación y la tecnología, comprometidos con transformar la gestión educativa en Colombia
          </p>
        </div>

        {/* Historia */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-soft">
            <h3 className="text-xl font-bold text-foreground mb-4">Nuestra Historia</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              HALU nació de la necesidad real de simplificar la gestión educativa en Colombia.
              Después de trabajar con múltiples instituciones educativas, identificamos que los procesos
              administrativos consumían demasiado tiempo que debería dedicarse a la enseñanza.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Desarrollamos HALU como una solución integral que automatiza desde admisiones hasta
              el cumplimiento de la Ley 1620, permitiendo que los educadores se enfoquen en lo que
              realmente importa: formar a las nuevas generaciones.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className={`w-14 h-14 ${value.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <value.icon className={`w-7 h-7 ${value.iconColor}`} strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Equipo */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">Nuestro Equipo</h3>
          <p className="text-muted-foreground mb-8 text-sm">Profesionales dedicados a revolucionar la educación</p>
        </div>

        <div className="max-w-sm mx-auto mb-14">
          <div className="rounded-2xl border border-border/60 bg-card p-8 text-center shadow-soft">
            <img
              src="/halu-uploads/b65d18e6-c27c-41e1-8c79-9c68d460b305.png"
              alt="Equipo HALU"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-contain bg-muted/30 p-4 border-4 border-primary/20"
            />
            <h4 className="text-lg font-bold text-foreground mb-1">Equipo HALU</h4>
            <p className="text-primary font-medium text-sm mb-2">Fundadores y Desarrolladores</p>
            <p className="text-muted-foreground text-sm">
              Expertos en tecnología educativa con más de 10 años de experiencia
            </p>
          </div>
        </div>

        {/* Compromiso */}
        <div className="rounded-2xl bg-gradient-hero p-8 text-white text-center">
          <Users className="w-10 h-10 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-3">Nuestro Compromiso</h3>
          <p className="text-white/80 max-w-3xl mx-auto text-sm leading-relaxed">
            Estamos comprometidos con el éxito de cada institución educativa que confía en HALU.
            Trabajamos incansablemente para ofrecer la mejor tecnología, el mejor soporte y
            las mejores soluciones para la educación colombiana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

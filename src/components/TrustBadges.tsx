import { Shield, Clock, Award, Users, CheckCircle, Lock } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Datos protegidos",
      description: "Cifrado y respaldos",
      iconWrap: "bg-primary/10 text-primary ring-1 ring-primary/15",
    },
    {
      icon: Clock,
      title: "Soporte dedicado",
      description: "Equipo especializado",
      iconWrap: "bg-edu-blue/10 text-edu-blue ring-1 ring-edu-blue/15",
    },
    {
      icon: Award,
      title: "Calidad comprobada",
      description: "Procesos auditables",
      iconWrap: "bg-edu-purple/10 text-edu-purple ring-1 ring-edu-purple/20",
    },
    {
      icon: Users,
      title: "500+ instituciones",
      description: "En operación diaria",
      iconWrap: "bg-edu-orange/10 text-edu-orange ring-1 ring-edu-orange/20",
    },
    {
      icon: CheckCircle,
      title: "Implementación ágil",
      description: "En semanas, no meses",
      iconWrap: "bg-edu-green/10 text-edu-green ring-1 ring-edu-green/15",
    },
    {
      icon: Lock,
      title: "Cumplimiento normativo",
      description: "Ley 1620 y convivencia",
      iconWrap: "bg-muted text-muted-foreground ring-1 ring-border",
    },
  ];

  return (
    <section className="border-y border-border/80 bg-muted/30 py-14 dark:bg-muted/15">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Confianza</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Por qué las instituciones eligen HALU
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Una plataforma pensada para rectorías, coordinación académica y familias, con respaldo operativo y seguridad de la información.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl border border-border/80 bg-card p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <div
                className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${badge.iconWrap}`}
              >
                <badge.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-sm font-semibold leading-snug text-foreground">{badge.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
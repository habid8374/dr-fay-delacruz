import { Shield, Award, CheckCircle, Lock, Globe, Users } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "ISO 27001",
    subtitle: "Seguridad de la Información",
    description: "Certificación internacional en gestión de seguridad",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Lock,
    title: "SSL/TLS",
    subtitle: "Encriptación Avanzada",
    description: "Protección de datos con cifrado de 256 bits",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: CheckCircle,
    title: "GDPR",
    subtitle: "Protección de Datos",
    description: "Cumplimiento con normativas europeas de privacidad",
    iconBg: "bg-edu-purple/20",
    iconColor: "text-edu-purple",
  },
  {
    icon: Globe,
    title: "Cloud Security",
    subtitle: "Infraestructura Segura",
    description: "Servidores certificados en AWS con respaldos automáticos",
    iconBg: "bg-edu-orange/20",
    iconColor: "text-edu-orange",
  },
  {
    icon: Award,
    title: "Calidad Educativa",
    subtitle: "Ministerio de Educación",
    description: "Reconocimiento por innovación en tecnología educativa",
    iconBg: "bg-destructive/20",
    iconColor: "text-destructive",
  },
  {
    icon: Users,
    title: "Soporte 24/7",
    subtitle: "Certificación de Servicio",
    description: "Garantía de disponibilidad y tiempo de respuesta",
    iconBg: "bg-edu-blue/20",
    iconColor: "text-edu-blue",
  },
];

const guarantees = [
  { value: "30 días", label: "Garantía de satisfacción o devolvemos tu dinero" },
  { value: "99.9%", label: "Disponibilidad garantizada del sistema" },
  { value: "24/7", label: "Soporte técnico especializado" },
];

const Certifications = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-edu-green/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-edu-green mb-4">
            Confianza y seguridad
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certificaciones y Garantías
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tu tranquilidad es nuestra prioridad. HALU cumple con los más altos estándares de calidad y seguridad
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/60 bg-card p-5 shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 ${cert.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                  <cert.icon className={`w-5 h-5 ${cert.iconColor}`} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-0.5">{cert.title}</h3>
                  <p className="text-xs font-semibold text-muted-foreground mb-1.5">{cert.subtitle}</p>
                  <p className="text-sm text-muted-foreground/80">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee banner */}
        <div className="rounded-2xl bg-gradient-hero p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Garantía de Satisfacción</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((g) => (
              <div key={g.value}>
                <div className="text-3xl font-bold mb-2">{g.value}</div>
                <p className="text-white/75 text-sm">{g.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

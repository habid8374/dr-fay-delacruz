import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Bell, MessageCircle, Rocket, Code2, GraduationCap, Shield, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const FEATURES = [
  { icon: GraduationCap, label: "Gestión académica completa" },
  { icon: Shield,        label: "Convivencia y Ley 1620" },
  { icon: BarChart3,     label: "Reportes en tiempo real" },
  { icon: Code2,         label: "Facturación electrónica DIAN" },
];

const ComingSoon = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    toast({
      title: "¡Te avisaremos!",
      description: `Enviaremos la notificación a ${email} cuando lancemos.`,
    });
    setEmail("");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4 py-16">

      {/* Auras decorativas */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[480px] w-[700px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[320px] w-[420px] rounded-full bg-edu-purple/10 blur-[100px]" />
        <div className="absolute left-0 bottom-1/4 h-[260px] w-[360px] rounded-full bg-accent/8 blur-[90px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full text-center gap-8">

        {/* Logo */}
        <a href="/" aria-label="Volver al inicio">
          <img
            src="/halu-uploads/b65d18e6-c27c-41e1-8c79-9c68d460b305.png"
            alt="HALU Logo"
            className="h-14 w-auto mx-auto"
          />
        </a>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          <Rocket className="h-3.5 w-3.5" />
          Próximamente
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
            La plataforma escolar{" "}
            <span className="bg-gradient-to-r from-primary via-edu-blue-light to-accent bg-clip-text text-transparent">
              está en camino
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Estamos construyendo algo increíble para transformar la gestión de tu institución educativa.
            Nuestro equipo trabaja intensamente para traerte la mejor experiencia.
          </p>
        </div>

        {/* Feature chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {FEATURES.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm"
            >
              <f.icon className="h-4 w-4 text-primary shrink-0" strokeWidth={1.75} />
              {f.label}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/50" />

        {/* Notify form */}
        {!sent ? (
          <div className="w-full max-w-md space-y-3">
            <p className="text-sm font-medium text-foreground">
              Recibe un aviso cuando lancemos
            </p>
            <form onSubmit={handleNotify} className="flex gap-2">
              <Input
                type="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-card/60 border-border/60 backdrop-blur-sm"
              />
              <Button type="submit" className="shrink-0 gap-2">
                <Bell className="h-4 w-4" />
                Avisar
              </Button>
            </form>
            <p className="text-xs text-muted-foreground/60">Sin spam. Solo un correo cuando esté listo.</p>
          </div>
        ) : (
          <div className="rounded-xl border border-accent/25 bg-accent/10 px-6 py-4 text-sm text-accent font-medium">
            ✓ Perfecto, te avisaremos en cuanto lancemos.
          </div>
        )}

        {/* WhatsApp CTA */}
        <Button
          variant="outline"
          size="lg"
          className="border-border/60 gap-2 hover:bg-muted/30"
          onClick={() =>
            window.open(
              "https://wa.me/573246868538?text=Hola, quiero saber cuándo estará lista la plataforma HALU",
              "_blank"
            )
          }
        >
          <MessageCircle className="h-5 w-5 text-accent" />
          Preguntar por WhatsApp
        </Button>

        {/* Back link */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a la landing
        </button>

      </div>

      {/* Footer mini */}
      <p className="absolute bottom-6 text-xs text-muted-foreground/50">
        © {new Date().getFullYear()} haluplataform.com · Colombia
      </p>
    </div>
  );
};

export default ComingSoon;

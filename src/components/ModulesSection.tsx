import {
  Users,
  GraduationCap,
  Shield,
  BarChart3,
  FileSpreadsheet,
  CreditCard,
  QrCode,
  ScanLine,
  Brain,
  SearchCheck,
  AlertTriangle,
  Mail,
  Scissors,
  Receipt,
  TrendingUp,
  Banknote,
  ClipboardCheck,
  HeartHandshake,
  AlertOctagon,
  BookOpen
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimateOnScroll } from "./AnimateOnScroll";

const ModulesSection = () => {
  const modules = [
    {
      id: "admissions",
      title: "Módulo de Admisiones y Gestión",
      icon: Users,
      color: "text-edu-blue",
      bgColor: "bg-edu-blue/10",
      borderColor: "border-edu-blue/20",
      benefits: [
        {
          icon: FileSpreadsheet,
          title: "Carga Masiva Inteligente",
          description: "Importación automática de aspirantes y docentes desde Excel con validación de datos."
        },
        {
          icon: CreditCard,
          title: "Pagos Integrados",
          description: "Procesamiento automático de pagos con Mercado Pago y seguimiento en tiempo real."
        },
        {
          icon: QrCode,
          title: "Carnets Digitales",
          description: "Generación automática de carnets con código QR para identificación rápida."
        },
        {
          icon: ScanLine,
          title: "Control de Asistencia Moderno",
          description: "Sistema de escáner QR para registro de asistencia sin contacto."
        }
      ]
    },
    {
      id: "academic",
      title: "Módulo Académico",
      icon: GraduationCap,
      color: "text-edu-green",
      bgColor: "bg-edu-green/10",
      borderColor: "border-edu-green/20",
      benefits: [
        {
          icon: BarChart3,
          title: "Gestión de Calificaciones",
          description: "Registro y seguimiento automatizado de calificaciones y asistencia estudiantil."
        },
        {
          icon: Brain,
          title: "Planificación con IA",
          description: "Algoritmos inteligentes para optimización automática de horarios y clases."
        },
        {
          icon: SearchCheck,
          title: "Detección de Plagio",
          description: "Análisis automático de trabajos estudiantiles contra fuentes web e internas."
        },
        {
          icon: FileSpreadsheet,
          title: "Cuestionarios Digitales",
          description: "Creación y evaluación automática de exámenes y cuestionarios online."
        }
      ]
    },
    {
      id: "behavior",
      title: "Módulo de Convivencia - Halu Sentinel",
      icon: Shield,
      color: "text-edu-purple",
      bgColor: "bg-edu-purple/10",
      borderColor: "border-edu-purple/20",
      benefits: [
        {
          icon: AlertTriangle,
          title: "Seguimiento Comportamental",
          description: "Monitoreo integral del comportamiento estudiantil con alertas automáticas."
        },
        {
          icon: FileSpreadsheet,
          title: "Registro de Incidentes",
          description: "Documentación detallada de incidentes con seguimiento de resolución."
        },
        {
          icon: Shield,
          title: "Cumplimiento Ley 1620",
          description: "Implementación automática de la Ruta de Convivencia Escolar."
        },
        {
          icon: BarChart3,
          title: "Análisis Predictivo",
          description: "Identificación temprana de riesgos para intervención preventiva."
        }
      ]
    },
    {
      id: "reports",
      title: "Módulo de Reportes y Comunicación",
      icon: BarChart3,
      color: "text-edu-orange",
      bgColor: "bg-edu-orange/10",
      borderColor: "border-edu-orange/20",
      benefits: [
        {
          icon: BarChart3,
          title: "Reportes Avanzados",
          description: "Generación automática de reportes académicos, de gestión y disciplinarios."
        },
        {
          icon: Mail,
          title: "Comunicación Automatizada",
          description: "Correos modelo personalizados para familias y acudientes."
        },
        {
          icon: Brain,
          title: "Análisis Inteligente",
          description: "Insights y recomendaciones basadas en datos para toma de decisiones."
        },
        {
          icon: Shield,
          title: "Trazabilidad Completa",
          description: "Seguimiento integral del estudiante desde ingreso hasta graduación."
        }
      ]
    },
    {
      id: "preventive",
      title: "Módulo de Corte Preventivo",
      icon: HeartHandshake,
      color: "text-edu-green",
      bgColor: "bg-edu-green/10",
      borderColor: "border-edu-green/20",
      benefits: [
        {
          icon: AlertOctagon,
          title: "Alertas Preventivas Tempranas",
          description: "Detección automática de patrones de riesgo académico, conductual o asistencia antes de que escalen a situaciones críticas."
        },
        {
          icon: ClipboardCheck,
          title: "Planes de Intervención",
          description: "Generación de planes personalizados de acompañamiento para estudiantes en riesgo, con seguimiento de compromisos y metas."
        },
        {
          icon: HeartHandshake,
          title: "Red de Apoyo Estudiantil",
          description: "Coordinación entre docentes, psicoorientadores y familias en tiempo real para una intervención integral y oportuna."
        },
        {
          icon: BookOpen,
          title: "Registro de Compromisos",
          description: "Documentación formal de compromisos académicos y convivenciales con firmas digitales y seguimiento periódico."
        }
      ]
    },
    {
      id: "finances",
      title: "Módulo de Finanzas",
      icon: Banknote,
      color: "text-edu-purple",
      bgColor: "bg-edu-purple/10",
      borderColor: "border-edu-purple/20",
      benefits: [
        {
          icon: Receipt,
          title: "Facturación Electrónica",
          description: "Emisión de facturas electrónicas DIAN-validadas directamente desde la plataforma. Disponible como módulo adicional con costo aparte.",
          badge: "Pago adicional"
        },
        {
          icon: CreditCard,
          title: "Gestión de Cartera",
          description: "Control detallado de pagos pendientes, abonos parciales y estado de cuenta de cada familia con notificaciones automáticas."
        },
        {
          icon: TrendingUp,
          title: "Informes Financieros",
          description: "Dashboard financiero con ingresos, egresos, proyecciones y reportes exportables para rectoría y contabilidad."
        },
        {
          icon: Scissors,
          title: "Descuentos y Becas",
          description: "Administración de descuentos por hermanos, convenios, becas y beneficios especiales con cálculo automático de saldos."
        }
      ]
    }
  ];

  return (
    <section id="modules" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Módulos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Módulos del Software Escolar HALU
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cuatro módulos integrados que transforman cada aspecto de la gestión educativa
            en procesos inteligentes y automatizados. Nuestro software escolar está diseñado
            específicamente para colegios en Colombia, cumpliendo con todas las normativas
            educativas y adaptándose a las necesidades únicas de cada institución.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-8">
          {modules.map((module, moduleIndex) => (
            <AnimateOnScroll key={module.id} delay={moduleIndex * 0.1}>
              <Card className={`${module.borderColor} shadow-soft hover:shadow-medium transition-all duration-300`}>
                <CardHeader className={`${module.bgColor} rounded-t-lg`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-background shadow-soft`}>
                      <module.icon className={`w-8 h-8 ${module.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{module.title}</CardTitle>
                      <CardDescription className="text-base">
                        Funcionalidades especializadas para optimizar cada proceso educativo
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {module.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex gap-4 p-4 rounded-lg bg-background shadow-soft">
                        <div className={`p-2 rounded-lg ${module.bgColor} shrink-0 self-start`}>
                          <benefit.icon className={`w-5 h-5 ${module.color}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h4 className="font-semibold">{benefit.title}</h4>
                            {(benefit as any).badge && (
                              <span className="rounded-full bg-edu-orange/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-edu-orange">
                                {(benefit as any).badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;

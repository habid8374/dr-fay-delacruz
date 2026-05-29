import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "./AnimatedCounter";

const TestimonialsSection = () => {
  const stats = [
    { value: "500+", label: "Instituciones Activas", color: "text-primary" },
    { value: "50K+", label: "Estudiantes Gestionados", color: "text-accent" },
    { value: "98%", label: "Satisfacción Cliente", color: "text-edu-purple" },
    { value: "24/7", label: "Soporte Técnico", color: "text-edu-orange" },
  ];

  const testimonials = [
    {
      name: "María Elena Rodríguez",
      position: "Rectora",
      institution: "Colegio San Patricio",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "Desde que implementamos haluplataform, hemos reducido en un 70% el tiempo dedicado a procesos administrativos. El módulo de convivencia nos ha permitido cumplir perfectamente con la Ley 1620 y mejorar significativamente el ambiente escolar.",
      results: "70% menos tiempo administrativo"
    },
    {
      name: "Carlos Andrés Méndez",
      position: "Director Académico",
      institution: "Institución Educativa La Esperanza",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "La integración de todos los módulos en una sola plataforma ha revolucionado nuestra gestión. La planificación automática con IA y la detección de plagio han elevado nuestra calidad académica a otro nivel.",
      results: "Mejora del 85% en eficiencia académica"
    },
    {
      name: "Ana Sofía Herrera",
      position: "Coordinadora Administrativa",
      institution: "Colegio Bilingüe Horizonte",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "Los reportes automáticos y la comunicación con padres de familia han transformado nuestra operación. Ahora somos una institución más transparente y eficiente. Los padres valoran mucho la comunicación proactiva.",
      results: "95% satisfacción de padres de familia"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-edu-orange/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-edu-orange mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Testimonios de{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">Éxito Educativo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra cómo las instituciones educativas han transformado su gestión
            y mejorado sus resultados con haluplataform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div
                  className="flex items-center gap-1 mb-4"
                  role="img"
                  aria-label={`Calificación: ${testimonial.rating} de 5 estrellas`}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-edu-orange text-edu-orange" />
                  ))}
                </div>
                
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
                    <div className="text-sm font-semibold text-accent">
                      Resultado destacado:
                    </div>
                    <div className="text-sm text-accent">
                      {testimonial.results}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-primary">{testimonial.institution}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className="text-sm text-muted-foreground">Instituciones Activas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              <AnimatedCounter end={50} suffix="K+" />
            </div>
            <div className="text-sm text-muted-foreground">Estudiantes Gestionados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-edu-purple mb-2">
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-edu-orange mb-2">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">Soporte Técnico</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
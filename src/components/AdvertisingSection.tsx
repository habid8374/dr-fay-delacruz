import { useState } from "react";
import { ExternalLink, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ads = [
  {
    id: 1,
    title: "Uniformes Escolares Premium",
    company: "Confecciones Educativas S.A.S",
    description: "Los mejores uniformes para tu institución. Calidad garantizada y precios especiales para colegios.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=200&fit=crop",
    link: "#",
    badge: "Patrocinado",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Mobiliario Escolar Moderno",
    company: "Muebles Educativos Ltda",
    description: "Pupitres, sillas y mobiliario ergonómico para aulas del siglo XXI. Financiación disponible.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=200&fit=crop",
    link: "#",
    badge: "Destacado",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Libros y Material Didáctico",
    company: "Editorial Conocimiento",
    description: "Textos escolares actualizados y material didáctico innovador para todas las materias.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop",
    link: "#",
    badge: "Nuevo",
    rating: 4.7,
  },
];

const AdvertisingSection = () => {
  const [currentAd, setCurrentAd] = useState(0);

  const next = () => setCurrentAd((p) => (p + 1) % ads.length);
  const prev = () => setCurrentAd((p) => (p - 1 + ads.length) % ads.length);

  const ad = ads[currentAd];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block rounded-full bg-edu-orange/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-edu-orange mb-3">
            Aliados
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Servicios Recomendados
          </h2>
          <p className="text-muted-foreground text-sm">
            Empresas aliadas que complementan tu gestión educativa
          </p>
        </div>

        {/* Ad card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border/60 bg-card shadow-medium overflow-hidden">
            <div className="md:flex">
              <div className="md:w-5/12 h-48 md:h-auto overflow-hidden">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-7/12 p-6">
                {/* Badge + rating */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="rounded-full bg-edu-orange/15 px-2.5 py-0.5 text-xs font-semibold text-edu-orange">
                    {ad.badge}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-edu-orange fill-current" />
                    <span className="text-xs text-muted-foreground">{ad.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1">{ad.title}</h3>
                <p className="text-xs font-medium text-muted-foreground mb-3">{ad.company}</p>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{ad.description}</p>

                <div className="flex items-center justify-between">
                  <Button
                    size="sm"
                    className="bg-edu-orange hover:bg-edu-orange/90 text-white"
                    onClick={() => window.open(ad.link, "_blank")}
                  >
                    Ver más
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </Button>

                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="w-8 h-8 rounded-full border border-border/60 bg-muted/30 hover:bg-muted/60 flex items-center justify-center text-foreground transition-colors"
                      aria-label="Anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={next}
                      className="w-8 h-8 rounded-full border border-border/60 bg-muted/30 hover:bg-muted/60 flex items-center justify-center text-foreground transition-colors"
                      aria-label="Siguiente"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {ads.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentAd(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentAd ? "w-6 bg-edu-orange" : "w-2 bg-border/60 hover:bg-muted-foreground/40"
                }`}
                aria-label={`Ver anuncio ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Advertise CTA */}
        <div className="text-center mt-10">
          <p className="text-sm font-semibold text-muted-foreground mb-3">
            ¿Quieres anunciar tu negocio aquí?
          </p>
          <Button
            onClick={() =>
              window.open(
                "https://wa.me/573246868538?text=Hola, me interesa anunciar mi negocio en HALU",
                "_blank"
              )
            }
            className="bg-gradient-to-r from-edu-orange to-destructive hover:opacity-90 text-white font-bold px-8"
          >
            ¡Anuncia aquí!
          </Button>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Miles de educadores verán tu anuncio
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingSection;

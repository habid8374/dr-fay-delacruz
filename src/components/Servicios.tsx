"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Smile, Microscope, Shield, Droplets, Star } from "lucide-react";

const servicios = [
  {
    icon: Sparkles,
    title: "Aclaramiento Dental",
    desc: "Recupera el brillo natural de tu sonrisa con técnicas avanzadas de aclaramiento.",
  },
  {
    icon: Smile,
    title: "Diseño de Sonrisa",
    desc: "Sonrisas perfectas diseñadas para ti. Cada detalle pensado para tu armonía facial.",
  },
  {
    icon: Microscope,
    title: "Microdiseño",
    desc: "Detalles que marcan la diferencia. Precisión al milímetro para resultados impecables.",
  },
  {
    icon: Shield,
    title: "Prótesis Fija y Removible",
    desc: "Soluciones permanentes y funcionales para recuperar la integridad de tu boca.",
  },
  {
    icon: Droplets,
    title: "Limpieza Profunda",
    desc: "Higiene dental de alto nivel para mantener tu salud bucal en óptimas condiciones.",
  },
  {
    icon: Star,
    title: "Blanqueamiento",
    desc: "Hasta 8 tonos más blanco en una sola sesión. Resultados inmediatos y duraderos.",
  },
];

export default function Servicios() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-[#c9a84c] text-xs font-light tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Nuestros Servicios
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-white text-4xl md:text-5xl font-bold leading-tight"
          >
            Tratamientos de{" "}
            <span className="italic text-[#c9a84c]">alto nivel</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl cursor-default transition-all duration-400 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #111111 0%, #1a1a2e 100%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(201,168,76,0.35)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px rgba(201,168,76,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(201,168,76,0.12)" }}
                >
                  <Icon size={22} className="text-[#c9a84c]" />
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-white text-xl font-semibold mb-3"
                >
                  {s.title}
                </h3>
                <p
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/50 text-sm font-light leading-relaxed"
                >
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

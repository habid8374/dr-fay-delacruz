"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonios = [
  {
    name: "Valentina Ramos",
    initials: "VR",
    text: "El Dr. Fay transformó por completo mi sonrisa. Llegué con inseguridades y salí con una confianza que nunca había sentido. El trato fue excepcional desde el primer momento.",
    tratamiento: "Diseño de Sonrisa",
  },
  {
    name: "Carlos Mendoza",
    initials: "CM",
    text: "Increíble el resultado del blanqueamiento. En una sola sesión vi la diferencia. Es un profesional detallista que se preocupa genuinamente por sus pacientes.",
    tratamiento: "Blanqueamiento",
  },
  {
    name: "Daniela Herrera",
    initials: "DH",
    text: "Llevaba años evitando sonreír en fotos. Después del tratamiento con el Dr. Fay, ahora es lo primero que hago. Totalmente recomendado para cualquiera que quiera cambiar su vida.",
    tratamiento: "Aclaramiento Dental",
  },
];

export default function Testimonios() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-28"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0d0d20 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-[#c9a84c] text-xs font-light tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Testimonios
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-white text-4xl md:text-5xl font-bold leading-tight"
          >
            Lo que dicen{" "}
            <span className="italic text-[#c9a84c]">nuestros pacientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 rounded-2xl flex flex-col gap-5"
              style={{
                background: "linear-gradient(135deg, #131320 0%, #1a1a2e 100%)",
                border: "1px solid rgba(201,168,76,0.12)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#c9a84c] fill-[#c9a84c]" />
                ))}
              </div>

              {/* Quote */}
              <p
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/70 text-sm font-light leading-relaxed flex-1"
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-[#c9a84c] text-xs font-bold"
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white text-sm font-medium"
                  >
                    {t.name}
                  </p>
                  <p
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-[#c9a84c] text-xs font-light"
                  >
                    {t.tratamiento}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

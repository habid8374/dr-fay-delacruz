"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const badges = ["Odontología Integral", "Estética Dental", "Barranquilla"];

export default function SobreMi() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sobre-mi"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #111122 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center" ref={ref}>
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-block text-[#c9a84c] text-xs font-light tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Sobre mí
          </span>

          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Pasión por la{" "}
            <span className="italic text-[#c9a84c]">salud bucal</span>
          </h2>

          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-white/60 text-base font-light leading-relaxed mb-8"
          >
            Soy el Dr. Fay De la Cruz Acuña, odontólogo comprometido con transformar
            sonrisas en Barranquilla. Mi enfoque combina precisión técnica con estética
            avanzada para que cada paciente obtenga resultados que superen sus expectativas.
          </p>

          {/* Quote */}
          <div
            className="relative pl-6 mb-8"
            style={{ borderLeft: "2px solid #c9a84c" }}
          >
            <p
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-white/80 text-lg italic leading-relaxed"
            >
              "Cada sonrisa merece ser cuidada con tiempo, respeto y dedicación"
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {badges.map((b) => (
              <span
                key={b}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  border: "1px solid rgba(201,168,76,0.4)",
                  background: "rgba(201,168,76,0.08)",
                }}
                className="text-[#c9a84c] text-xs font-light tracking-wider uppercase px-4 py-2 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Doctor photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div
            className="w-72 h-96 rounded-3xl overflow-hidden relative"
            style={{
              border: "1px solid rgba(201,168,76,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <Image
              src="/doctor-sobre-mi.jpg"
              alt="Dr. Fay De la Cruz Acuña - Universidad Metropolitana"
              fill
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

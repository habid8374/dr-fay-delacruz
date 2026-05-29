"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/573053394024";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "#0a0a0a",
      }}
    >
      {/* Foto del doctor — posición absoluta, mitad derecha, altura completa */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-0 right-0 w-full md:w-[55%] h-full"
      >
        <Image
          src="/doctor-hero.jpg"
          alt="Dr. Fay De la Cruz Acuña"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Fusión izquierda — fuerte, se mezcla con el texto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.85) 20%, rgba(10,10,10,0.4) 50%, transparent 80%)",
          }}
        />
        {/* Fusión inferior */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.5) 20%, transparent 50%)",
          }}
        />
        {/* Fusión superior (navbar) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #0a0a0a 0%, transparent 20%)",
          }}
        />
        {/* Fusión derecha */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, #0a0a0a 0%, transparent 25%)",
          }}
        />
      </motion.div>

      {/* Contenido de texto — encima de la foto */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-[#c9a84c] text-sm font-light tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Odontología Integral y Estética
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              Transforma tu{" "}
              <span className="italic text-[#c9a84c]">sonrisa,</span>
              <br />
              transforma tu vida
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-white/60 text-lg font-light leading-relaxed mb-10"
            >
              Odontología integral y estética en Barranquilla. Resultados
              que transforman tu confianza y elevan tu calidad de vida.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e4c06a] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] text-sm"
              >
                <FaWhatsapp size={18} />
                Agenda tu cita
              </a>
              <a
                href="#servicios"
                className="flex items-center gap-2 border border-white/30 hover:border-[#c9a84c] text-white hover:text-[#c9a84c] font-light px-8 py-4 rounded-full transition-all duration-300 text-sm"
              >
                Ver servicios
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Logo firma — watermark elegante sobre la foto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
        className="absolute bottom-16 right-8 z-10 pointer-events-none hidden md:block"
      >
        <Image
          src="/logosinfondo.png"
          alt="Dr. Fay De la Cruz"
          width={220}
          height={120}
          style={{ width: "auto", height: "120px", opacity: 0.18, filter: "invert(1)" }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-10"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/573000000000";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a3e 60%, #0a0a0a 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full grid md:grid-cols-2 gap-0 items-center">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
            className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-md"
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

        {/* Doctor photo */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative h-[85vh] min-h-[600px]"
        >
          <Image
            src="/doctor-hero.jpg"
            alt="Dr. Fay De la Cruz Acuña"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Difuminado izquierdo fuerte — se funde con el texto */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.7) 35%, rgba(10,10,10,0.1) 65%, transparent 100%)",
            }}
          />
          {/* Difuminado inferior */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.4) 25%, transparent 55%)",
            }}
          />
          {/* Difuminado superior */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 25%)",
            }}
          />
          {/* Difuminado derecho */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to left, #0a0a0a 0%, transparent 30%)",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
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

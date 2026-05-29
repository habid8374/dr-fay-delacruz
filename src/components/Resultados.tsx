"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const casos = [
  {
    label: "Prótesis Completa",
    desc: "Rehabilitación oral completa. Funcionalidad y estética recuperadas en su totalidad.",
    antes: "/antes-1.jpg",
    despues: "/despues-1.jpg",
  },
  {
    label: "Aclaramiento Dental",
    desc: "Recuperación del tono natural con tratamiento personalizado y sin sensibilidad.",
    antes: "/antes-2.jpg",
    despues: "/despues-2.jpg",
  },
  {
    label: "Blanqueamiento",
    desc: "Resultado inmediato y visible. Dientes notablemente más blancos en una sola sesión.",
    antes: "/antes-3.jpg",
    despues: "/despues-3.jpg",
  },
];

function BeforeAfterCard({
  label,
  desc,
  antes,
  despues,
  index,
  inView,
}: {
  label: string;
  desc: string;
  antes: string;
  despues: string;
  index: number;
  inView: boolean;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const cardRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(95, Math.max(5, pct)));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Slider area */}
      <div
        ref={cardRef}
        className="relative h-64 cursor-ew-resize select-none overflow-hidden"
        onMouseDown={() => { dragging.current = true; }}
        onMouseMove={(e) => { if (dragging.current) handleMove(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchStart={() => { dragging.current = true; }}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={() => { dragging.current = false; }}
      >
        {/* Antes — foto real */}
        <div className="absolute inset-0">
          <Image
            src={antes}
            alt="Antes"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Después — foto real con clip */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={despues}
            alt="Después"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Línea divisora */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#c9a84c] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#c9a84c] flex items-center justify-center shadow-xl">
            <span className="text-black text-sm font-bold">⟷</span>
          </div>
        </div>

        {/* Etiquetas */}
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <span
            style={{ fontFamily: "'Inter', sans-serif", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            className="text-white/90 text-[10px] tracking-widest uppercase px-2 py-1 rounded"
          >
            Antes
          </span>
        </div>
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <span
            style={{ fontFamily: "'Inter', sans-serif", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            className="text-white/90 text-[10px] tracking-widest uppercase px-2 py-1 rounded"
          >
            Después
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-white text-lg font-semibold mb-2"
        >
          {label}
        </h3>
        <p
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-white/50 text-sm font-light leading-relaxed"
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Resultados() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resultados" className="py-28 bg-[#0a0a0a]">
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
            Transformaciones Reales
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-white text-4xl md:text-5xl font-bold leading-tight"
          >
            Resultados que{" "}
            <span className="italic text-[#c9a84c]">hablan por sí solos</span>
          </h2>
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-white/50 text-sm mt-4 font-light"
          >
            Arrastra el slider para ver la transformación
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {casos.map((c, i) => (
            <BeforeAfterCard key={c.label} {...c} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

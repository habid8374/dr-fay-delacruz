"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const casos = [
  {
    label: "Diseño de Sonrisa",
    desc: "Transformación completa con carillas de porcelana y blanqueamiento profesional.",
  },
  {
    label: "Blanqueamiento",
    desc: "8 tonos más claro en una sola sesión con tecnología LED de última generación.",
  },
  {
    label: "Aclaramiento",
    desc: "Recuperación del tono natural con tratamiento personalizado y sin sensibilidad.",
  },
];

function BeforeAfterCard({
  label,
  desc,
  index,
  inView,
}: {
  label: string;
  desc: string;
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
        className="relative h-56 cursor-ew-resize select-none overflow-hidden"
        onMouseDown={() => { dragging.current = true; }}
        onMouseMove={(e) => { if (dragging.current) handleMove(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* Before (gray) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%)" }}
        >
          <span
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-white/40 text-xs tracking-widest uppercase"
          >
            Antes
          </span>
        </div>

        {/* After (white/bright) */}
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #f0f0f0 0%, #ffffff 100%)" }}
          />
          <span
            style={{ fontFamily: "'Inter', sans-serif", position: "relative" }}
            className="text-black/40 text-xs tracking-widest uppercase"
          >
            Después
          </span>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#c9a84c] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center shadow-lg"
          >
            <span className="text-black text-xs font-bold">⟷</span>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(4px)",
            }}
            className="text-white/80 text-[10px] tracking-widest uppercase px-2 py-1 rounded"
          >
            Antes
          </span>
        </div>
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(4px)",
            }}
            className="text-white/80 text-[10px] tracking-widest uppercase px-2 py-1 rounded"
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

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573000000000";

const info = [
  { icon: MapPin, text: "Barranquilla, Colombia" },
  { icon: Phone, text: "+57 300 000 0000" },
  { icon: Clock, text: "Lun – Sáb: 8:00am – 6:00pm" },
];

export default function Contacto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contacto"
      className="py-28"
      style={{
        background: "linear-gradient(135deg, #1a1a3e 0%, #0a0a0a 50%, #1a1a3e 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-block text-[#c9a84c] text-xs font-light tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Contáctanos
          </span>

          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            ¿Listo para transformar{" "}
            <span className="italic text-[#c9a84c]">tu sonrisa?</span>
          </h2>

          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-white/60 text-base font-light leading-relaxed mb-10 max-w-lg mx-auto"
          >
            Agenda tu cita hoy. En minutos podrás hablar directamente con nosotros
            y comenzar el camino hacia la sonrisa que siempre quisiste.
          </p>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-black font-semibold text-base transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #25d366 0%, #128c4e 100%)",
              boxShadow: "0 0 40px rgba(37,211,102,0.35)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <FaWhatsapp size={24} />
            Agenda tu cita por WhatsApp
          </motion.a>

          {/* Info row */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {info.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={16} className="text-[#c9a84c]" />
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/50 text-sm font-light"
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

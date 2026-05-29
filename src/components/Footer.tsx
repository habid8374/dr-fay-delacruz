import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/573053394024";

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contacto", href: "#contacto" },
];

const legalLinks = [
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Términos de servicio", href: "/terminos" },
  { label: "Política de cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-white text-xl font-semibold italic"
              >
                Dr. Fay De la Cruz
              </span>
              <br />
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-[#c9a84c] text-[10px] font-light tracking-[0.25em] uppercase"
              >
                Odontología
              </span>
            </div>
            <p
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-white/40 text-sm font-light leading-relaxed max-w-xs"
            >
              Odontología integral y estética en Barranquilla, Colombia.
              Transformamos sonrisas, transformamos vidas.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-white text-sm font-medium tracking-wider uppercase mb-5"
            >
              Links rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/40 hover:text-[#c9a84c] text-sm font-light transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-white text-sm font-medium tracking-wider uppercase mb-5"
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/40 hover:text-[#c9a84c] text-sm font-light transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-white text-sm font-medium tracking-wider uppercase mb-5"
            >
              Redes sociales
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://instagram.com/dr.fay_delacruz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-[#c9a84c] transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-[#25d366] transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-[#c9a84c] transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
            </div>
            <p
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-[#c9a84c] text-sm font-light"
            >
              @dr.fay_delacruz
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-white/25 text-xs font-light text-center sm:text-left"
          >
            © 2026 Dr. Fay De la Cruz Acuña — Odontología Integral y Estética
          </p>
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-white/20 text-xs font-light"
          >
            Barranquilla, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}

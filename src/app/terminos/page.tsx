export const metadata = {
  title: "Términos de Servicio | Dr. Fay De la Cruz",
  description: "Términos y condiciones de uso del sitio web conforme a la legislación colombiana.",
};

export default function Terminos() {
  return (
    <main className="min-h-screen" style={{ background: "#050505" }}>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-white text-3xl font-semibold italic mb-2"
        >
          Términos de Servicio
        </h1>
        <p
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#c9a84c] text-xs tracking-widest uppercase mb-10"
        >
          Legislación colombiana
        </p>

        <div
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-white/60 text-sm font-light leading-relaxed space-y-8"
        >
          <section>
            <h2 className="text-white text-base font-medium mb-3">1. Aceptación</h2>
            <p>
              Al acceder y utilizar este sitio web, usted acepta los presentes Términos de Servicio. Si no está de acuerdo, le pedimos no continuar navegando.
            </p>
          </section>

          <section>
            <h2 className="text-white text-base font-medium mb-3">2. Naturaleza del sitio</h2>
            <p>
              Este sitio es de carácter informativo y tiene como propósito presentar los servicios odontológicos de la Dra. Fay De la Cruz Acuña. La información contenida no constituye diagnóstico médico ni reemplaza la consulta profesional presencial.
            </p>
          </section>

          <section>
            <h2 className="text-white text-base font-medium mb-3">3. Propiedad intelectual</h2>
            <p>
              Todos los contenidos de este sitio (textos, imágenes, diseño) son propiedad de la Dra. Fay De la Cruz Acuña o de sus respectivos titulares, protegidos por la Ley 23 de 1982 sobre derechos de autor en Colombia. Queda prohibida su reproducción sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-white text-base font-medium mb-3">4. Uso permitido</h2>
            <p>El usuario se compromete a utilizar el sitio únicamente con fines lícitos y a no:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Realizar actividades que dañen, deshabiliten o sobrecarguen el sitio.</li>
              <li>Intentar acceder a áreas no autorizadas.</li>
              <li>Publicar o transmitir contenido ilegal, ofensivo o engañoso.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-base font-medium mb-3">5. Limitación de responsabilidad</h2>
            <p>
              La Dra. Fay De la Cruz Acuña no será responsable por daños derivados del uso incorrecto del sitio, interrupciones del servicio o información desactualizada. La disponibilidad del sitio no está garantizada de forma continua.
            </p>
          </section>

          <section>
            <h2 className="text-white text-base font-medium mb-3">6. Ley aplicable</h2>
            <p>
              Estos términos se rigen por la legislación vigente en la República de Colombia. Cualquier controversia se someterá a los tribunales competentes de la ciudad de Barranquilla.
            </p>
          </section>

          <p className="text-white/30 text-xs pt-4">
            Última actualización: mayo 2026
          </p>
        </div>

        <a
          href="/"
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="inline-block mt-12 text-[#c9a84c] text-sm hover:underline"
        >
          ← Volver al inicio
        </a>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Política de Privacidad | Dr. Fay De la Cruz",
  description: "Política de privacidad conforme a la Ley 1581 de 2012 de protección de datos personales en Colombia.",
};

export default function Privacidad() {
  return (
    <main className="min-h-screen" style={{ background: "#050505" }}>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-white text-3xl font-semibold italic mb-2"
        >
          Política de Privacidad
        </h1>
        <p
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#c9a84c] text-xs tracking-widest uppercase mb-10"
        >
          Ley 1581 de 2012 — Colombia
        </p>

        <div
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-white/60 text-sm font-light leading-relaxed space-y-8"
        >
          <section>
            <h2 className="text-white text-base font-medium mb-3">1. Responsable del tratamiento</h2>
            <p>
              La Dra. Fay De la Cruz Acuña, con consultorio en Barranquilla, Colombia, es la responsable del tratamiento de los datos personales recopilados a través de este sitio web y sus canales de comunicación.
            </p>
          </section>

          <section>
            <h2 className="text-white text-base font-medium mb-3">2. Datos recopilados</h2>
            <p>
              Recopilamos únicamente los datos que usted nos proporciona voluntariamente: nombre completo, número de teléfono/WhatsApp y motivo de consulta. No recopilamos datos sensibles de salud a través de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-white text-base font-medium mb-3">3. Finalidad del tratamiento</h2>
            <p>Sus datos son usados exclusivamente para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Responder solicitudes de citas y consultas.</li>
              <li>Contactarle para confirmar o agendar citas odontológicas.</li>
              <li>Enviar información relevante sobre nuestros servicios, si usted lo autoriza.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-base font-medium mb-3">4. Base legal</h2>
            <p>
              El tratamiento se realiza con base en su consentimiento libre, previo, expreso e informado, conforme a los artículos 3 y 9 de la Ley 1581 de 2012 y el Decreto 1377 de 2013.
            </p>
          </section>

          <section>
            <h2 className="text-white text-base font-medium mb-3">5. Sus derechos</h2>
            <p>Como titular de datos personales usted tiene derecho a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Conocer, actualizar y rectificar sus datos.</li>
              <li>Solicitar la supresión de sus datos.</li>
              <li>Revocar el consentimiento otorgado.</li>
              <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-base font-medium mb-3">6. Contacto</h2>
            <p>
              Para ejercer sus derechos o cualquier consulta sobre privacidad, puede escribirnos a través de WhatsApp:{" "}
              <a href="https://wa.me/573053394024" className="text-[#c9a84c] hover:underline">+57 305 339 4024</a>.
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

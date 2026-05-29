export const metadata = {
  title: "Política de Cookies | Dr. Fay De la Cruz",
  description: "Política de cookies del sitio web. Solo utilizamos cookies técnicas esenciales.",
};

export default function Cookies() {
  return (
    <main className="min-h-screen" style={{ background: "#050505" }}>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-white text-3xl font-semibold italic mb-2"
        >
          Política de Cookies
        </h1>
        <p
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#c9a84c] text-xs tracking-widest uppercase mb-10"
        >
          Solo cookies técnicas esenciales
        </p>

        <div
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-white/60 text-sm font-light leading-relaxed space-y-8"
        >
          <section>
            <h2 className="text-white text-base font-medium mb-3">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo para recordar preferencias o garantizar el funcionamiento técnico del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-white text-base font-medium mb-3">Cookies que utilizamos</h2>
            <p>
              Este sitio web utiliza <strong className="text-white/80">únicamente cookies técnicas esenciales</strong>, necesarias para el funcionamiento básico del sitio. No utilizamos cookies de seguimiento, analíticas de terceros ni cookies publicitarias.
            </p>
            <div className="mt-4 rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                    <th className="text-left p-3 text-white/60 font-medium">Cookie</th>
                    <th className="text-left p-3 text-white/60 font-medium">Tipo</th>
                    <th className="text-left p-3 text-white/60 font-medium">Finalidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <td className="p-3 text-white/50">__session</td>
                    <td className="p-3 text-white/50">Técnica</td>
                    <td className="p-3 text-white/50">Gestión de sesión del navegador</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-white text-base font-medium mb-3">Cookies de terceros</h2>
            <p>
              No instalamos cookies de terceros. Si accede a nuestro WhatsApp o Instagram a través de los enlaces del sitio, esas plataformas pueden establecer sus propias cookies bajo sus respectivas políticas de privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-white text-base font-medium mb-3">Control de cookies</h2>
            <p>
              Puede configurar su navegador para rechazar o eliminar cookies. Sin embargo, desactivar las cookies técnicas puede afectar el funcionamiento del sitio. Consulte la ayuda de su navegador para más información.
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

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Políticas de Privacidad</h1>
          <p className="text-muted-foreground">haluplataform.com</p>
          <p className="text-sm text-muted-foreground mt-2">Última actualización: Agosto 2024</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8">
          <div className="bg-card border rounded-lg p-6">
            <p className="text-foreground">
              En haluplataform.com, valoramos y respetamos la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos la información personal que nos proporcionas al utilizar nuestro sitio web y plataforma SaaS, orientada a instituciones educativas.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Información que recopilamos</h2>
            <p className="mb-3">Recopilamos información personal y técnica con los siguientes fines:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Datos de contacto:</strong> nombre, correo electrónico, número telefónico, institución educativa.</li>
              <li><strong>Datos institucionales:</strong> nombre de la institución, número de estudiantes, ubicación.</li>
              <li><strong>Información de uso:</strong> comportamiento de navegación, páginas visitadas, formularios completados.</li>
              <li><strong>Datos ingresados voluntariamente</strong> en el sistema (estudiantes, docentes, notas, etc.).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Uso de la información</h2>
            <p className="mb-3">La información recolectada es utilizada para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proveer acceso y soporte a nuestra plataforma.</li>
              <li>Mejorar nuestros servicios y funcionalidades.</li>
              <li>Enviar notificaciones relacionadas con el sistema o actualizaciones importantes.</li>
              <li>Comunicar ofertas, noticias o eventos (si el usuario así lo autoriza).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Confidencialidad y seguridad</h2>
            <p>
              Toda la información almacenada en haluplataform.com es tratada con estricta confidencialidad. Implementamos medidas de seguridad técnicas y organizativas para proteger los datos frente a accesos no autorizados, pérdidas o alteraciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Compartición de datos</h2>
            <p className="mb-3">No vendemos, alquilamos ni compartimos información personal con terceros, salvo que:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tengamos tu autorización explícita.</li>
              <li>Sea requerido por ley o una autoridad competente.</li>
              <li>Sea necesario para brindar un servicio subcontratado (ej. procesadores de pagos).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Cookies y tecnologías similares</h2>
            <p>
              Utilizamos cookies para mejorar la experiencia del usuario y analizar el uso del sitio. Puedes configurar tu navegador para rechazarlas, aunque esto puede limitar ciertas funcionalidades.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Derechos del usuario</h2>
            <p className="mb-3">Como usuario, puedes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder, rectificar o eliminar tu información personal.</li>
              <li>Retirar tu consentimiento para el tratamiento de datos.</li>
              <li>Solicitar la portabilidad de tus datos o limitar su uso.</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, escríbenos a: <a href="mailto:privacidad@haluplataform.com" className="text-primary hover:underline">privacidad@haluplataform.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Cambios en esta política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política en cualquier momento. Notificaremos cambios relevantes a través del sitio web o correo electrónico.
            </p>
          </section>

          <div className="bg-card border rounded-lg p-6 mt-12">
            <h3 className="text-lg font-semibold mb-2">¿Tienes preguntas sobre privacidad?</h3>
            <p className="text-muted-foreground mb-4">
              Si tienes alguna duda sobre nuestras políticas de privacidad, no dudes en contactarnos.
            </p>
            <a 
              href="mailto:privacidad@haluplataform.com"
              className="text-primary hover:underline font-medium"
            >
              privacidad@haluplataform.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
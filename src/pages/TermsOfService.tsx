import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
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
          <h1 className="text-4xl font-bold mb-4">Términos y Condiciones de Uso</h1>
          <p className="text-muted-foreground">haluplataform.com</p>
          <p className="text-sm text-muted-foreground mt-2">Última actualización: Agosto 2024</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8">
          <div className="bg-card border rounded-lg p-6">
            <p className="text-foreground">
              Al acceder y utilizar el sitio web y la plataforma de haluplataform.com, usted acepta los siguientes términos y condiciones. Si no está de acuerdo con ellos, por favor absténgase de utilizar nuestros servicios.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Definiciones</h2>
            <div className="space-y-3">
              <p><strong>Haluplataform:</strong> plataforma SaaS que proporciona herramientas digitales para la gestión integral de instituciones educativas.</p>
              <p><strong>Usuario:</strong> persona natural o jurídica que accede al sitio web o utiliza la plataforma.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Uso autorizado</h2>
            <p className="mb-3">El usuario se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar información veraz y actualizada.</li>
              <li>Usar la plataforma únicamente con fines educativos y administrativos permitidos.</li>
              <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
              <li>No realizar actividades que puedan dañar, interrumpir o vulnerar la seguridad del sistema.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Propiedad intelectual</h2>
            <p>
              Todos los contenidos, marcas, logotipos, software y materiales disponibles en haluplataform.com son propiedad de sus titulares correspondientes y están protegidos por las leyes de propiedad intelectual. Está prohibida su reproducción total o parcial sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Responsabilidades</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Haluplataform no se hace responsable por la información ingresada por los usuarios ni por el mal uso de las funcionalidades.</li>
              <li>Nos reservamos el derecho de suspender o cancelar cuentas que incumplan estos términos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Acceso y disponibilidad</h2>
            <p>
              La plataforma está disponible las 24 horas, salvo por mantenimientos programados o causas de fuerza mayor. No garantizamos la disponibilidad ininterrumpida del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cancelación y eliminación de cuenta</h2>
            <p>
              El usuario puede solicitar la eliminación de su cuenta escribiendo a: <a href="mailto:soporte@haluplataform.com" className="text-primary hover:underline">soporte@haluplataform.com</a>. La información será eliminada conforme a las normativas de protección de datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Modificaciones</h2>
            <p>
              Podemos modificar estos términos en cualquier momento. Las nuevas versiones estarán disponibles en esta misma página, con fecha de actualización visible.
            </p>
          </section>

          <div className="bg-card border rounded-lg p-6 mt-12">
            <h3 className="text-lg font-semibold mb-2">¿Tienes preguntas?</h3>
            <p className="text-muted-foreground mb-4">
              Si tienes alguna duda sobre estos términos y condiciones, no dudes en contactarnos.
            </p>
            <a 
              href="mailto:soporte@haluplataform.com"
              className="text-primary hover:underline font-medium"
            >
              soporte@haluplataform.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
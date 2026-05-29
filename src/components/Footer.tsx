import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import { DemoRequestDialog } from "./DemoRequestDialog";
import { SupportTicketDialog } from "./SupportTicketDialog";
import Newsletter from "./Newsletter";
import SocialShare from "./SocialShare";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Negro base */}
    <path
      fill="#000000"
      d="M30 4a8.4 8.4 0 0 0 0 .9 8.3 8.3 0 0 0 7.1 8.2 8.3 8.3 0 0 0 .9 0V20a15 15 0 0 1-9-3v11.4a11.6 11.6 0 1 1-10.1-11.5V21a7.3 7.3 0 1 0 5.1 7V4h6.1z"
    />
    {/* Celeste */}
    <path
      fill="#69C9D0"
      d="M19.9 18.9a11.6 11.6 0 1 0 10.1 11.5v-3.2a7.3 7.3 0 1 1-5.1-7v-5.3a11.5 11.5 0 0 0-5-.5z"
    />
    {/* Rosa */}
    <path
      fill="#EE1D52"
      d="M30 4h-6.1v17a7.3 7.3 0 0 1 5.1 7V17a15 15 0 0 0 9 3v-6.9a8.3 8.3 0 0 1-.9 0 8.3 8.3 0 0 1-7.1-8.2 8.4 8.4 0 0 1 0-.9z"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-secondary/60 border-t border-border/50 py-14 text-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Newsletter and Social Share Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Newsletter />
          <SocialShare />
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/halu-uploads/b65d18e6-c27c-41e1-8c79-9c68d460b305.png" 
                alt="HALU Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
              <div className="text-xl font-bold">
                haluplataform.com
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              El Ecosistema de Desarrollo Integral del Estudiante (EDIE) que transforma la gestión educativa.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Colombia
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#modules" className="hover:text-foreground transition-colors">Módulos</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Características</a></li>
              <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimonios</a></li>
              <li>
                <a 
                  href="https://haluplataform.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Acceder al Sistema
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <SupportTicketDialog trigger={
                  <button className="text-muted-foreground hover:text-foreground text-sm cursor-pointer">
                    Centro de Ayuda
                  </button>
                } />
              </li>
              <li><a href="#" className="hover:text-foreground transition-colors">Documentación</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Videos Tutoriales</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Soporte 24/7</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                haluplataformaescolar@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +57 324 6868538
              </li>
              <li>
                <DemoRequestDialog trigger={
                  <span className="hover:text-foreground transition-colors cursor-pointer">Agendar Demo</span>
                } />
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">Solicitar Información</a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@halu.plataforma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <TikTokIcon className="h-5 w-5 opacity-90 transition-opacity group-hover:opacity-100" />
                  <span>TikTok</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground mb-4">
            <div>
              © {new Date().getFullYear()} haluplataform.com. Todos los derechos reservados.
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-foreground transition-colors">Política de Privacidad</a>
              <a href="/terms" className="hover:text-foreground transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
            </div>
          </div>
          
          <div className="text-center pt-4 border-t border-border/20">
            <div className="flex items-center justify-center gap-2 text-xs text-foreground/60">
              <span>Desarrollado por</span>
              <img 
                src="/axentia-logo.ico" 
                alt="Axentia Technologies" 
                className="w-4 h-4"
              />
              <span className="font-medium">Axentiatechnologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

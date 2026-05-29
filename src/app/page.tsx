import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import SobreMi from "@/components/SobreMi";
import Resultados from "@/components/Resultados";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <SobreMi />
      <Resultados />
      <Testimonios />
      <Contacto />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

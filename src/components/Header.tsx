import { Button } from "@/components/ui/button";
import { ExternalLink, Menu, X, CalendarCheck } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AdminLoginButton from "./AdminLoginButton";
import ThemeToggle from "./ThemeToggle";
import { DemoRequestDialog } from "./DemoRequestDialog";

const NAV_LINKS = [
  { href: "#features", label: "Características" },
  { href: "#modules", label: "Módulos" },
  { href: "#testimonials", label: "Testimonios" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.querySelector(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [ids]);

  return active;
}

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.href));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 shadow-soft backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="container flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        {/* Logo */}
        <a href="/" className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3">
          <img
            src="/halu-uploads/b65d18e6-c27c-41e1-8c79-9c68d460b305.png"
            alt="HALU Logo"
            className="h-9 w-auto sm:h-10"
          />
          <span className="truncate text-base font-semibold tracking-tight text-foreground sm:text-lg">
            <span className="hidden sm:inline">haluplataform.com</span>
            <span className="sm:hidden">HALU</span>
          </span>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden items-center gap-1 md:flex md:gap-0 lg:gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.tiktok.com/@halu.plataforma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
          >
            <SiTiktok className="h-4 w-4" />
            TikTok
          </a>
        </nav>

        {/* Acciones derecha */}
        <div className="flex items-center space-x-1 md:space-x-2">
          <div className="scale-75 sm:scale-100">
            <ThemeToggle />
          </div>
          <div className="scale-75 sm:scale-100">
            <AdminLoginButton />
          </div>

          {/* CTA Demo — visible en md+ */}
          <div className="hidden md:block">
            <DemoRequestDialog
              trigger={
                <Button variant="default" size="sm" className="gap-1.5 text-xs font-semibold sm:text-sm">
                  <CalendarCheck className="h-3.5 w-3.5" />
                  <span className="hidden lg:inline">Solicitar demo</span>
                  <span className="lg:hidden">Demo</span>
                </Button>
              }
            />
          </div>

          {/* Cuando el app esté lista: cambiar "/plataforma" por "https://haluapp.haluplataform.com" */}
          <Button
            variant="login"
            size="sm"
            onClick={() => navigate("/plataforma")}
            className="text-xs sm:text-sm px-2 sm:px-3"
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Ingresar</span>
            <span className="sm:hidden">Login</span>
          </Button>

          {/* Botón Menú móvil */}
          <button
            className="md:hidden p-2 rounded hover:bg-foreground/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-1 border-t bg-background p-4 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                activeSection === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.tiktok.com/@halu.plataforma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/60 hover:text-foreground"
          >
            <SiTiktok className="w-5 h-5" />
            TikTok
          </a>
          {/* Demo CTA en móvil */}
          <div className="pt-2">
            <DemoRequestDialog
              trigger={
                <Button variant="default" size="sm" className="w-full gap-2">
                  <CalendarCheck className="h-4 w-4" />
                  Solicitar demo gratuita
                </Button>
              }
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

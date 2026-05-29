import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  // Default is dark (no class needed — :root is already dark)
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsLight(true);
      document.documentElement.classList.add("light");
    } else {
      // Default: dark — remove any stale .light class
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggle = () => {
    const nextLight = !isLight;
    setIsLight(nextLight);
    if (nextLight) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className="w-9 h-9 p-0"
      aria-label={isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
    >
      {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </Button>
  );
};

export default ThemeToggle;

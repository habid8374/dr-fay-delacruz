import { useState, useEffect } from "react";
import { Eye, Users, Globe } from "lucide-react";

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState({
    online: 0,
    today: 0,
    total: 0,
    loading: true
  });

  useEffect(() => {
    // Función para obtener datos reales de Google Analytics
    const fetchRealData = async () => {
      try {
        // Aquí conectarías con Google Analytics API
        // Por ahora, mostrar mensaje de configuración pendiente
        setVisitors({
          online: 0,
          today: 0,
          total: 0,
          loading: false
        });
      } catch (error) {
        console.error('Error fetching analytics data:', error);
        setVisitors(prev => ({ ...prev, loading: false }));
      }
    };

    fetchRealData();
  }, []);

  if (visitors.loading) {
    return (
      <section className="py-6 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <div className="text-sm text-muted-foreground">Cargando estadísticas...</div>
        </div>
      </section>
    );
  }

  if (visitors.total === 0) return null;

  return (
    <section className="py-6 bg-secondary/30 border-y border-border/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-edu-green rounded-full animate-pulse" />
            <Eye className="w-4 h-4 text-edu-green" />
            <span className="text-sm text-muted-foreground">En línea:</span>
            <span className="font-bold text-edu-green">{visitors.online}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Hoy:</span>
            <span className="font-bold text-primary">{visitors.today.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-edu-purple" />
            <span className="text-sm text-muted-foreground">Total:</span>
            <span className="font-bold text-edu-purple">{visitors.total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorCounter;
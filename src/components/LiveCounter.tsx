import { useState, useEffect } from "react";
import { Users, BookOpen, School } from "lucide-react";

const LiveCounter = () => {
  const [counts, setCounts] = useState({
    students: 47832,
    schools: 523,
    processes: 15647
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        students: prev.students + Math.floor(Math.random() * 3),
        schools: prev.schools + (Math.random() > 0.95 ? 1 : 0),
        processes: prev.processes + Math.floor(Math.random() * 8)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Users,
      count: counts.students.toLocaleString(),
      label: "Estudiantes gestionados hoy",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: School,
      count: counts.schools.toLocaleString(),
      label: "Colegios activos",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: BookOpen,
      count: counts.processes.toLocaleString(),
      label: "Procesos automatizados hoy",
      color: "text-purple-600 bg-purple-50"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            🔴 En Vivo - Actividad de HALU
          </h3>
          <p className="text-sm text-gray-600">
            Datos actualizados en tiempo real
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.count}
                  </div>
                  <div className="text-xs text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveCounter;
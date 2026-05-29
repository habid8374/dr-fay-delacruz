import { MapPin, School, CheckCircle } from "lucide-react";

const CollegeMap = () => {
  const locations = [
    { city: "Bogotá", x: "45%", y: "35%" },
    { city: "Medellín", x: "25%", y: "25%" },
    { city: "Cali", x: "15%", y: "55%" },
    { city: "Barranquilla", x: "35%", y: "15%" },
    { city: "Cartagena", x: "30%", y: "18%" },
    { city: "Bucaramanga", x: "55%", y: "28%" },
    { city: "Pereira", x: "22%", y: "40%" },
    { city: "Manizales", x: "25%", y: "38%" },
    { city: "Ibagué", x: "40%", y: "45%" },
    { city: "Villavicencio", x: "60%", y: "50%" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cobertura Nacional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HALU está disponible en todo el territorio colombiano. Tu colegio puede ser pionero en tu región.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mapa de Colombia */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="relative w-full h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">CO</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Colombia</h3>
                  <p className="text-gray-600 mb-4">HALU disponible en todo el territorio nacional</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {locations.map((location, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {location.city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de ciudades */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ciudades Principales
            </h3>
            <div className="grid gap-3">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-900">{location.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-600">Disponible</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>¿Tu ciudad no está en la lista?</strong> ¡No hay problema! 
                HALU funciona en toda Colombia. Contáctanos para ser el primer colegio en implementar HALU en tu región.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeMap;
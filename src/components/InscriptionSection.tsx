import { motion } from "framer-motion";
import { GraduationCap, Users, FileText } from "lucide-react";
import AdminLoginButton from "./AdminLoginButton";

const FEATURES = [
  {
    icon: Users,
    title: "Registro Fácil",
    description: "Los estudiantes llenan un formulario simple con todos sus datos",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: FileText,
    title: "Datos Organizados",
    description: "Toda la información se guarda automáticamente y se organiza",
    iconBg: "bg-edu-green/15",
    iconColor: "text-edu-green",
  },
  {
    icon: GraduationCap,
    title: "Descarga Excel",
    description: "Descarga todos los datos en Excel cuando lo necesites",
    iconBg: "bg-edu-purple/15",
    iconColor: "text-edu-purple",
  },
];

const InscriptionSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="inline-block rounded-full bg-primary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Ejemplo de Funcionalidad
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Sistema de Inscripciones
              <span className="block text-primary">Para tu Colegio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Así funcionaría el sistema de inscripciones en la página web de tu colegio.
              Los estudiantes pueden registrarse fácilmente y tú descargas los datos en Excel.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {FEATURES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl border border-border/60 bg-card shadow-soft hover:-translate-y-0.5 hover:shadow-medium transition-all duration-300"
            >
              <div className={`w-14 h-14 ${item.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <item.icon className={`w-7 h-7 ${item.iconColor}`} strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-card border border-border/60 p-8 rounded-2xl shadow-medium max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              ¡Prueba el Sistema!
            </h3>
            <p className="text-muted-foreground mb-6">
              Haz clic en el botón para ver cómo funcionaría en tu colegio
            </p>
            <div className="flex justify-center">
              <AdminLoginButton />
            </div>
            <p className="text-xs text-muted-foreground/70 mt-4">
              Usuario: admin | Contraseña: halu2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InscriptionSection;

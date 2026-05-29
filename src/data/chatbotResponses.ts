export interface ChatResponse {
  keywords: string[];
  response: string;
  followUp?: string[];
}

export const chatbotResponses: ChatResponse[] = [
  {
    keywords: ["precio", "costo", "cuanto", "valor", "pagar"],
    response: "💰 Los precios de HALU se ajustan al tamaño de tu institución. Ofrecemos planes flexibles desde colegios pequeños hasta grandes instituciones. ¡Solicita una cotización personalizada!",
    followUp: ["¿Cuántos estudiantes tiene tu colegio?", "¿Te interesa una demo gratuita?"]
  },
  {
    keywords: ["demo", "prueba", "probar", "mostrar"],
    response: "🎯 ¡Perfecto! Ofrecemos demos gratuitas y personalizadas donde podrás ver exactamente cómo HALU funcionaría en tu colegio. La demo dura aproximadamente 30 minutos.",
    followUp: ["¿Prefieres la demo virtual o presencial?", "¿Qué día te conviene más?"]
  },
  {
    keywords: ["tiempo", "implementacion", "instalar", "cuanto demora"],
    response: "⏱️ La implementación completa de HALU toma exactamente 15 días hábiles. Incluye configuración, capacitación, migración de datos y puesta en marcha. ¡Sin interrupciones en tus clases!",
    followUp: ["¿Te interesa ver el cronograma detallado?", "¿Tienes algún período específico en mente?"]
  },
  {
    keywords: ["funciones", "que hace", "caracteristicas", "modulos"],
    response: "🚀 HALU es una plataforma integral que incluye: Gestión académica, Admisiones, Convivencia escolar (Ley 1620), Comunicación con padres, Reportes automáticos, y mucho más.",
    followUp: ["¿Qué módulo te interesa más?", "¿Quieres ver una demo de alguna función específica?"]
  },
  {
    keywords: ["soporte", "ayuda", "problemas", "asistencia"],
    response: "🛟 Ofrecemos soporte técnico 24/7 vía WhatsApp, email y teléfono. Incluye capacitaciones, actualizaciones automáticas y resolución de incidencias sin costo adicional.",
    followUp: ["¿Tienes algún problema técnico específico?", "¿Te interesa conocer más sobre nuestro soporte?"]
  },
  {
    keywords: ["seguridad", "datos", "proteccion", "privacidad"],
    response: "🔒 La seguridad es nuestra prioridad. Utilizamos encriptación SSL, respaldos automáticos diarios y cumplimos con todas las normativas de protección de datos en Colombia.",
    followUp: ["¿Tienes preocupaciones específicas sobre seguridad?", "¿Quieres conocer nuestras certificaciones?"]
  },
  {
    keywords: ["ley 1620", "convivencia", "bullying", "normativa"],
    response: "📋 HALU automatiza completamente el cumplimiento de la Ley 1620. Incluye protocolos, seguimiento de casos, reportes automáticos y toda la documentación requerida.",
    followUp: ["¿Actualmente cómo manejan la Ley 1620?", "¿Te interesa ver cómo funciona este módulo?"]
  },
  {
    keywords: ["estudiantes", "alumnos", "capacidad", "tamaño"],
    response: "👥 HALU funciona para cualquier tamaño de institución, desde 50 hasta más de 2000 estudiantes. La plataforma se adapta automáticamente a tus necesidades.",
    followUp: ["¿Cuántos estudiantes tiene tu colegio?", "¿Planean crecer en el futuro?"]
  },
  {
    keywords: ["cronograma", "detallado", "cronograma detallado", "ver el cronograma"],
    response: "📅 **CRONOGRAMA DE IMPLEMENTACIÓN - 15 DÍAS**\n\n🔹 **DÍAS 1-3: Preparación**\n• Día 1: Reunión inicial y evaluación\n• Día 2: Configuración del sistema\n• Día 3: Personalización y ajustes\n\n🔹 **DÍAS 4-8: Capacitación**\n• Día 4: Equipo administrativo\n• Día 5: Docentes y académico\n• Día 6: Personal de apoyo\n• Día 7: Coordinadores avanzado\n• Día 8: Evaluación y certificación\n\n🔹 **DÍAS 9-12: Migración**\n• Día 9: Respaldo y preparación\n• Día 10: Datos de estudiantes\n• Día 11: Información académica\n• Día 12: Validación final\n\n🔹 **DÍAS 13-15: Puesta en Marcha**\n• Día 13: Activación completa\n• Día 14: Operación supervisada\n• Día 15: Entrega oficial\n\n¡Todo listo para funcionar sin interrupciones!",
    followUp: ["¿Qué fase te interesa más?", "¿Cuándo te gustaría empezar?"]
  },
  {
    keywords: ["colegios grandes", "funciona para colegios grandes", "instituciones grandes", "muchos estudiantes"],
    response: "🏢 ¡Por supuesto! HALU está diseñado para colegios grandes. Manejamos instituciones con más de 2000 estudiantes sin problemas. Nuestros casos de éxito incluyen:\n\n• Colegios con 1500+ estudiantes\n• Instituciones con múltiples sedes\n• Universidades y centros educativos\n\nLa plataforma se escala automáticamente según tus necesidades. ¡Entre más grande, mejor optimización obtienes!",
    followUp: ["¿Cuántos estudiantes tiene tu institución?", "¿Tienen múltiples sedes?"]
  }
];

export const defaultResponse = "🤖 Hola! Soy el asistente virtual de HALU. Puedo ayudarte con información sobre precios, demos, funciones, implementación y más. ¿En qué te puedo ayudar?";

export const noMatchResponse = "🤔 No estoy seguro de cómo responder a eso. Pero nuestro equipo humano puede ayudarte mejor. ¿Te gustaría que te conecte con un especialista por WhatsApp?";

export const greetings = ["hola", "buenos dias", "buenas tardes", "buenas noches", "saludos", "hi"];
export const goodbyes = ["adios", "chao", "hasta luego", "gracias", "bye"];
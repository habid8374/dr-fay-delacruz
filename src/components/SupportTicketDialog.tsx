import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, HelpCircle } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(3, "El nombre completo es requerido."),
  email: z.string().email("Correo electrónico inválido."),
  schoolName: z.string().min(3, "El nombre de la institución es requerido."),
  phone: z.string().optional(),
  priority: z.string().min(1, "Selecciona la prioridad."),
  category: z.string().min(1, "Selecciona la categoría."),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres."),
  description: z.string().min(10, "La descripción debe tener al menos 10 caracteres."),
});

type FormValues = z.infer<typeof formSchema>;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrblolpq";

const generateTicketId = () => {
  const existingTickets = JSON.parse(localStorage.getItem("supportTickets") || "[]");
  const nextNumber = existingTickets.length + 1;
  return `HALU-${nextNumber.toString().padStart(9, '0')}`;
};

interface SupportTicketDialogProps {
  trigger: React.ReactElement;
}

export const SupportTicketDialog = ({ trigger }: SupportTicketDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      schoolName: "",
      phone: "",
      priority: "",
      category: "",
      subject: "",
      description: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setSubmitMessage("");
    
    const ticketId = generateTicketId();

    try {
      const emailData = {
        ...values,
        ticketId,
        type: "Ticket de Soporte",
        timestamp: new Date().toLocaleString('es-CO'),
      };

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        // Guardar ticket en localStorage
        const existingTickets = JSON.parse(localStorage.getItem("supportTickets") || "[]");
        existingTickets.push({ ticketId, ...emailData });
        localStorage.setItem("supportTickets", JSON.stringify(existingTickets));
        
        setSubmitMessage(`¡Ticket creado exitosamente! Tu número de ticket es: ${ticketId}. Nos pondremos en contacto contigo pronto.`);
        form.reset();
      } else {
        setSubmitMessage("Error: Ocurrió un error al crear el ticket.");
      }
    } catch (error) {
      setSubmitMessage("Error: Ocurrió un error de red. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setSubmitMessage("");
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {submitMessage && !submitMessage.startsWith("Error:") ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Ticket Creado</h3>
            <p className="text-green-600 mb-4">{submitMessage}</p>
            <Button onClick={handleClose}>Cerrar</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Centro de Ayuda - Crear Ticket</DialogTitle>
              <DialogDescription>
                Describe tu problema y nuestro equipo de soporte te ayudará lo antes posible.
              </DialogDescription>
            </DialogHeader>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="schoolName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institución Educativa</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre del colegio" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono (Opcional)</FormLabel>
                        <FormControl>
                          <Input placeholder="300 123 4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prioridad</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar prioridad" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="baja">Baja</SelectItem>
                            <SelectItem value="media">Media</SelectItem>
                            <SelectItem value="alta">Alta</SelectItem>
                            <SelectItem value="critica">Crítica</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categoría</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar categoría" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="tecnico">Problema Técnico</SelectItem>
                            <SelectItem value="acceso">Acceso/Login</SelectItem>
                            <SelectItem value="funcionalidad">Funcionalidad</SelectItem>
                            <SelectItem value="capacitacion">Capacitación</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Resumen breve del problema" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción del Problema</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe detalladamente el problema que estás experimentando..."
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creando Ticket...
                    </>
                  ) : (
                    "Crear Ticket de Soporte"
                  )}
                </Button>

                {submitMessage && submitMessage.startsWith("Error:") && (
                  <p className="text-sm text-red-600 text-center">{submitMessage}</p>
                )}
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
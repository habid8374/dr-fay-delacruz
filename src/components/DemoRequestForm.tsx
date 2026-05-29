import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Loader2 } from "lucide-react";

// Define el esquema del formulario con validaciones
const formSchema = z.object({
  fullName: z.string().min(3, "El nombre completo es requerido."),
  email: z.string().email("Correo electrónico inválido."),
  schoolName: z.string().min(3, "El nombre de la institución es requerido."),
  phone: z.string().min(7, "Número de teléfono inválido.").optional().or(z.literal('')),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

// IMPORTANTE: Reemplaza esto con tu propio endpoint de Formspree
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrblolpq";

export const DemoRequestForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      schoolName: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitMessage("¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.");
        form.reset();
        setTimeout(onSuccess, 3000); // Cierra el modal después de 3 segundos
      } else {
        const data = await response.json();
        const errorMessage = data.errors?.map((e: any) => e.message).join(", ") || "Ocurrió un error al enviar el formulario.";
        setSubmitMessage(`Error: ${errorMessage}`);
      }
    } catch (error) {
      setSubmitMessage("Ocurrió un error de red. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitMessage && !submitMessage.startsWith("Error:")) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-green-600">{submitMessage}</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="Ej: Juan Pérez" {...field} />
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
                <Input placeholder="ejemplo@institucion.edu.co" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="schoolName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la Institución Educativa</FormLabel>
              <FormControl>
                <Input placeholder="Ej: Colegio El Saber" {...field} />
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
              <FormLabel>Número de Teléfono <span className="text-muted-foreground">(Opcional)</span></FormLabel>
              <FormControl>
                <Input placeholder="Ej: 300 123 4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje <span className="text-muted-foreground">(Opcional)</span></FormLabel>
              <FormControl>
                <Textarea placeholder="Cuéntanos un poco sobre tus necesidades..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Confirmar Solicitud"
          )}
        </Button>
        {submitMessage && submitMessage.startsWith("Error:") && (
          <p className="text-sm text-red-600 text-center">{submitMessage}</p>
        )}
      </form>
    </Form>
  );
};
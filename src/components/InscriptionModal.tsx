import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface InscriptionData {
  nombres: string;
  apellidos: string;
  numero_documento: string;
  fecha_nacimiento: string;
  email_contacto: string;
  telefono_contacto: string;
  grado_aspira: string;
  sexo: string;
  colegio_procedencia: string;
  municipio_ciudad: string;
  departamento: string;
  paga_inscripcion: string;
}

interface InscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InscriptionModal = ({ isOpen, onClose }: InscriptionModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<InscriptionData>({
    nombres: "",
    apellidos: "",
    numero_documento: "",
    fecha_nacimiento: "",
    email_contacto: "",
    telefono_contacto: "",
    grado_aspira: "",
    sexo: "",
    colegio_procedencia: "",
    municipio_ciudad: "",
    departamento: "",
    paga_inscripcion: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Guardar en localStorage
    const existingData = JSON.parse(localStorage.getItem("inscriptions") || "[]");
    const newData = [...existingData, { ...formData, fecha_registro: new Date().toISOString() }];
    localStorage.setItem("inscriptions", JSON.stringify(newData));
    
    toast({
      title: "¡Inscripción exitosa!",
      description: "Tu solicitud ha sido registrada correctamente.",
    });
    
    setFormData({
      nombres: "",
      apellidos: "",
      numero_documento: "",
      fecha_nacimiento: "",
      email_contacto: "",
      telefono_contacto: "",
      grado_aspira: "",
      sexo: "",
      colegio_procedencia: "",
      municipio_ciudad: "",
      departamento: "",
      paga_inscripcion: "",
    });
    
    onClose();
  };

  const handleChange = (field: keyof InscriptionData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Formulario de Inscripción</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nombres">Nombres *</Label>
              <Input
                id="nombres"
                value={formData.nombres}
                onChange={(e) => handleChange("nombres", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="apellidos">Apellidos *</Label>
              <Input
                id="apellidos"
                value={formData.apellidos}
                onChange={(e) => handleChange("apellidos", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="numero_documento">Número de Documento *</Label>
              <Input
                id="numero_documento"
                value={formData.numero_documento}
                onChange={(e) => handleChange("numero_documento", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="fecha_nacimiento">Fecha de Nacimiento *</Label>
              <Input
                id="fecha_nacimiento"
                type="date"
                value={formData.fecha_nacimiento}
                onChange={(e) => handleChange("fecha_nacimiento", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email_contacto">Email de Contacto *</Label>
              <Input
                id="email_contacto"
                type="email"
                value={formData.email_contacto}
                onChange={(e) => handleChange("email_contacto", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="telefono_contacto">Teléfono de Contacto *</Label>
              <Input
                id="telefono_contacto"
                value={formData.telefono_contacto}
                onChange={(e) => handleChange("telefono_contacto", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="grado_aspira">Grado al que Aspira *</Label>
              <Select value={formData.grado_aspira} onValueChange={(value) => handleChange("grado_aspira", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar grado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="prejardin">Prejardín</SelectItem>
                  <SelectItem value="jardin">Jardín</SelectItem>
                  <SelectItem value="transicion">Transición</SelectItem>
                  <SelectItem value="1">1°</SelectItem>
                  <SelectItem value="2">2°</SelectItem>
                  <SelectItem value="3">3°</SelectItem>
                  <SelectItem value="4">4°</SelectItem>
                  <SelectItem value="5">5°</SelectItem>
                  <SelectItem value="6">6°</SelectItem>
                  <SelectItem value="7">7°</SelectItem>
                  <SelectItem value="8">8°</SelectItem>
                  <SelectItem value="9">9°</SelectItem>
                  <SelectItem value="10">10°</SelectItem>
                  <SelectItem value="11">11°</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="sexo">Sexo *</Label>
              <Select value={formData.sexo} onValueChange={(value) => handleChange("sexo", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar sexo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="masculino">Masculino</SelectItem>
                  <SelectItem value="femenino">Femenino</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="colegio_procedencia">Colegio de Procedencia</Label>
            <Input
              id="colegio_procedencia"
              value={formData.colegio_procedencia}
              onChange={(e) => handleChange("colegio_procedencia", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="municipio_ciudad">Municipio/Ciudad *</Label>
              <Input
                id="municipio_ciudad"
                value={formData.municipio_ciudad}
                onChange={(e) => handleChange("municipio_ciudad", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="departamento">Departamento *</Label>
              <Input
                id="departamento"
                value={formData.departamento}
                onChange={(e) => handleChange("departamento", e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="paga_inscripcion">¿Paga Inscripción? *</Label>
            <Select value={formData.paga_inscripcion} onValueChange={(value) => handleChange("paga_inscripcion", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="si">Sí</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              Enviar Inscripción
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InscriptionModal;
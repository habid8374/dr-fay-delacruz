import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Download, Users } from "lucide-react";
import * as XLSX from 'xlsx';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "halu2025") {
      setIsLoggedIn(true);
      toast({
        title: "Acceso concedido",
        description: "Bienvenido al panel de administración",
      });
    } else {
      toast({
        title: "Error de acceso",
        description: "Usuario o contraseña incorrectos",
        variant: "destructive",
      });
    }
  };

  const downloadExcel = () => {
    const data = JSON.parse(localStorage.getItem("inscriptions") || "[]");
    
    if (data.length === 0) {
      toast({
        title: "Sin datos",
        description: "No hay inscripciones para descargar",
        variant: "destructive",
      });
      return;
    }

    // Crear Excel
    const headers = [
      "Nombres", "Apellidos", "Número Documento", "Fecha Nacimiento", 
      "Email Contacto", "Teléfono Contacto", "Grado Aspira", "Sexo", 
      "Colegio Procedencia", "Municipio/Ciudad", "Departamento", 
      "Paga Inscripción", "Fecha Registro"
    ];
    
    const excelData = [
      headers,
      ...data.map((row: any) => [
        row.nombres || "",
        row.apellidos || "",
        row.numero_documento || "",
        row.fecha_nacimiento || "",
        row.email_contacto || "",
        row.telefono_contacto || "",
        row.grado_aspira || "",
        row.sexo || "",
        row.colegio_procedencia || "",
        row.municipio_ciudad || "",
        row.departamento || "",
        row.paga_inscripcion || "",
        row.fecha_registro ? new Date(row.fecha_registro).toLocaleString() : ""
      ])
    ];

    const ws = XLSX.utils.aoa_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inscripciones");
    
    // Ajustar ancho de columnas
    const colWidths = headers.map(() => ({ wch: 20 }));
    ws['!cols'] = colWidths;
    
    XLSX.writeFile(wb, `inscripciones_${new Date().toISOString().split('T')[0]}.xlsx`);

    toast({
      title: "Descarga exitosa",
      description: `Se descargaron ${data.length} inscripciones en Excel`,
    });
  };

  const clearData = () => {
    localStorage.removeItem("inscriptions");
    toast({
      title: "Datos eliminados",
      description: "Todas las inscripciones han sido eliminadas",
    });
  };

  const getInscriptionsCount = () => {
    const data = JSON.parse(localStorage.getItem("inscriptions") || "[]");
    return data.length;
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Panel de Administración</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Iniciar Sesión
              </Button>
            </form>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground mb-2">¿Olvidaste tu contraseña?</p>
              <Button 
                variant="link" 
                size="sm"
                onClick={() => window.open('mailto:haluplataformaescolar@gmail.com?subject=Cambio de contraseña - Panel Admin&body=Hola, necesito cambiar la contraseña del panel de administración.', '_blank')}
              >
                Solicitar cambio por correo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-background p-6 min-h-[400px]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-foreground">Panel de Administración</h1>
          <Button variant="outline" size="sm" onClick={() => setIsLoggedIn(false)}>
            Cerrar Sesión
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="border-border/60 bg-card">
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{getInscriptionsCount()}</p>
                  <p className="text-sm text-muted-foreground">Inscripciones</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/60 bg-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-foreground">Gestión de Inscripciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button onClick={downloadExcel} size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Descargar Excel
              </Button>
              <Button variant="destructive" size="sm" onClick={clearData}>
                Limpiar Datos
              </Button>
            </div>
            <p className="text-xs text-muted-foreground/70">
              Usuario: admin | Contraseña: halu2025
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
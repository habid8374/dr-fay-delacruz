import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import AdminPanel from "./AdminPanel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const AdminLoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 px-2 py-1 text-xs"
      >
        <Shield className="w-3 h-3" />
        <span className="hidden sm:inline">Ingreso Admin</span>
        <span className="sm:hidden">Admin</span>
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[85vh] overflow-y-auto p-0">
          <AdminPanel />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminLoginButton;
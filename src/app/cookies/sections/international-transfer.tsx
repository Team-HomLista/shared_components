import { Card, CardContent } from "@shared/components/ui/card";
import { Shield } from "lucide-react";

const InternationalTransferSection = () => {
  return (
    <Card className="group to-terciary/30 hover:shadow-primary/5 border-0 bg-gradient-to-br from-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start gap-4 sm:mb-8">
          <div className="from-primary to-primary/80 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-14 sm:w-14">
            <Shield className="text-primary-foreground h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
              Transferencia internacional de datos
            </h2>
            <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r"></div>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-foreground/80 text-base leading-relaxed sm:text-lg">
            Algunas cookies procesan datos fuera de México (principalmente en
            EE.UU.), en servidores de proveedores como{" "}
            <strong>Google, Meta y Vercel</strong>.
          </p>
          <p className="text-foreground/80 text-base leading-relaxed sm:text-lg">
            HomLista garantiza que estas transferencias cumplen con las{" "}
            <strong>cláusulas contractuales tipo del RGPD</strong>, acuerdos
            equivalentes o medidas de seguridad compatibles con la LFPDPPP.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InternationalTransferSection;

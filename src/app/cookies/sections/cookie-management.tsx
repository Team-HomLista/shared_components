import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, AlertTriangle } from "lucide-react";

const CookieManagementSection = () => {
  return (
    <Card className="group to-terciary/30 hover:shadow-primary/5 border-0 bg-gradient-to-br from-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start gap-4 sm:mb-8">
          <div className="from-secondary to-secondary/80 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-14 sm:w-14">
            <Shield className="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
              ¿Cómo puedes gestionar tus cookies?
            </h2>
            <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r"></div>
          </div>
        </div>
        <p className="text-foreground/80 mb-6 text-base leading-relaxed sm:mb-8 sm:text-lg">
          Puedes configurar tus preferencias en cualquier momento:
        </p>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="border-primary/20 from-primary/5 rounded-xl border bg-gradient-to-br to-transparent p-6">
            <h3 className="text-primary mb-4 text-lg font-bold sm:text-xl">
              Desde nuestro sitio:
            </h3>
            <div className="space-y-3 text-sm leading-relaxed sm:text-base">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-secondary mt-0.5 h-4 w-4 flex-shrink-0" />
                <p className="text-foreground/80">
                  Al ingresar por primera vez, verás un{" "}
                  <strong>banner de consentimiento</strong>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-secondary mt-0.5 h-4 w-4 flex-shrink-0" />
                <p className="text-foreground/80">
                  Puedes aceptar todas, rechazarlas o personalizarlas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-secondary mt-0.5 h-4 w-4 flex-shrink-0" />
                <p className="text-foreground/80">
                  Puedes cambiar tu configuración desde el{" "}
                  <strong>botón de cookies en el pie de página</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="border-secondary/20 from-secondary/5 rounded-xl border bg-gradient-to-br to-transparent p-6">
            <h3 className="text-primary mb-4 text-lg font-bold sm:text-xl">
              Desde tu navegador:
            </h3>
            <p className="text-foreground/80 mb-4 text-sm leading-relaxed sm:text-base">
              Puedes eliminar o bloquear cookies desde la configuración de tu
              navegador (Chrome, Safari, Firefox, Edge, etc.).
            </p>
            <div className="border-destructive/20 from-destructive/5 to-destructive/10 rounded-xl border bg-gradient-to-r p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
                <p className="text-foreground text-sm leading-relaxed font-medium">
                  Ten en cuenta que{" "}
                  <strong>
                    bloquear cookies esenciales puede afectar el funcionamiento
                    del sitio
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CookieManagementSection;

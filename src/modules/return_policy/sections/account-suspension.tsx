import { Card, CardContent } from "@shared/components/ui/card";
import { AlertTriangle } from "lucide-react";

export const AccountSuspensionSection = () => {
  return (
    <Card className="group to-terciary/30 hover:shadow-primary/5 border-0 bg-gradient-to-br from-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start gap-4 sm:mb-8">
          <div className="from-destructive to-destructive/80 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-14 sm:w-14">
            <AlertTriangle className="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
              Suspensión de cuentas sin derecho a reembolso
            </h2>
            <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r" />
          </div>
        </div>

        <div className="from-destructive/5 to-destructive/10 mb-6 rounded-xl bg-gradient-to-r p-6 sm:mb-8">
          <p className="text-foreground text-base leading-relaxed sm:text-lg">
            HomLista se reserva el derecho de suspender o cancelar una cuenta{" "}
            <strong>sin reembolso</strong>, en los siguientes casos:
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
              <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                Información falsa o engañosa en el perfil o publicaciones.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
              <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                Uso indebido del servicio con fines ajenos al sector inmobiliario.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
              <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                Publicación de contenido no autorizado o inapropiado.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
              <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                Cualquier intento de manipular el sistema de suscripciones.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

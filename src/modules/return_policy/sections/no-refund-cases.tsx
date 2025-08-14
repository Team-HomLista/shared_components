import { Card, CardContent } from "@shared/components/ui/card";
import { XCircle } from "lucide-react";

export const NoRefundCasesSection = () => {
  return (
    <Card className="group to-terciary/30 hover:shadow-primary/5 border-0 bg-gradient-to-br from-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start gap-4 sm:mb-8">
          <div className="from-destructive to-destructive/80 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-14 sm:w-14">
            <XCircle className="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
              Casos donde NO aplica el reembolso
            </h2>
            <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <XCircle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
              <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                El período de prueba gratuito ha finalizado sin activación.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
              <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                No se canceló antes de la renovación automática.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
              <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                Se adquirieron servicios adicionales como anuncios destacados.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
              <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                Se detectó abuso (múltiples cuentas para pruebas gratuitas).
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <XCircle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
              <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                El usuario proporcionó <strong>información falsa o engañosa</strong>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
              <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                Se publicaron <strong>fotos no relacionadas con bienes raíces</strong>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
              <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                El usuario <strong>violó las normas de uso</strong> o{" "}
                <strong>Términos y Condiciones</strong>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="text-destructive mt-0.5 h-4 w-4 flex-shrink-0" />
              <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                Se ha utilizado activamente la plataforma (publicaciones, contactos, funciones
                premium).
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

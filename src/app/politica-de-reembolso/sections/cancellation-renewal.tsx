import { Card, CardContent } from "@shared/components/ui/card";
import { RefreshCw, Info } from "lucide-react";

export const CancellationRenewalSection = () => {
  return (
    <Card className="group to-terciary/30 hover:shadow-primary/5 border-0 bg-gradient-to-br from-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start gap-4 sm:mb-8">
          <div className="from-secondary to-secondary/80 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-14 sm:w-14">
            <RefreshCw className="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
              Cancelaciones y renovaciones
            </h2>
            <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r"></div>
          </div>
        </div>

        <div className="from-destructive/5 to-destructive/10 mb-6 rounded-xl bg-gradient-to-r p-6 sm:mb-8">
          <p className="text-foreground text-base leading-relaxed sm:text-lg">
            Después de activar tu plan (es decir, una vez registrada la
            tarjeta), las suscripciones{" "}
            <strong className="text-destructive">no son reembolsables</strong>,
            excepto en los casos definidos en esta política.
          </p>
        </div>

        <div className="border-secondary/20 from-secondary/5 rounded-xl border bg-gradient-to-br to-transparent p-6">
          <h3 className="text-primary mb-4 text-xl font-bold sm:text-2xl">
            Renovaciones automáticas:
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-secondary mt-2 h-2 w-2 rounded-full"></div>
                <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                  La renovación es mensual y automática.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary mt-2 h-2 w-2 rounded-full"></div>
                <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                  Es responsabilidad del usuario cancelar antes del cobro.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-secondary mt-2 h-2 w-2 rounded-full"></div>
                <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                  No se realizan reembolsos por falta de cancelación o por
                  olvido.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary mt-2 h-2 w-2 rounded-full"></div>
                <p className="text-foreground/80 text-sm leading-relaxed sm:text-base">
                  El acceso se mantiene hasta el final del período pagado.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-terciary/40 from-terciary/20 to-terciary/10 mt-6 rounded-xl border bg-gradient-to-r p-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg">
              <Info className="text-primary h-4 w-4" />
            </div>
            <p className="text-foreground text-sm leading-relaxed font-medium sm:text-base">
              <strong>Nota:</strong> Puedes gestionar tu suscripción desde tu
              panel de usuario.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

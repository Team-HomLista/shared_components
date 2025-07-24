import { Card, CardContent } from "@shared/components/ui/card";
import { Mail, AlertTriangle } from "lucide-react";

export const RefundRequestSection = () => {
  return (
    <Card className="group to-terciary/30 hover:shadow-primary/5 border-0 bg-gradient-to-br from-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start gap-4 sm:mb-8">
          <div className="from-primary to-primary/80 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-14 sm:w-14">
            <Mail className="text-primary-foreground h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
              Cómo solicitar un reembolso
            </h2>
            <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r"></div>
          </div>
        </div>

        <div className="from-destructive/5 to-destructive/10 mb-6 rounded-xl bg-gradient-to-r p-6 sm:mb-8">
          <p className="text-foreground text-base leading-relaxed sm:text-lg">
            Solo en casos <strong>excepcionales</strong>, puedes solicitar un
            reembolso, siempre que{" "}
            <strong>no hayas hecho un uso significativo del servicio</strong>.
          </p>
        </div>

        <div className="border-primary/20 from-primary/5 rounded-xl border bg-gradient-to-br to-transparent p-6">
          <h3 className="text-primary mb-4 text-xl font-bold sm:text-2xl">
            Procedimiento:
          </h3>
          <ol className="text-foreground/80 space-y-4 text-sm leading-relaxed sm:text-base">
            <li className="flex items-start gap-4">
              <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white">
                1
              </div>
              <div>
                Envía un correo a:{" "}
                <strong className="text-secondary">hola@homlista.com</strong>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white">
                2
              </div>
              <div>
                Incluye:
                <ul className="mt-2 ml-4 list-disc space-y-1">
                  <li>Nombre completo y correo asociado a tu cuenta</li>
                  <li>Fecha del pago y tipo de plan</li>
                  <li>Motivo de la solicitud</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white">
                3
              </div>
              <div>
                El equipo de HomLista revisará tu caso en un plazo de 3 a 5 días
                hábiles.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white">
                4
              </div>
              <div>
                Si procede, el reembolso será procesado en un máximo de 10 días
                hábiles.
              </div>
            </li>
          </ol>
        </div>

        <div className="border-destructive/20 from-destructive/5 to-destructive/10 mt-6 rounded-xl border bg-gradient-to-r p-6">
          <div className="flex items-start gap-4">
            <div className="bg-destructive/10 flex h-8 w-8 items-center justify-center rounded-lg">
              <AlertTriangle className="text-destructive h-4 w-4" />
            </div>
            <p className="text-foreground text-sm leading-relaxed font-medium sm:text-base">
              <strong>Advertencia:</strong> HomLista no se responsabiliza por
              demoras en la devolución por parte del banco o proveedor de pago.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

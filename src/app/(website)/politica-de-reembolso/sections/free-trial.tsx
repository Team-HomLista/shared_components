import { Card, CardContent } from "@shared/components/ui/card";
import { Clock, CheckCircle, Info } from "lucide-react";

export const FreeTrialSection = () => {
  return (
    <Card className="group to-terciary/30 hover:shadow-primary/5 border-0 bg-gradient-to-br from-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start gap-4 sm:mb-8">
          <div className="from-primary to-primary/80 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg sm:h-14 sm:w-14">
            <Clock className="text-primary-foreground h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
              Período de prueba sin compromiso
            </h2>
            <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r" />
          </div>
        </div>

        <div className="from-secondary/10 via-terciary/20 to-secondary/10 relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-r p-6 sm:mb-8 sm:p-8">
          <div className="relative">
            <div className="mb-4 flex items-center gap-3">
              <CheckCircle className="text-secondary h-6 w-6" />
              <h3 className="text-primary text-xl font-bold sm:text-2xl">
                Prueba gratuita de 7 días - sin tarjeta ni compromiso
              </h3>
            </div>
            <p className="text-foreground/80 text-base leading-relaxed sm:text-lg">
              Todos los nuevos usuarios pueden acceder a una prueba gratuita de 7 días, sin
              necesidad de ingresar tarjeta de crédito ni datos de pago.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="group/item border-primary/20 from-primary/5 hover:border-primary/40 rounded-xl border bg-gradient-to-br to-transparent p-6 transition-all duration-300 hover:shadow-md">
            <h4 className="text-primary mb-4 flex items-center gap-3 text-lg font-bold sm:text-xl">
              <div className="bg-primary h-2 w-2 rounded-full" />
              Durante este período:
            </h4>
            <ul className="text-foreground/80 space-y-3 text-sm leading-relaxed sm:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-secondary mt-0.5 h-4 w-4 flex-shrink-0" />
                Puedes explorar y utilizar los servicios de HomLista.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-secondary mt-0.5 h-4 w-4 flex-shrink-0" />
                Solo necesitas crear una cuenta y completar la información mínima del perfil.
              </li>
            </ul>
          </div>

          <div className="group/item border-secondary/20 from-secondary/5 hover:border-secondary/40 rounded-xl border bg-gradient-to-br to-transparent p-6 transition-all duration-300 hover:shadow-md">
            <h4 className="text-primary mb-4 flex items-center gap-3 text-lg font-bold sm:text-xl">
              <div className="bg-secondary h-2 w-2 rounded-full" />
              Al finalizar los 7 días:
            </h4>
            <ul className="text-foreground/80 space-y-3 text-sm leading-relaxed sm:text-base">
              <li className="flex items-start gap-3">
                <Info className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                Se solicitarán tus datos de pago para activar la suscripción.
              </li>
              <li className="flex items-start gap-3">
                <Info className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                El plan se activará con renovación automática mensual.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-accent/40 from-accent/30 to-accent/10 mt-6 rounded-xl border bg-gradient-to-r p-6 sm:mt-8">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg">
              <Info className="text-primary h-4 w-4" />
            </div>
            <div>
              <p className="text-foreground text-sm leading-relaxed font-medium sm:text-base">
                <strong>Importante:</strong> Si no proporcionas los datos de pago, la cuenta se
                suspenderá automáticamente sin ningún cargo.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

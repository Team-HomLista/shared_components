import { Clock, CheckCircle, Info } from "lucide-react";

import { ListWithIcon } from "@/components/list-with-icon";
import { SectionInline } from "@/components/section-inline";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/shared/components/ui";

export function FreeTrialSection() {
  return (
    <SectionInline title="Período de prueba sin compromiso" icon={Clock}>
      <Card>
        <CardContent>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-primary flex-shrink-0 -translate-y-1" />

            <div className="flex flex-col gap-2">
              <CardTitle>Prueba gratuita de 7 días - sin tarjeta ni compromiso</CardTitle>

              <CardDescription>
                Todos los nuevos usuarios pueden acceder a una prueba gratuita de 7 días, sin
                necesidad de ingresar tarjeta de crédito ni datos de pago.
              </CardDescription>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Durante este período:</CardTitle>
          </CardHeader>

          <CardContent>
            <ListWithIcon
              items={[
                {
                  icon: CheckCircle,
                  text: "Puedes explorar y utilizar los servicios de HomLista."
                },
                {
                  icon: CheckCircle,
                  text: "El plan se activará con renovación automática mensual."
                }
              ]}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Al finalizar los 7 días:</CardTitle>
          </CardHeader>

          <CardContent>
            <ListWithIcon
              items={[
                {
                  icon: Info,
                  text: "Se solicitarán tus datos de pago para activar la suscripción."
                },
                {
                  icon: Info,
                  text: "Solo necesitas crear una cuenta y completar la información mínima del perfil."
                }
              ]}
            />
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Info />
        <AlertTitle>Importante</AlertTitle>
        <AlertDescription>
          Si no proporcionas los datos de pago, la cuenta se suspenderá automáticamente sin ningún
          cargo.
        </AlertDescription>
      </Alert>
    </SectionInline>
  );
}

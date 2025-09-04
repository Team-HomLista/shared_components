import { Shield, CheckCircle, AlertTriangle } from "lucide-react";

import { ListWithIcon } from "@/components/list-with-icon";
import { SectionInline } from "@/components/section-inline";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui";

const CookieManagementSection = () => {
  return (
    <SectionInline title="¿Cómo puedes gestionar tus cookies?" icon={Shield}>
      <p>Puedes configurar tus preferencias en cualquier momento:</p>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Desde nuestro sitio:</CardTitle>
          </CardHeader>
          <CardContent>
            <ListWithIcon
              items={[
                {
                  icon: CheckCircle,
                  text: (
                    <>
                      Al ingresar por primera vez, verás un{" "}
                      <strong>banner de consentimiento</strong>.
                    </>
                  )
                },
                {
                  icon: CheckCircle,
                  text: "Puedes aceptar todas, rechazarlas o personalizarlas."
                },
                {
                  icon: CheckCircle,
                  text: (
                    <>
                      Puedes cambiar tu configuración desde el{" "}
                      <strong>botón de cookies en el pie de página</strong>.
                    </>
                  )
                }
              ]}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Desde tu navegador:</CardTitle>
          </CardHeader>
          <CardContent>
            <ListWithIcon
              items={[
                {
                  icon: CheckCircle,
                  text: (
                    <>
                      Puedes eliminar o bloquear cookies desde la configuración de tu navegador
                      (Chrome, Safari, Firefox, Edge, etc.).
                    </>
                  )
                }
              ]}
            />
          </CardContent>
        </Card>
      </div>

      <Alert variant="destructive">
        <AlertTriangle />
        <AlertTitle>Advertencia</AlertTitle>
        <AlertDescription>
          <p>
            Ten en cuenta que{" "}
            <strong>bloquear cookies esenciales puede afectar el funcionamiento del sitio</strong>.
          </p>
        </AlertDescription>
      </Alert>
    </SectionInline>
  );
};

export default CookieManagementSection;

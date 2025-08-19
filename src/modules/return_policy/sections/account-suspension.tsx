import { AlertTriangle, XCircle } from "lucide-react";

import { ListWithIcon } from "@/components/list-with-icon";
import { SectionInline } from "@/components/section-inline";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui";

export function AccountSuspensionSection() {
  return (
    <SectionInline
      title="Suspensión de cuentas sin derecho a reembolso"
      icon={AlertTriangle}
      iconVariant="destructive"
    >
      <Card>
        <CardHeader>
          <CardTitle>
            HomLista se reserva el derecho de suspender o cancelar una cuenta{" "}
            <strong>sin reembolso</strong>, en los siguientes casos:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ListWithIcon
            className="grid md:grid-cols-2"
            items={[
              "Información falsa o engañosa en el perfil o publicaciones.",
              "Publicación de contenido no autorizado o inapropiado.",
              "Uso indebido del servicio con fines ajenos al sector inmobiliario.",
              "Cualquier intento de manipular el sistema de suscripciones."
            ].map((text) => ({ icon: XCircle, iconVariant: "destructive", text }))}
          />
        </CardContent>
      </Card>
    </SectionInline>
  );
}

import { User, CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";

import { ListWithIcon } from "@/components/list-with-icon";
import { SectionInline } from "@/components/section-inline";
import { Alert, AlertDescription, AlertTitle, Text } from "@/components/ui";

export function PlatformUsageSection() {
  return (
    <SectionInline title="1. Uso de la plataforma" icon={User}>
      <Text variant="subtitle">1.1 Acceso</Text>

      <p>
        El uso de HomLista está <strong>restringido a personas mayores de 18 años</strong> que
        actúen con fines legítimos relacionados con la compra, venta o alquiler de bienes raíces.
      </p>

      <p>
        Al utilizar la plataforma, usted <strong>declara bajo protesta de decir verdad</strong> que
        cumple con este requisito.
      </p>

      <Text variant="subtitle">1.2 Creación y uso de cuenta</Text>

      <ListWithIcon
        items={[
          {
            icon: CheckCircle,
            text: "Usted es responsable de la información registrada en su cuenta y de todas las actividades realizadas desde la misma."
          },
          {
            icon: CheckCircle,
            text: "El acceso a funciones avanzadas requiere un perfil completo y verídico."
          }
        ]}
      />

      <p>
        <strong>Queda estrictamente prohibido:</strong>
      </p>

      <ListWithIcon
        items={[
          {
            icon: XCircle,
            iconVariant: "destructive",
            text: " Crear múltiples cuentas sin autorización."
          },
          {
            icon: XCircle,
            iconVariant: "destructive",
            text: "Compartir cuentas entre varias personas."
          },
          {
            icon: XCircle,
            iconVariant: "destructive",
            text: "Suplantar la identidad de terceros."
          }
        ]}
      />

      <Alert variant="destructive">
        <AlertTriangle />
        <AlertTitle>Importante</AlertTitle>
        <AlertDescription>
          HomLista se reserva el derecho de suspender, bloquear o eliminar cuentas que infrinjan
          estas normas o presenten comportamiento fraudulento.
        </AlertDescription>
      </Alert>

      <Text variant="subtitle">1.3 Información proporcionada</Text>

      <p>
        Usted se compromete a proporcionar información{" "}
        <strong>precisa, veraz, completa y actualizada</strong>.
      </p>

      <p>
        <strong>HomLista no se responsabiliza por:</strong>
      </p>

      <ListWithIcon
        items={[
          {
            icon: Info,
            text: "Errores u omisiones en los datos aportados por los usuarios."
          },
          {
            icon: Info,
            text: "Daños derivados del uso de información falsa o engañosa."
          }
        ]}
      />
    </SectionInline>
  );
}

import { XCircle } from "lucide-react";
import { Fragment, ReactNode } from "react";

import { ListWithIcon } from "@/components/list-with-icon";
import { SectionInline } from "@/components/section-inline";
import { Card, CardContent } from "@/components/ui";

const items: Array<ReactNode> = [
  "El período de prueba gratuito ha finalizado sin activación.",
  "No se canceló antes de la renovación automática.",
  "Se detectó abuso (múltiples cuentas para pruebas gratuitas).",
  <Fragment key="1">
    El usuario proporcionó <strong>información falsa o engañosa</strong>.
  </Fragment>,
  <Fragment key="2">
    Se publicaron <strong>fotos no relacionadas con bienes raíces</strong>.
  </Fragment>,
  <Fragment key="3">
    El usuario <strong>violó las normas de uso</strong> o <strong>Términos y Condiciones</strong>.
  </Fragment>,
  "Se ha utilizado activamente la plataforma (publicaciones, contactos, funciones premium)."
];

export function NoRefundCasesSection() {
  return (
    <SectionInline
      title="Casos donde NO aplica el reembolso"
      icon={XCircle}
      iconVariant="destructive"
    >
      <Card>
        <CardContent>
          <ListWithIcon
            className="grid md:grid-cols-2"
            items={items.map((text) => ({
              icon: XCircle,
              iconVariant: "destructive",
              text
            }))}
          />
        </CardContent>
      </Card>
    </SectionInline>
  );
}

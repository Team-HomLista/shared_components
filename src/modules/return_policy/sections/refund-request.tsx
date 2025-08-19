import { Mail, AlertTriangle } from "lucide-react";
import Link from "next/link";

import { SectionInline } from "@/components/section-inline";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/shared/components/ui";

export function RefundRequestSection() {
  return (
    <SectionInline title="Cómo solicitar un reembolso" icon={Mail}>
      <Card>
        <CardHeader>
          <CardTitle>Procedimiento:</CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="list-inside list-decimal space-y-2">
            <li>
              <span>
                Envía un correo a:{" "}
                <Link href="mailto:hola@homlista.com">
                  <strong>hola@homlista.com</strong>
                </Link>
              </span>
            </li>
            <li>
              <span>Incluye:</span>
              <ul className="list-inside list-disc space-y-1 pl-4">
                <li>Nombre completo y correo asociado a tu cuenta</li>
                <li>Fecha del pago y tipo de plan</li>
                <li>Motivo de la solicitud</li>
              </ul>
            </li>
            <li>El equipo de HomLista revisará tu caso en un plazo de 3 a 5 días hábiles.</li>
            <li>Si procede, el reembolso será procesado en un máximo de 10 días hábiles.</li>
          </ul>
        </CardContent>
      </Card>

      <Alert variant="destructive">
        <AlertTriangle />
        <AlertTitle>Advertencia</AlertTitle>
        <AlertDescription>
          <p>
            Solo en casos <strong>excepcionales</strong>, puedes solicitar un reembolso, siempre que{" "}
            <strong>no hayas hecho un uso significativo del servicio</strong>.
          </p>
          <p>
            HomLista no se responsabiliza por demoras en la devolución por parte del banco o
            proveedor de pago.
          </p>
        </AlertDescription>
      </Alert>
    </SectionInline>
  );
}

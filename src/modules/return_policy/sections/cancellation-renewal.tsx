import { RefreshCw, Info, AlertTriangle } from "lucide-react";

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

export function CancellationRenewalSection() {
  return (
    <SectionInline title="Cancelaciones y renovaciones" icon={RefreshCw} iconVariant="secondary">
      <Card>
        <CardHeader>
          <CardTitle>Renovaciones automáticas:</CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="list-inside list-disc space-y-2">
            <li>La renovación es mensual y automática.</li>
            <li>Es responsabilidad del usuario cancelar antes del cobro.</li>
            <li>No se realizan reembolsos por falta de cancelación o por olvido.</li>
            <li>El acceso se mantiene hasta el final del período pagado.</li>
          </ul>
        </CardContent>
      </Card>

      <Alert variant="destructive">
        <AlertTriangle />
        <AlertTitle>Advertencia</AlertTitle>
        <AlertDescription>
          <span>
            Después de activar tu plan (es decir, una vez registrada la tarjeta), las suscripciones{" "}
            <strong>no son reembolsables</strong>, excepto en los casos definidos en esta política.
          </span>
        </AlertDescription>
      </Alert>

      <Alert>
        <Info />
        <AlertTitle>Nota</AlertTitle>
        <AlertDescription>
          <span>Puedes gestionar tu suscripción desde tu panel de usuario.</span>
        </AlertDescription>
      </Alert>
    </SectionInline>
  );
}

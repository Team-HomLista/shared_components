import { Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

import { ListWithIcon } from "@/components/list-with-icon";
import { SectionInline } from "@/components/section-inline";
import { Alert, AlertDescription, AlertTitle } from "@/shared/components/ui";

export function IntellectualPropertySection() {
  return (
    <SectionInline title="2. Propiedad Intelectual" icon={Shield}>
      <p>
        Todos los contenidos de HomLista (textos, imágenes, códigos, diseño, bases de datos,
        logotipos) están protegidos por las leyes de propiedad intelectual.
      </p>

      <ListWithIcon
        items={[
          {
            icon: XCircle,
            iconVariant: "destructive",
            text: (
              <>
                <strong>Prohibiciones: </strong> Está{" "}
                <strong>prohibido copiar, modificar, reproducir o distribuir</strong> cualquier
                contenido sin consentimiento expreso.
              </>
            )
          },
          {
            icon: CheckCircle,
            text: (
              <>
                <strong>Licencia de uso: </strong> Al publicar contenido (anuncios, fotos,
                descripciones), el usuario otorga a HomLista una{" "}
                <strong>licencia no exclusiva, transferible y sin costo</strong> para su uso en
                marketing, motores de búsqueda, campañas promocionales, redes sociales, etc.
              </>
            )
          }
        ]}
      />

      <Alert variant="destructive">
        <AlertTriangle />
        <AlertTitle>Advertencia</AlertTitle>
        <AlertDescription>
          Cualquier uso no autorizado será perseguido conforme a la legislación aplicable.
        </AlertDescription>
      </Alert>
    </SectionInline>
  );
}

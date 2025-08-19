import { AlertTriangle, FileText, XCircle } from "lucide-react";

import { ListWithIcon } from "@/components/list-with-icon";
import { SectionInline } from "@/components/section-inline";
import { Alert, AlertDescription, AlertTitle, Text } from "@/shared/components/ui";

export function ContentResponsibilitySection() {
  return (
    <SectionInline title="3. Contenidos y responsabilidad de terceros" icon={FileText}>
      <Text variant="subtitle">3.1 Publicaciones de usuarios</Text>

      <p>
        Todo anuncio, comentario o publicación hecha por usuarios o agentes inmobiliarios es{" "}
        <strong>responsabilidad exclusiva de quien la publica</strong>.
      </p>

      <p>
        HomLista <strong>no garantiza ni valida la veracidad ni legalidad</strong> de los contenidos
        generados por terceros. Se recomienda verificar cualquier información antes de concretar una
        operación.
      </p>

      <Text variant="subtitle">3.2 Contenido prohibido</Text>

      <ListWithIcon
        items={[
          {
            icon: XCircle,
            iconVariant: "destructive",
            text: "Información falsa o engañosa."
          },
          {
            icon: XCircle,
            iconVariant: "destructive",
            text: "Fotografías no relacionadas con el inmueble."
          },
          {
            icon: XCircle,
            iconVariant: "destructive",
            text: "Datos de contacto visibles fuera de los campos destinados."
          },
          {
            icon: XCircle,
            iconVariant: "destructive",
            text: "Contenido ofensivo, discriminatorio o ilegal."
          }
        ]}
      />

      <Alert variant="destructive">
        <AlertTriangle />
        <AlertTitle>Importante</AlertTitle>
        <AlertDescription>
          <span>
            Las publicaciones que infrinjan estas reglas podrán ser{" "}
            <strong>eliminadas sin previo aviso ni reembolso</strong>.{" "}
          </span>
        </AlertDescription>
      </Alert>
    </SectionInline>
  );
}

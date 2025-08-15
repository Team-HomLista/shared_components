import { UserCheck } from "lucide-react";

import { SectionInline } from "@/components/section-inline";

export function UserRightsSection() {
  return (
    <SectionInline title="7. Derechos de los usuarios" icon={UserCheck}>
      <p>Puedes ejercer tus derechos de:</p>

      <ul className="list-inside list-disc">
        <li>Acceso</li>
        <li>Rectificación</li>
        <li>Cancelación</li>
        <li>Oposición - Portabilidad (si aplica)</li>
        <li>Limitación del tratamiento</li>
      </ul>

      <p>
        📩 Para ejercerlos, escríbenos a: <strong>hola@homlista.com</strong>
      </p>
      <p>
        Si consideras que no respetamos tus derechos, puedes acudir al{" "}
        <strong>INAI (México)</strong>, <strong>la CNIL (Francia)</strong>,{" "}
        <strong>l’OPC (Canadá)</strong> o la autoridad competente según tu país.
      </p>
    </SectionInline>
  );
}

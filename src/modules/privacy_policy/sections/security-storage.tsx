import { Shield } from "lucide-react";

import { SectionInline } from "@/components/section-inline";

export function SecurityAndStorageSection() {
  return (
    <SectionInline title="5. Seguridad y almacenamiento" icon={Shield}>
      <p>Implementamos medidas técnicas y organizativas para proteger sus datos, como:</p>
      <ul className="list-inside list-disc">
        <li>Cifrado de datos sensibles.</li>
        <li>Acceso limitado y controlado a la información.</li>
        <li>Firewalls y monitoreo continuo.</li>
      </ul>
      <p>
        <strong>Almacenamiento:</strong> Los datos se guardan en **DigitalOcean y Vercel (EE.UU.)**.
        En caso de transferencias internacionales, se garantiza su seguridad conforme a las
        cláusulas contractuales tipo aprobadas por la UE y mecanismos equivalentes.
      </p>
      <p>
        <strong>Periodo de conservación:</strong> 5 años desde la última actividad del usuario.
      </p>
    </SectionInline>
  );
}

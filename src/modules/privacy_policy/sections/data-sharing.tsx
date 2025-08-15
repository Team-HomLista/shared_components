import { Share } from "lucide-react";

import { SectionInline } from "@/components/section-inline";

export function DataSharingSection() {
  return (
    <SectionInline title="6. Compartición de datos" icon={Share}>
      <p>Nunca vendemos ni alquilamos tus datos. Podemos compartir información:</p>
      <ul className="list-inside list-disc">
        <li>Con tu consentimiento.</li>
        <li>Con proveedores de servicios (pagos, servidores, IA, soporte técnico).</li>
        <li>Por requerimientos legales.</li>
        <li>En caso de fusión o adquisición.</li>
      </ul>
      Todos los terceros están obligados a cumplir con acuerdos de confidencialidad y medidas
      adecuadas de protección.
    </SectionInline>
  );
}

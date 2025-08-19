import { Target } from "lucide-react";

import { SectionInline } from "@/components/section-inline";

export function ProcessingPurposeSection() {
  return (
    <SectionInline title="3. Finalidad del tratamiento" icon={Target}>
      <p>Usamos los datos para:</p>

      <ul className="list-inside list-disc">
        <li>Gestionar cuentas y servicios.</li>
        <li>Procesar pagos y enviar notificaciones.</li>
        <li>Personalizar la experiencia del usuario.</li>
        <li>Garantizar seguridad y prevenir fraudes.</li>
        <li>Cumplir con obligaciones legales.</li>
        <li>Enviar comunicaciones comerciales (previo consentimiento).</li>
      </ul>
    </SectionInline>
  );
}

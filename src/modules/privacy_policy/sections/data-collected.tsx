import { Text } from "@shared/components/ui";
import { ClipboardList } from "lucide-react";

import { SectionInline } from "@/components/section-inline";

export function DataCollectedSection() {
  return (
    <SectionInline icon={ClipboardList} title="2. Datos que recopilamos">
      <Text variant="subtitle">2.1. Información proporcionada directamente</Text>

      <ul className="list-inside list-disc">
        <li>Creación de cuentas.</li>
        <li>Publicación o búsqueda de propiedades.</li>
        <li>Contacto con asesores o soporte.</li>
        <li>Participación en encuestas, promociones o marketing.</li>
      </ul>

      <Text variant="subtitle">2.2. Información automática</Text>

      <ul className="list-inside list-disc">
        <li>Dirección IP, tipo de navegador, dispositivo, sistema operativo.</li>
        <li>Cookies, tracking y comportamiento en la plataforma.</li>
        <li>Ubicación geográfica aproximada.</li>
      </ul>

      <Text variant="subtitle">2.3. Información financiera</Text>

      <ul className="list-inside list-disc">
        <li>Datos bancarios y de pago (cuando aplica).</li>
      </ul>
    </SectionInline>
  );
}

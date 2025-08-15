import { Cookie } from "lucide-react";

import { SectionInline } from "@/components/section-inline";

export function CookiesTrackingTechSection() {
  return (
    <SectionInline title="4. Cookies y tecnologías de rastreo" icon={Cookie}>
      <p>Utilizamos cookies y herramientas como:</p>

      <ul className="list-inside list-disc">
        <li>
          <strong>Google Analytics</strong>
        </li>
        <li>
          <strong>Píxeles de Meta (Facebook/Instagram)</strong>
        </li>
        <li>
          <strong>Tecnologías de tracking de Google Ads y CRM propio</strong>
        </li>
      </ul>

      <p>
        Puedes gestionar tus preferencias desde el navegador o el banner de cookies al ingresar al
        sitio.
      </p>
    </SectionInline>
  );
}

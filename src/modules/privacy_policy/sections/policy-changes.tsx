import { FileEdit } from "lucide-react";

import { SectionInline } from "@/components/section-inline";

export function PolicyChanges() {
  return (
    <SectionInline title="9. Cambios en la política" icon={FileEdit}>
      <p>
        Nos reservamos el derecho de modificar esta política. Notificaremos cualquier cambio
        relevante por correo electrónico o mediante un aviso en la plataforma.
      </p>
    </SectionInline>
  );
}

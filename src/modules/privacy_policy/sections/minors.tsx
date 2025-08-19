import { User } from "lucide-react";

import { SectionInline } from "@/components/section-inline";

export function MinorsSection() {
  return (
    <SectionInline title="8. Menores de edad" icon={User}>
      <p>
        HomLista está destinado exclusivamente a mayores de 18 años. Eliminaremos cualquier cuenta
        que infrinja esta regla.
      </p>
    </SectionInline>
  );
}

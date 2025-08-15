import { Settings } from "lucide-react";

import { SectionInline } from "@/components/section-inline";

const PolicyChangesSection = () => {
  return (
    <SectionInline title="Cambios en esta Política" icon={Settings}>
      <p>Podemos actualizar esta política en cualquier momento.</p>
      <p>
        Los cambios sustanciales serán notificados mediante el banner de cookies o por correo
        electrónico si corresponde.
      </p>
    </SectionInline>
  );
};

export default PolicyChangesSection;

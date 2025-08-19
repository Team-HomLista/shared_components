import { Shield } from "lucide-react";

import { SectionInline } from "@/components/section-inline";

const InternationalTransferSection = () => {
  return (
    <SectionInline title="Transferencia internacional de datos" icon={Shield}>
      <p>
        Algunas cookies procesan datos fuera de México (principalmente en EE.UU.), en servidores de
        proveedores como <strong>Google, Meta y Vercel</strong>.
      </p>
      <p>
        HomLista garantiza que estas transferencias cumplen con las{" "}
        <strong>cláusulas contractuales tipo del RGPD</strong>, acuerdos equivalentes o medidas de
        seguridad compatibles con la LFPDPPP.
      </p>
    </SectionInline>
  );
};

export default InternationalTransferSection;

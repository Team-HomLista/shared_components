import { Stamp } from "lucide-react";

import { SectionInline } from "@/components/section-inline";

export function LegalResponsibleFrameworkSection() {
  return (
    <SectionInline icon={Stamp} title="1. Marco Legal y Responsable">
      <p>La gestión de sus datos se realiza conforme a:</p>

      <ul className="list-inside list-disc">
        <li>
          La{" "}
          <strong>
            Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)
          </strong>{" "}
          en México.
        </li>
        <li>
          El <strong>Reglamento General de Protección de Datos (RGPD)</strong> en la Unión Europea.
        </li>
        <li>
          Las leyes aplicables de <strong>Canadá y EE.UU</strong>.
        </li>
      </ul>

      <p>
        La plataforma es operada por <strong>SUEÑITZA S.A. de C.V.</strong>, con domicilio en Monte
        Athos, Cancún 77560, México. RFC: <strong>SUE210813LY6</strong> Responsable de datos:{" "}
        <strong>Bruno Chambon</strong>
      </p>
    </SectionInline>
  );
}

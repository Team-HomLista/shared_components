import { Cookie } from "lucide-react";

import { SectionInline } from "@/components/section-inline";

const WhatAreCookiesSection = () => {
  return (
    <SectionInline title="¿Qué son las cookies?" icon={Cookie}>
      <p>
        Las <strong>cookies</strong> son pequeños archivos de texto que se almacenan en su
        dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Sirven para recordar sus
        preferencias, mejorar su experiencia de navegación y recopilar información estadística.
      </p>
    </SectionInline>
  );
};

export default WhatAreCookiesSection;

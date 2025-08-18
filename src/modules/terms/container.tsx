import { ContactCardSection } from "@/components/contact-card";
import { BasicHero } from "@/layouts/website/body/basic-hero";

import { ContentResponsibilitySection } from "./sections/content-responsibility";
import { IntellectualPropertySection } from "./sections/intellectual-property";
import { PlatformUsageSection } from "./sections/platform-usage";

export function TermsPageContainer() {
  return (
    <BasicHero
      title="Términos y Condiciones de uso"
      description="Bienvenido a HomLista. Al acceder y utilizar nuestra plataforma,
            usted acepta estos Términos y Condiciones en su totalidad. Este
            documento establece las reglas, derechos y obligaciones aplicables a
            todos los usuarios."
      badge="Última actualización: 23/06/2025"
    >
      <PlatformUsageSection />
      <IntellectualPropertySection />
      <ContentResponsibilitySection />
      <ContactCardSection
        subtitle="Contacto"
        description="Para consultas relacionadas con los Términos y Condiciones:"
      />
    </BasicHero>
  );
}

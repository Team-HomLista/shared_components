import { BasicHeroSection } from "@/components/basic-hero";
import { ContactCardSection } from "@/components/contact-card";

import { ContentResponsibilitySection } from "./sections/content-responsibility";
import { IntellectualPropertySection } from "./sections/intellectual-property";
import { PlatformUsageSection } from "./sections/platform-usage";

export const TermsPageContainer = () => {
  return (
    <div className="from-background via-background to-terciary/20 min-h-screen bg-gradient-to-br">
      <BasicHeroSection
        policyName="Términos y Condiciones de uso"
        description="Bienvenido a HomLista. Al acceder y utilizar nuestra plataforma,
            usted acepta estos Términos y Condiciones en su totalidad. Este
            documento establece las reglas, derechos y obligaciones aplicables a
            todos los usuarios."
        lastUpdated="23/06/2025"
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12">
          <PlatformUsageSection />
          <IntellectualPropertySection />
          <ContentResponsibilitySection />
          <ContactCardSection
            subtitle="Contacto"
            description="Para consultas relacionadas con estos Términos y Condiciones:"
          />
        </div>
      </div>
    </div>
  );
};

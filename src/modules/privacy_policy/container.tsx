import { ContactCardSection } from "@/components/contact-card";
import { BasicHero } from "@/layouts/website/body/basic-hero";

import { CookiesTrackingTechSection } from "./sections/cookies-tracking-tech";
import { DataCollectedSection } from "./sections/data-collected";
import { DataSharingSection } from "./sections/data-sharing";
import { LegalResponsibleFrameworkSection } from "./sections/legal-responsible-framework";
import { MinorsSection } from "./sections/minors";
import { PolicyChanges } from "./sections/policy-changes";
import { ProcessingPurposeSection } from "./sections/processing-purpose";
import { SecurityAndStorageSection } from "./sections/security-storage";
import { UserRightsSection } from "./sections/user-rights";

export const PrivacyPolicyPageContainer = () => {
  return (
    <BasicHero
      title="Política de privacidad"
      description={
        <>
          Bienvenido a HomLista. Esta Política de Privacidad describe cómo recopilamos, usamos,
          almacenamos y protegemos sus datos personales al utilizar nuestra plataforma.
        </>
      }
      badge="Última actualización: 23/06/2025"
    >
      <LegalResponsibleFrameworkSection />
      <DataCollectedSection />
      <ProcessingPurposeSection />
      <CookiesTrackingTechSection />
      <SecurityAndStorageSection />
      <DataSharingSection />
      <UserRightsSection />
      <MinorsSection />
      <PolicyChanges />
      <ContactCardSection
        subtitle="Contacto"
        description="Para consultas relacionadas con las politicas de privacidad."
      />
    </BasicHero>
  );
};

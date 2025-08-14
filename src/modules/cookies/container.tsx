import { BasicHeroSection } from "@/components/basic-hero";
import { ContactCardSection } from "@/components/contact-card";

import CookieManagementSection from "./sections/cookie-management";
import InternationalTransferSection from "./sections/international-transfer";
import PolicyChangesSection from "./sections/policy-changes";
import ThirdPartyCookiesSection from "./sections/third-party";
import TypesOfCookiesSection from "./sections/types-of-cookies";
import WhatAreCookiesSection from "./sections/what-are-cookies";

export const CookiesPageContainer = () => {
  return (
    <div className="from-background via-background to-terciary/20 min-h-screen bg-gradient-to-br">
      <BasicHeroSection
        policyName="Política de Cookies"
        description="En HomLista valoramos tu privacidad y queremos que entiendas cómo utilizamos las cookies para mejorar tu experiencia."
        lastUpdated="23/06/2025"
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12">
          <WhatAreCookiesSection />
          <TypesOfCookiesSection />
          <ThirdPartyCookiesSection />
          <CookieManagementSection />
          <InternationalTransferSection />
          <PolicyChangesSection />
          <ContactCardSection
            subtitle="Contacto"
            description="Para cualquier duda sobre esta Política o el uso de cookies:"
          />
        </div>
      </div>
    </div>
  );
};

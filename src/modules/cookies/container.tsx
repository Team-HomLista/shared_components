import { ContactCardSection } from "@/components/contact-card";
import { BasicHero } from "@/components/layouts/website/body/basic-hero";

import CookieManagementSection from "./sections/cookie-management";
import InternationalTransferSection from "./sections/international-transfer";
import PolicyChangesSection from "./sections/policy-changes";
import ThirdPartyCookiesSection from "./sections/third-party";
import TypesOfCookiesSection from "./sections/types-of-cookies";
import WhatAreCookiesSection from "./sections/what-are-cookies";

export function CookiesPageContainer() {
  return (
    <BasicHero
      title="Política de Cookies"
      description="En HomLista valoramos tu privacidad y queremos que entiendas cómo utilizamos las cookies para mejorar tu experiencia."
      badge="Última actualización: 23/06/2025"
    >
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
    </BasicHero>
  );
}

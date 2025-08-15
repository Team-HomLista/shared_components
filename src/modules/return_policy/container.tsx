import { BasicHeroSection } from "@/components/basic-hero";
import { ContactCardSection } from "@/components/contact-card";

import { AccountSuspensionSection } from "./sections/account-suspension";
import { CancellationRenewalSection } from "./sections/cancellation-renewal";
import { FreeTrialSection } from "./sections/free-trial";
import { NoRefundCasesSection } from "./sections/no-refund-cases";
import { RefundRequestSection } from "./sections/refund-request";

export const ReturnPolicyPageContainer = () => {
  return (
    <div className="from-background via-background to-terciary/20 min-h-screen bg-gradient-to-br">
      <BasicHeroSection
        policyName="Política de Reembolso "
        description="En HomLista, nos esforzamos por ofrecer un servicio transparente, profesional y justo para todos nuestros usuarios. Esta política describe las condiciones bajo las cuales se otorgan reembolsos y cuándo se niegan, conforme a nuestras normas de uso."
        lastUpdated="23/06/2025"
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12">
          <FreeTrialSection />
          <CancellationRenewalSection />
          <RefundRequestSection />
          <NoRefundCasesSection />
          <AccountSuspensionSection />
          <ContactCardSection
            subtitle="Contacto"
            description="Para cualquier duda sobre esta Política o el uso de cookies:"
          />
        </div>
      </div>
    </div>
  );
};

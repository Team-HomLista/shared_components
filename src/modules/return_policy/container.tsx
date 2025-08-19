import { ContactCardSection } from "@/components/contact-card";
import { BasicHero } from "@/layouts/website/body/basic-hero";

import { AccountSuspensionSection } from "./sections/account-suspension";
import { CancellationRenewalSection } from "./sections/cancellation-renewal";
import { FreeTrialSection } from "./sections/free-trial";
import { NoRefundCasesSection } from "./sections/no-refund-cases";
import { RefundRequestSection } from "./sections/refund-request";

export function ReturnPolicyPageContainer() {
  return (
    <BasicHero
      title="Política de Reembolso "
      description="En HomLista, nos esforzamos por ofrecer un servicio transparente, profesional y justo para todos nuestros usuarios. Esta política describe las condiciones bajo las cuales se otorgan reembolsos y cuándo se niegan, conforme a nuestras normas de uso."
      badge="Última actualización: 23/06/2025"
    >
      <FreeTrialSection />
      <CancellationRenewalSection />
      <RefundRequestSection />
      <NoRefundCasesSection />
      <AccountSuspensionSection />
      <ContactCardSection
        subtitle="Contacto"
        description="Para cualquier duda sobre esta Política o el uso de cookies:"
      />
    </BasicHero>
  );
}

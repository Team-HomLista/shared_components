import { FC } from "react";

import { Faqs } from "@/modules/plans/faq/faq-data";
import { CTASubscriptionSection } from "@/modules/plans/sections/cta-subscription";
import { FaqSection } from "@/modules/plans/sections/faq";
import { HomlistaFeaturesSection } from "@/modules/plans/sections/homlista-features";
import { PartnersSection } from "@/modules/plans/sections/partners";
import { PricingCardSection } from "@/modules/plans/sections/pricing-cards";
import { ComparisonTableSection } from "@/modules/plans/sections/pricing-table";
import { SubscriptionHeroSection } from "@/modules/plans/sections/suscription-hero";

export interface SubscriptionContainerProps {}

export const PlansPageContainer: FC<SubscriptionContainerProps> = () => {
  return (
    <>
      <SubscriptionHeroSection />
      <HomlistaFeaturesSection />
      <PricingCardSection />
      <ComparisonTableSection />
      <FaqSection faqs={Faqs} />
      <CTASubscriptionSection />
      <PartnersSection />
    </>
  );
};

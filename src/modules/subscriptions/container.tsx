import { FC } from "react";

import { Navbar } from "@/components/navbar";
import { Faqs } from "@/modules/subscriptions/faq/faq-data";
import { CTASubscriptionSection } from "@/modules/subscriptions/sections/cta-subscription";
import { FaqSection } from "@/modules/subscriptions/sections/faq";
import { HomlistaFeaturesSection } from "@/modules/subscriptions/sections/homlista-features";
import { PartnersSection } from "@/modules/subscriptions/sections/partners";
import { PricingCardSection } from "@/modules/subscriptions/sections/pricing-cards";
import { ComparisonTableSection } from "@/modules/subscriptions/sections/pricing-table";
import { SubscriptionHeroSection } from "@/modules/subscriptions/sections/suscription-hero";

export interface SubscriptionContainerProps {}

export const SubscriptionPageContainer: FC<SubscriptionContainerProps> = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar variant="default" />
        <SubscriptionHeroSection />
        <HomlistaFeaturesSection />
        <PricingCardSection />
        <ComparisonTableSection />
        <FaqSection faqs={Faqs} />
        <CTASubscriptionSection />
        <PartnersSection />
      </div>
    </>
  );
};

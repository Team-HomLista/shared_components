import { FC } from "react";
import { CTASubscriptionSection } from "../sections/cta-subscription";
import { HomlistaFeaturesSection } from "../sections/homlista-features";
import { PricingCardSection } from "../sections/pricing-cards";
import { ComparisonTableSection } from "../sections/pricing-table";
import { SubscriptionHeroSection } from "../sections/suscription-hero";
import { Footer } from "@/components/footer/footer";
import { Faqs } from "@/components/faq/faq-data";
import { PartnersSection } from "../sections/partners";
import { FaqSection } from "../sections/faq";

export interface SubscriptionContainerProps {}

export const SubscriptionPageContainer: FC<
  SubscriptionContainerProps
> = ({}) => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        {/* <Navbar /> */}
        <SubscriptionHeroSection />
        <HomlistaFeaturesSection />
        <PricingCardSection />
        <ComparisonTableSection />
        <FaqSection faqs={Faqs} />
        <CTASubscriptionSection />
        <PartnersSection />
        <Footer />
      </div>
    </>
  );
};

import { FC } from "react";

import { AssociatesMarqueeLogo } from "@/components/associates-carousel";
import { SectionHeader } from "@/components/section-header";

interface PartnersSectionProps {}

export const PartnersSection: FC<PartnersSectionProps> = () => {
  return (
    <section>
      <SectionHeader
        title="Asociados"
        description="Colaboramos con organizaciones y asociaciones reconocidas 
        para garantizar los más altos estándares del mercado inmobiliario"
        orientation="right"
      />
      <div className="overflow-hidden pb-16">
        <AssociatesMarqueeLogo />
      </div>
    </section>
  );
};

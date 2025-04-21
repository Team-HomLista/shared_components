import { SectionHeader } from "@/components/section-header";
import { FC } from "react";

interface PartnersSectionProps {}

export const PartnersSection: FC<PartnersSectionProps> = ({}) => {
  return (
    <section>
      <SectionHeader
        title="Asociados"
        description="Colaboramos con organizaciones y asociaciones reconocidas 
        para garantizar los más altos estándares del mercado inmobiliario"
        orientation="right"
      />
    </section>
  );
};

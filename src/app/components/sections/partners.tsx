import { SectionHeader } from "@/components/section-header";
import { FC } from "react";

interface PartnersSectionProps {
  // Define your props here
}

export const PartnersSection: FC<PartnersSectionProps> = ({}) => {
  return (
    <section>
      <SectionHeader
        title="Asociados"
        description="Colaboramos con organizacionesy asociaciones reconocidas 
        para garantizar los más altos estándares del mercado inmobiliario"
        orientation="right"
      />
    </section>
  );
};

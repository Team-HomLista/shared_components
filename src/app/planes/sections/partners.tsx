import { AssociatesMarqueeLogo } from "@/components/associates-carousel";
import { SectionHeader } from "@/components/section-header";
import { FC } from "react";

interface PartnersSectionProps {}

export const PartnersSection: FC<PartnersSectionProps> = ({}) => {
  return (
    <section>
      <div className="mx-auto mb-20 flex w-full flex-col items-center pt-16 text-center">
        <h2 className="mb-6 max-w-3xl text-4xl font-bold md:text-5xl">
          Conoce a nuestros aliados
        </h2>
        <p className="max-w-xl text-xl text-gray-600">
          Trabajamos de la mano con reconocidas compañías del sector para
          ofrecerte las mejores oportunidades.
        </p>
      </div>
      <AssociatesMarqueeLogo />
    </section>
  );
};

import { FC } from "react";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { FindForm } from "@/components/find-section-form";
import { SliderForm } from "@/components/slider-form/indext";

interface FindSectionProps {}

export const FindSection: FC<FindSectionProps> = ({}) => {
  return (
    <section className="flex flex-col items-center justify-evenly gap-4 bg-[#F5F5F5] pb-8">
      <div>
        <SectionHeader
          title="Encuentra"
          description="¿Aún no encuentras lo que buscas? Deja que nuestra IA te 
        recomiende opciones o encuentre el mejor asesor para ti"
          orientation="left"
        ></SectionHeader>
        <FindForm />
        {/* Dialog must be here */}
      </div>
      <SliderForm />
    </section>
  );
};

import { FC } from "react";
import DiscoverCarousel from "@/components/property-carousel";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/divider";
import { Section } from "lucide-react";
import { SectionHeader } from "@/components/section-header";

interface DiscoverSectionProps {}

export const DiscoverSection: FC<DiscoverSectionProps> = ({}) => {
  return (
    <section className="w-full h-full flex flex-col items-start pb-14">
      <SectionHeader
        title="Descubre"
        description=" Encuentra casas en venta o renta, departamentos, terrenos, todas las
          opciones las encontrarás con nosotros"
      >
        <Button className="w-fit mt-6">Explorar propiedades</Button>
      </SectionHeader>
      <div className="w-full flex flex-row p-4">
        <DiscoverCarousel />
      </div>
    </section>
  );
};

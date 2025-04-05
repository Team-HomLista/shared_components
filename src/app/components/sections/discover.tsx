import { FC } from "react";
import {
  PropertyCarousel,
  PropertyCarouselProps,
} from "@/components/property-carousel";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";

export interface DiscoverSectionProps extends PropertyCarouselProps {}

/**
 * The `DiscoverSection` component is a functional React component that displays
 * a section for discovering properties. It includes a header with a title, description,
 * and a button, as well as a carousel to showcase property items.
 *
 * @component
 * @example
 * ```tsx
 * <DiscoverSection
 *   items={[
 *     { id: 1, title: "Property 1", image: "image1.jpg" },
 *     { id: 2, title: "Property 2", image: "image2.jpg" },
 *   ]}
 *   onClickLike={(id) => console.log(`Liked property with id: ${id}`)}
 * />
 * ```
 *
 */
export const DiscoverSection: FC<DiscoverSectionProps> = ({
  items,
  onClickLike,
}) => {
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
        <PropertyCarousel items={items} onClickLike={onClickLike} />
      </div>
    </section>
  );
};

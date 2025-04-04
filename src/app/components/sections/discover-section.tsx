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
 * @param {DiscoverSectionProps} props - The props for the component.
 * @param {Array<Object>} props.items - An array of property items to display in the carousel.
 * Each item should include details such as `id`, `title`, and `image`.
 * @param {Function} props.onClickLike - A callback function triggered when the "like" button
 * is clicked on a property item. Receives the `id` of the liked property as an argument.
 *
 * @returns {JSX.Element} A JSX element representing the discover section.
 *
 * @remarks
 * This component is typically used in property listing pages to allow users to explore
 * available properties. It leverages the `PropertyCarousel` component to display the items
 * in a scrollable format.
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

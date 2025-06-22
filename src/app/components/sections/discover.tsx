import { FC } from "react";
import {
  PropertyCarousel,
  PropertyCarouselProps,
} from "@/components/property-carousel";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import Link from "next/link";

export interface DiscoverSectionProps extends PropertyCarouselProps {}

/**
 * The `DiscoverSection` component is a functional React component that displays
 * a section for discovering properties. It includes a header with a title,
 * description, and a button, as well as a carousel to showcase property items.
 */
export const DiscoverSection: FC<DiscoverSectionProps> = ({
  items,
  onClickLike,
}) => {
  return (
    <section className="flex h-full w-full flex-col items-start pb-14">
      <SectionHeader
        title="Descubre"
        description=" Encuentra casas en venta o renta, departamentos, terrenos, todas las opciones las encontrarás con nosotros"
      >
        <Button asChild className="mt-6 w-fit">
          <Link href={"/propiedades"}>Explorar propiedades</Link>
        </Button>
      </SectionHeader>
      <div className="flex w-full flex-row items-center justify-center p-4">
        <PropertyCarousel items={items} onClickLike={onClickLike} />
      </div>
    </section>
  );
};

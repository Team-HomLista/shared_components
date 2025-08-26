"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@shared/components/ui/carousel";
import React, { FC } from "react";

import { PropertyCardItem, PropertyCardItemProps } from "@/components/property-card";

export interface PropertyCarouselProps extends Pick<PropertyCardItemProps, "onClickLike"> {
  items: Array<Omit<PropertyCardItemProps, "onClickLike">>;
}

/** A functional component that displays a carousel of property cards. It allows
 * users to scroll through a list of properties and interact with them, such as
 * liking a property.
 */
export const PropertyCarousel: FC<PropertyCarouselProps> = ({ items, onClickLike }) => {
  return (
    <div className="mx-auto w-full max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
      <Carousel className="w-full" opts={{ align: "center", loop: true }}>
        <div className="flex w-full items-center gap-2 sm:gap-4">
          <CarouselPrevious className="static size-8 flex-shrink-0 translate-x-0 translate-y-0" />
          <CarouselContent className="min-w-0 flex-1 px-4">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="flex justify-center">
                  <PropertyCardItem {...item} onClickLike={onClickLike} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="static size-8 flex-shrink-0 translate-x-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

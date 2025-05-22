"use client";
import React, { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { PropertyCardItem, PropertyCardItemProps } from "../property-card";

export interface PropertyCarouselProps
  extends Pick<PropertyCardItemProps, "onClickLike"> {
  items: Array<Omit<PropertyCardItemProps, "onClickLike">>;
}

/** A functional component that displays a carousel of property cards. It allows
 * users to scroll through a list of properties and interact with them, such as
 * liking a property.
 */
export const PropertyCarousel: FC<PropertyCarouselProps> = ({
  items,
  onClickLike,
}) => {
  return (
    <Carousel className="max-w-[1128px]" opts={{ align: "center", loop: true }}>
      <CarouselPrevious />
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <PropertyCardItem {...item} onClickLike={onClickLike} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};

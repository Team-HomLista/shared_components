"use client";
import React, { FC, useState } from "react";
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

export const PropertyCarousel: FC<PropertyCarouselProps> = ({
  items,
  onClickLike,
}) => {
  return (
    <Carousel
      className="w-full flex flex-row items-center justify-center gap-4"
      opts={{ slidesToScroll: 5 }}
    >
      <CarouselPrevious />
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="basis-1/5">
            <PropertyCardItem {...item} onClickLike={onClickLike} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};

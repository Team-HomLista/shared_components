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

/** PropertyCarouselProps
 *
 * Defines the props for the `PropertyCarousel` component.
 * Includes a list of property card items and a callback function for handling "like" actions.
 */
export interface PropertyCarouselProps
  extends Pick<PropertyCardItemProps, "onClickLike"> {
  /**
   * An array of property card items to be displayed in the carousel.
   * Each item excludes the `onClickLike` function.
   */
  items: Array<Omit<PropertyCardItemProps, "onClickLike">>;
}

/** PropertyCarousel
 *
 * A functional component that displays a carousel of property cards.
 * It allows users to scroll through a list of properties and interact with them, such as liking a property.
 *
 * @param {PropertyCarouselProps} props - Props containing the list of property items and the "like" callback function.
 * @returns {JSX.Element} A JSX element rendering the property carousel.
 *
 * @example
 * ```tsx
 * const items = [
 *   {
 *     image: "/path/to/image.jpg",
 *     feature: { tag: "New" },
 *     banner: { transaction: "For Sale" },
 *     information: {
 *       title: "Modern Apartment",
 *       location: "New York, USA",
 *       price: { value: 250000, currency: "USD" },
 *       features: [
 *         { type: "Rooms", value: 3 },
 *         { type: "Bathrooms", value: 2 },
 *       ],
 *     },
 *   },
 * ];
 *
 * const handleLike = (index, isLiked) => {
 *   console.log(`Property at index ${index} is liked: ${isLiked}`);
 * };
 *
 * <PropertyCarousel items={items} onClickLike={handleLike} />;
 * ```
 */
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

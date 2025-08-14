"use client";
import { useEffect, useState } from "react";

import { PropertyCardItemProps } from "@/components/property-card";
import { Property } from "@/types/property";

export interface UseHomeProps {
  properties: Array<Property>;
}

/** UseHomeReturn
 *
 * Defines the return type of the `useHome` hook.
 * Includes a callback function for handling "like" actions and a list of property card items.
 */
export interface UseHomeReturn {
  /**
   * Callback function triggered when a property card's like button is clicked.
   * @param index - Index of the property card.
   * @param isLiked - Current like state of the property card.
   */
  onClickLike: (index: number, isLiked: boolean) => void;

  items: Array<Omit<PropertyCardItemProps, "onClickLike">>;
}

/** useHome
 *
 * A custom hook that processes a list of properties and prepares them for display as property cards.
 * It also provides a callback function for handling "like" actions on the property cards.
 *
 * @param {UseHomeProps} props - Props containing the list of properties.
 * @returns {UseHomeReturn} An object containing the processed property card items and the "like" callback function.
 *
 * @example
 * ```tsx
 * const { items, onClickLike } = useHome({ properties });
 * ```
 */
export const useHome = ({ properties }: UseHomeProps): UseHomeReturn => {
  const [items, setItems] = useState<Array<Omit<PropertyCardItemProps, "onClickLike">>>([]);

  useEffect(() => {
    setItems(
      properties.map((property) => {
        return {
          banner: { transaction: property.transaction_type },
          tag: property.is_featured ? "Featured" : undefined,
          information: {
            location: property.city,
            price: {
              currency: property.price_currency,
              value: property.price
            },
            title: property.title,
            details: {
              bathrooms: property.bathrooms,
              building_size: property.building_size,
              land_size: property.land_size,
              parking_slots: property.parking_slots,
              rooms: property.rooms
            }
          },
          image: property.cover_image,
          slug: property.slug
        };
      })
    );
  }, []);

  const onClickLike = () => {};

  return { items, onClickLike };
};

"use client";
import { PropertyCardItemProps } from "@/components/property-card";
import { Property } from "@/types/property";
import { useEffect, useState } from "react";

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
  const [items, setItems] = useState<
    Array<Omit<PropertyCardItemProps, "onClickLike">>
  >([]);

  useEffect(() => {
    setItems(
      properties.map((property) => {
        return {
          banner: { transaction: property.transaction },
          feature: { tag: property.tag },
          information: {
            features: property.features,
            location: property.location,
            price: property.price,
            title: property.title,
          },
          image: property.image,
        };
      })
    );
  }, []);

  const onClickLike = (index: number, isLiked: boolean) => {};

  return { items, onClickLike };
};

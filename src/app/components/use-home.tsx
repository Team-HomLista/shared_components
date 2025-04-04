"use client";
import { PropertyCardItemProps } from "@/components/property-card";
import { Property } from "@/types/property";
import { useEffect, useState } from "react";

/** UseHomeProps
 *
 * Defines the props for the `useHome` hook.
 * Includes an array of `Property` objects representing the properties to be displayed.
 */
export interface UseHomeProps {
  /**
   * Array of properties to be processed and displayed.
   */
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

  /**
   * Array of property card items to be displayed, excluding the `onClickLike` function.
   */
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

  /** onClickLike
   *
   * Handles the "like" action for a property card.
   * Currently, this function is a placeholder and does not perform any actions.
   *
   * @param {number} index - Index of the property card.
   * @param {boolean} isLiked - Current like state of the property card.
   */
  const onClickLike = (index: number, isLiked: boolean) => {};

  return { items, onClickLike };
};

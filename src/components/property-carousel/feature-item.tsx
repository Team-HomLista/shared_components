import { LucideProps } from "lucide-react";
import { FC } from "react";
import { Text } from "@/components/ui/text";

/**
 * @deprecated
 *
 * The `PropertyCarouselFeatureItem` component is deprecated and has been replaced by the `getFeatureIcons` function
 * in `property-feature.tsx`. Use `getFeatureIcons` for generating property feature icons and values.
 *
 * @typedef {Object} PropertyCarouselFeatureItemProps
 * @property {React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>} Icon -
 * The icon to display, typically representing a property feature (e.g., bed, shower, car).
 * @property {string | number} value - The value associated with the feature (e.g., number of rooms, size in m²).
 *
 * @example
 * // Instead of using this component:
 * <PropertyCarouselFeatureItem Icon={BedIcon} value={3} />
 *
 * // Use the `getFeatureIcons` function:
 * const features = [{ type: "Rooms", value: 3 }];
 * const featureIcons = getFeatureIcons(features);
 */
export interface PropertyCarouselFeatureItemProps {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  value: string | number;
}

/**
 * @deprecated
 *
 * The `PropertyCarouselFeatureItem` component is deprecated and has been replaced by the `getFeatureIcons` function
 * in `property-feature.tsx`. Use `getFeatureIcons` for generating property feature icons and values.
 *
 * @param {PropertyCarouselFeatureItemProps} props - The props for the component.
 * @returns {JSX.Element} A JSX element displaying the feature icon and value.
 */
export const PropertyCarouselFeatureItem: FC<
  PropertyCarouselFeatureItemProps
> = ({ Icon, value }) => {
  return (
    <Text className="flex flex-row gap-2 justify-items-center text-black">
      <Icon /> {value}
    </Text>
  );
};

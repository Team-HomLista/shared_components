import { LucideProps } from "lucide-react";
import { FC } from "react";
import { Text } from "@/components/ui/text";

/**
 * Props for the PropertyCarouselFeatureItem component.
 *
 * @typedef {Object} PropertyCarouselFeatureItemProps
 * @property {React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>} Icon -
 * The icon to display, typically representing a property feature (e.g., bed, shower, car).
 * @property {string | number} value - The value associated with the feature (e.g., number of rooms, size in m²).
 */
export interface PropertyCarouselFeatureItemProps {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  value: string | number;
}

/**
 * PropertyCarouselFeatureItem is a React functional component that displays
 * a property feature with an icon and its corresponding value.
 *
 * @component
 * @example
 * return (
 *   <PropertyCarouselFeatureItem Icon={Bed} value={3} />
 * )
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

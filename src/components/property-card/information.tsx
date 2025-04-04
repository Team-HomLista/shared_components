import { PropertyFeature } from "@/types/feature";
import { FC } from "react";
import { Text } from "@/components/ui/text";
import { formatPrice } from "@/app/utils/price-formatter";
import { getFeatureIcons } from "@/app/utils/property-feature";

/** PropertyCardInformationProps
 *
 * Defines the props for the `PropertyCardInformation` component.
 * Includes details about the property such as title, location, price, and features.
 */
export interface PropertyCardInformationProps {
  /**
   * The title of the property (e.g., "Modern Apartment").
   */
  title: string;

  /**
   * The location of the property (e.g., "New York, USA").
   */
  location: string;

  /**
   * The price of the property, including its value and currency.
   */
  price: {
    value: number;
    currency: string;
  };

  /**
   * An array of features for the property, such as rooms, bathrooms, and parking slots.
   */
  features: Array<PropertyFeature>;
}

/** PropertyCardInformation
 *
 * A functional component that displays detailed information about a property.
 * It includes the title, location, formatted price, and a list of features with icons.
 *
 * @param {PropertyCardInformationProps} props - Props containing the property details.
 * @returns {JSX.Element} A JSX element displaying the property information.
 *
 * @example
 * ```tsx
 * <PropertyCardInformation
 *   title="Modern Apartment"
 *   location="New York, USA"
 *   price={{ value: 250000, currency: "USD" }}
 *   features={[
 *     { type: "Rooms", value: 3 },
 *     { type: "Bathrooms", value: 2 },
 *   ]}
 * />
 * ```
 */
export const PropertyCardInformation: FC<PropertyCardInformationProps> = ({
  title,
  location,
  price,
  features,
}) => {
  return (
    <>
      <Text variant={"default"} className="text-base text-zinc-950 font-medium">
        {title}
      </Text>
      <Text className="text-sm text-neutral-400 font-medium">{location}</Text>
      <Text className="text-zinc-950 text-base font-medium">
        {formatPrice(price)}
      </Text>
      <div className="flex flex-wrap gap-4 mt-2">
        {getFeatureIcons(features)}
      </div>
    </>
  );
};

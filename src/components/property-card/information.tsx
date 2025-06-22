import { FC } from "react";
import { Text } from "@/components/ui/text";
import { formatPrice } from "@/app/utils/price-formatter";
import { PropertyCardLandDetail } from "@/components/property-card/land-detail";
import { BathIcon, BedIcon, CarIcon, RulerIcon } from "lucide-react";

export interface PropertyCardInformationProps {
  /** The title of the property (e.g., "Modern Apartment").
   */
  title: string;
  /** The location of the property (e.g., "New York, USA").
   */
  location: string;
  /** The price of the property, including its value and currency.
   */
  price: {
    value: number;
    currency: string;
  };
  details: {
    rooms: number;
    bathrooms: number;
    parking_slots: number;
    building_size: number | null;
  };
}

/** A functional component that displays detailed information about a property.
 * It includes the title, location, formatted price, and a list of features
 * with icons.
 */
export const PropertyCardInformation: FC<PropertyCardInformationProps> = ({
  title,
  location,
  price,
  details: { rooms, bathrooms, parking_slots, building_size },
}) => {
  return (
    <div className="flex flex-col pt-2 pl-1">
      <Text variant={"default"} className="text-base font-medium text-zinc-950">
        {title}
      </Text>
      <Text className="text-sm font-medium text-neutral-400">{location}</Text>
      <Text className="text-base font-medium text-zinc-950">
        {formatPrice(price)}
      </Text>
      <div className="mt-1 flex flex-wrap gap-4">
        <PropertyCardLandDetail Icon={BedIcon} value={rooms} />
        <PropertyCardLandDetail Icon={BathIcon} value={bathrooms} />
        <PropertyCardLandDetail Icon={CarIcon} value={parking_slots} />
        {building_size && (
          <PropertyCardLandDetail Icon={RulerIcon} value={building_size} />
        )}
        {/* <PropertyCardLandDetail Icon={ShowerHeadIcon} value={} /> */}
      </div>
    </div>
  );
};

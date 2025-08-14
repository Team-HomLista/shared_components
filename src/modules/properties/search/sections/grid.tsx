"use client";
import { PropertyCardItem } from "@/components/property-card";
import { Property } from "@/types/property";

export interface PropertiesSearchGridSectionProps {
  properties: Array<Property>;
}

export const PropertiesSearchGridSection: React.FC<PropertiesSearchGridSectionProps> = ({
  properties
}) => {
  return (
    <div className="flex flex-col px-4 pt-8 sm:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <PropertyCardItem
            key={property.short_id}
            image={property.cover_image}
            banner={{ transaction: property.transaction_type }}
            information={{
              title: property.title,
              location: `${property.city}, ${property.state}`,
              price: {
                value: property.price,
                currency: property.price_currency
              },
              details: {
                rooms: property.rooms,
                bathrooms: property.bathrooms,
                parking_slots: property.parking_slots,
                building_size: property.building_size
              }
            }}
            slug={property.slug}
            onClickLike={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

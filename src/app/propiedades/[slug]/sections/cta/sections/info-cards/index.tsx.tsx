import { FC } from "react";
import { DetailedProperty } from "@/types/property";
import { PropertyBuildingDetails } from "./feature";
import { PropertyDescription } from "./description";
import { AmenityDetails } from "./amenity";

export interface InfoCardProps {
  property: DetailedProperty;
}
export const InfoCard: FC<InfoCardProps> = ({ property }) => {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <div className="flex flex-col gap-2 rounded-sm bg-[#F8F9FA] p-4">
        <PropertyBuildingDetails property={property} />
      </div>
      <div className="flex flex-col gap-2 rounded-sm bg-[#F8F9FA] p-4">
        <PropertyDescription property={property} />
      </div>
      <div className="flex flex-col gap-2 rounded-sm bg-[#F8F9FA] p-4">
        <AmenityDetails property={property} />
      </div>
    </div>
  );
};

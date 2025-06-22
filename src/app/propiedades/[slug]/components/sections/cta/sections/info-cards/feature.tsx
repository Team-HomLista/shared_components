"use client";

import { DetailedProperty } from "@/types/property";
import { FC } from "react";
import {
  HouseDetails,
  ApartmentDetails,
  LandDetails,
  CommercialDetails,
  FeatureDetailProps,
} from "./property-type";

// Main component that renders appropriate details based on building type
interface PropertyBuildingDetailsProps {
  property: DetailedProperty;
}

export const PropertyBuildingDetails: FC<PropertyBuildingDetailsProps> = ({
  property,
}) => {
  const detailProps: FeatureDetailProps = {
    buildingSize: property.building_size,
    landSize: property.land_size,
    rooms: property.rooms,
    bathrooms: property.bathrooms,
    floor: property.floor,
    yearBuilt: property.year_built,
    parkingSlots: property.parking_slots,
  };

  const renderDetails = () => {
    switch (property.building_type) {
      case "HOUSE":
        return <HouseDetails {...detailProps} />;
      case "APARTMENT":
        return <ApartmentDetails {...detailProps} />;
      case "LAND":
        return <LandDetails {...detailProps} />;
      case "COMMERCIAL":
        return <CommercialDetails {...detailProps} />;
      default:
        return null;
    }
  };

  const details = renderDetails();
  if (!details) return null;

  return (
    <>
      <div className="flex items-center gap-2">
         <h3 className="text-lg font-semibold mb-3">Características</h3>
      </div>
      <div className="flex flex-col gap-2">{details}</div>
    </>
  );
};
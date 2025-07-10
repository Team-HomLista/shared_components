import { FC } from "react";
import {
  BedDoubleIcon,
  ToiletIcon,
  RulerDimensionLineIcon,
  BuildingIcon,
  CalendarIcon,
} from "lucide-react";
import { FeatureDetailProps, createFeature, FeatureItem } from "./types";
import { FeatureGrid } from "./feature-grid";

export const ApartmentDetails: FC<FeatureDetailProps> = ({
  buildingSize,
  rooms,
  bathrooms,
  floor,
  yearBuilt,
}) => {
  const features = [
    createFeature(
      <RulerDimensionLineIcon className="text-secondary h-6 w-6" />,
      "Área del terreno:",
      buildingSize,
      true,
    ),
    createFeature(
      <BedDoubleIcon className="text-secondary h-6 w-6" />,
      "Habitaciones:",
      rooms,
    ),
    createFeature(
      <ToiletIcon className="text-secondary h-6 w-6" />,
      "Baños:",
      bathrooms,
    ),
    createFeature(
      <BuildingIcon className="text-secondary h-6 w-6" />,
      "Piso:",
      floor,
    ),
    yearBuilt ? {
      icon: <CalendarIcon className="text-secondary h-6 w-6" />,
      text: "Año",
      value: yearBuilt.toString()
    } : null,
  ].filter(Boolean) as FeatureItem[];

  return <FeatureGrid features={features} />;
};

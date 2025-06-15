import { FC } from "react";
import {
  BedDoubleIcon,
  ToiletIcon,
  RulerDimensionLineIcon,
  BuildingIcon,
} from "lucide-react";
import { FeatureDetailProps, createFeature, FeatureItem } from "./types";
import { FeatureGrid } from "./feature-grid";

export const ApartmentDetails: FC<FeatureDetailProps> = ({
  buildingSize,
  rooms,
  bathrooms,
  floor,
}) => {
  const features = [
    createFeature(
      <RulerDimensionLineIcon className="text-primary h-4 w-4" />,
      "Área del terreno",
      buildingSize,
    ),
    createFeature(
      <BedDoubleIcon className="text-primary h-4 w-4" />,
      "Habitaciones",
      rooms,
    ),
    createFeature(
      <ToiletIcon className="text-primary h-4 w-4" />,
      "Baños",
      bathrooms,
    ),
    createFeature(
      <BuildingIcon className="text-primary h-4 w-4" />,
      "Piso",
      floor,
    ),
  ].filter(Boolean) as FeatureItem[];

  return <FeatureGrid features={features} />;
};

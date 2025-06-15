import { FC } from "react";
import { CarIcon, RulerDimensionLineIcon, BuildingIcon } from "lucide-react";
import { FeatureDetailProps, createFeature, FeatureItem } from "./types";
import { FeatureGrid } from "./feature-grid";

export const CommercialDetails: FC<FeatureDetailProps> = ({
  buildingSize,
  floor,
  parkingSlots,
}) => {
  const features = [
    createFeature(
      <RulerDimensionLineIcon className="text-primary h-4 w-4" />,
      "Área del terreno",
      buildingSize,
    ),
    createFeature(
      <BuildingIcon className="text-primary h-4 w-4" />,
      "Piso",
      floor,
    ),
    createFeature(
      <CarIcon className="text-primary h-4 w-4" />,
      "Estacionamiento",
      parkingSlots,
    ),
  ].filter(Boolean) as FeatureItem[];

  return <FeatureGrid features={features} />;
};

import { CarIcon, RulerDimensionLineIcon, BuildingIcon, CalendarIcon } from "lucide-react";
import { FC } from "react";

import { FeatureGrid } from "./feature-grid";
import { FeatureDetailProps, createFeature, FeatureItem } from "./types";

export const CommercialDetails: FC<FeatureDetailProps> = ({
  buildingSize,
  floor,
  parkingSlots,
  yearBuilt
}) => {
  const features = [
    createFeature(
      <RulerDimensionLineIcon className="h-6 w-6" />,
      "Área del terreno",
      buildingSize,
      true
    ),
    createFeature(<BuildingIcon className="h-6 w-6" />, "Piso", floor),
    createFeature(<CarIcon className="h-6 w-6" />, "Estacionamiento", parkingSlots),
    yearBuilt
      ? {
          icon: <CalendarIcon className="h-6 w-6" />,
          text: "Año",
          value: yearBuilt.toString()
        }
      : null
  ].filter(Boolean) as FeatureItem[];

  return <FeatureGrid features={features} />;
};

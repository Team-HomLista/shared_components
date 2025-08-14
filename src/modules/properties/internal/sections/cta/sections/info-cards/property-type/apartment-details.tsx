import {
  BedDoubleIcon,
  ToiletIcon,
  RulerDimensionLineIcon,
  BuildingIcon,
  CalendarIcon
} from "lucide-react";
import { FC } from "react";

import { FeatureGrid } from "./feature-grid";
import { FeatureDetailProps, createFeature, FeatureItem } from "./types";

export const ApartmentDetails: FC<FeatureDetailProps> = ({
  buildingSize,
  rooms,
  bathrooms,
  floor,
  yearBuilt
}) => {
  const features = [
    createFeature(
      <RulerDimensionLineIcon className="h-6 w-6" />,
      "Área del terreno:",
      buildingSize,
      true
    ),
    createFeature(<BedDoubleIcon className="h-6 w-6" />, "Habitaciones:", rooms),
    createFeature(<ToiletIcon className="h-6 w-6" />, "Baños:", bathrooms),
    createFeature(<BuildingIcon className="h-6 w-6" />, "Piso:", floor),
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

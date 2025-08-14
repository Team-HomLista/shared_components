import { RulerDimensionLineIcon } from "lucide-react";
import { FC } from "react";

import { FeatureGrid } from "./feature-grid";
import { FeatureDetailProps, createFeature, FeatureItem } from "./types";

export const LandDetails: FC<FeatureDetailProps> = ({ buildingSize }) => {
  const features = [
    createFeature(
      <RulerDimensionLineIcon className="h-6 w-6" />,
      "Área del terreno:",
      buildingSize,
      true
    )
  ].filter(Boolean) as FeatureItem[];

  return <FeatureGrid features={features} />;
};

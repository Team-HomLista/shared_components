import { FC } from "react";
import { RulerDimensionLineIcon } from "lucide-react";
import { FeatureDetailProps, createFeature, FeatureItem } from "./types";
import { FeatureGrid } from "./feature-grid";

export const LandDetails: FC<FeatureDetailProps> = ({ buildingSize }) => {
  const features = [
    createFeature(
      <RulerDimensionLineIcon className="text-primary h-4 w-4" />,
      "Área del terreno",
      buildingSize,
    ),
  ].filter(Boolean) as FeatureItem[];

  return <FeatureGrid features={features} />;
};

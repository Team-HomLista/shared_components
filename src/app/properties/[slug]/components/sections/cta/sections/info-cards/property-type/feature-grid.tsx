import { FC } from "react";
import { FeatureItem } from "./types";

// Shared grid component for features
export const FeatureGrid: FC<{ features: FeatureItem[] }> = ({ features }) => {
  if (features.length === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          {feature.icon}
          <span className="text-primary text-sm">
            {feature.text}: {feature.value}
          </span>
        </div>
      ))}
    </div>
  );
};

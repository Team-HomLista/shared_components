import { FC } from "react";
import { FeatureItem } from "./types";

export const FeatureGrid: FC<{ features: FeatureItem[] }> = ({ features }) => {
  if (features.length === 0) return null;

  return (
    <div className="grid grid-cols-3 pt-1 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          {feature.icon}
          <span className="text-primary text-sm">
            {feature.text}: {feature.value}
          </span>
        </div>
      ))}
    </div>
  );
};

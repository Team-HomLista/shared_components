import { FC } from "react";
import { FeatureItem } from "./types";

export const FeatureGrid: FC<{ features: FeatureItem[] }> = ({ features }) => {
  if (features.length === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
          {feature.icon}
          <div className="text-center">
            <span className="text-sm font-medium text-gray-700 block">
              {feature.text}
            </span>
            <span className="text-sm text-primary font-semibold">
              {feature.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

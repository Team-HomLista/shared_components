import { FC } from "react";
import { FeatureItem } from "./types";

export const FeatureGrid: FC<{ features: FeatureItem[] }> = ({ features }) => {
  if (features.length === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col sm:flex-row sm:items-center items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex-shrink-0">
            {feature.icon}
          </div>
          <div className="text-center sm:text-left sm:ml-2">
            <span className="text-sm font-light block sm:inline" style={{ color: '#09090B' }}>
              {feature.text}
            </span>
            <span className="text-sm font-semibold block sm:inline sm:ml-1" style={{ color: '#09090B' }}>
              {feature.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

import { FC } from "react";

import { FeatureItem } from "./types";

export const FeatureGrid: FC<{ features: FeatureItem[] }> = ({ features }) => {
  if (features.length === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 rounded-lg p-3 transition-colors hover:bg-gray-50 sm:flex-row sm:items-center"
        >
          <div className="flex-shrink-0">{feature.icon}</div>
          <div className="text-center sm:ml-2 sm:text-left">
            <span className="block text-sm font-light sm:inline" style={{ color: "#09090B" }}>
              {feature.text}
            </span>
            <span
              className="block text-sm font-semibold sm:ml-1 sm:inline"
              style={{ color: "#09090B" }}
            >
              {feature.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

import { ReactElement } from "react";

// Shared types for all property type components
export interface FeatureItem {
  icon: ReactElement;
  text: string;
  value: string | number;
}

export interface FeatureDetailProps {
  buildingSize?: number | null;
  landSize?: number | null;
  rooms?: number | null;
  bathrooms?: number | null;
  floor?: number | null;
  yearBuilt?: number | null;
  parkingSlots?: number | null;
}

// Shared utility to create feature items
export const createFeature = (
  icon: ReactElement,
  text: string,
  value: string | number | null | undefined,
): FeatureItem | null => {
  if (value === null || value === undefined) return null;
  return { icon, text, value };
};

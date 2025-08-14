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

// Utility function to format area values
export const formatArea = (area: number | null | undefined, unit = "m²"): string | null => {
  if (area === null || area === undefined) return null;
  return `${area.toLocaleString()} ${unit}`;
};

// Utility function to format year values
export const formatYear = (year: number | null | undefined): string | null => {
  if (year === null || year === undefined) return null;
  return year.toString();
};

// Shared utility to create feature items
export const createFeature = (
  icon: ReactElement,
  text: string,
  value: string | number | null | undefined,
  isArea = false
): FeatureItem | null => {
  // Return null for null/undefined values
  if (value === null || value === undefined) {
    return null;
  }

  // Format area values with m² unit
  if (isArea && typeof value === "number") {
    const formattedValue = formatArea(value);
    if (!formattedValue) return null;
    return { icon, text, value: formattedValue };
  }

  // Format year values - check for year-related text
  if (
    (text.toLowerCase().includes("año") || text.toLowerCase().includes("year")) &&
    typeof value === "number"
  ) {
    const formattedValue = formatYear(value);
    if (!formattedValue) return null;
    return { icon, text, value: formattedValue };
  }

  return { icon, text, value };
};

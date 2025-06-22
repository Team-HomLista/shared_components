import { ReactElement } from "react";

// Feature item type for consistency
export interface FeatureItem {
  icon: ReactElement;
  text: string;
  value: string | number;
}

// Text labels for internationalization support
export const FeatureLabels = {
  es: {
    buildingSize: "Área del terreno",
    landSize: "Construcción",
    rooms: "Habitaciones",
    bathrooms: "Baños",
    floor: "Piso",
    yearBuilt: "Año",
    parkingSlots: "Estacionamiento",
    title: "Características",
  },
  en: {
    buildingSize: "Building Area",
    landSize: "Construction",
    rooms: "Bedrooms",
    bathrooms: "Bathrooms",
    floor: "Floor",
    yearBuilt: "Year Built",
    parkingSlots: "Parking",
    title: "Features",
  },
} as const;

// Utility function to create feature items with validation
export const createFeatureItem = (
  icon: ReactElement,
  text: string,
  value: string | number | null | undefined,
): FeatureItem | null => {
  if (value === null || value === undefined || value === "" || value === 0) {
    return null;
  }
  return { icon, text, value };
};

// Utility function to format area values
export const formatArea = (
  area: number | null | undefined,
  unit = "m²",
): string | null => {
  if (area === null || area === undefined) return null;
  return `${area.toLocaleString()} ${unit}`;
};

// Utility function to format year values
export const formatYear = (year: number | null | undefined): string | null => {
  if (year === null || year === undefined) return null;
  return year.toString();
};

// Utility function to get localized labels
export const getFeatureLabels = (locale: keyof typeof FeatureLabels = "es") => {
  return FeatureLabels[locale];
};

// Validation functions for property data
export const PropertyValidators = {
  isValidArea: (value: number | null | undefined): boolean => {
    return typeof value === "number" && value > 0;
  },

  isValidCount: (value: number | null | undefined): boolean => {
    return typeof value === "number" && value >= 0;
  },

  isValidYear: (value: number | null | undefined): boolean => {
    if (typeof value !== "number") return false;
    const currentYear = new Date().getFullYear();
    return value >= 1800 && value <= currentYear + 10;
  },

  isValidFloor: (value: number | null | undefined): boolean => {
    return typeof value === "number" && value >= -10 && value <= 200;
  },
} as const;

// Configuration object for easy maintenance
export const PropertyFeatureConfig = {
  HOUSE: {
    features: [
      "buildingSize",
      "parkingSlots",
      "bathrooms",
      "landSize",
      "yearBuilt",
      "rooms",
    ] as const,
    priority: [
      "buildingSize",
      "parkingSlots",
      "bathrooms",
      "landSize",
      "yearBuilt",
      "rooms",
    ] as const,
  },
  DEPARTMENT: {
    features: ["buildingSize", "rooms", "bathrooms", "floor"] as const,
    priority: ["rooms", "bathrooms", "buildingSize", "floor"] as const,
  },
  LAND: {
    features: ["buildingSize"] as const,
    priority: ["buildingSize"] as const,
  },
  COMMERCIAL: {
    features: ["buildingSize", "floor", "parkingSlots"] as const,
    priority: ["buildingSize", "floor", "parkingSlots"] as const,
  },
} as const;


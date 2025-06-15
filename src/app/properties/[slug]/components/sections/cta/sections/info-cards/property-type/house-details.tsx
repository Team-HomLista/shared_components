import { FC } from "react";
import {
  BedDoubleIcon,
  CalendarIcon,
  CarIcon,
  ChartAreaIcon,
  ToiletIcon,
  RulerDimensionLineIcon,
} from "lucide-react";
import { FeatureDetailProps, createFeature, FeatureItem } from "./types";
import { FeatureGrid } from "./feature-grid";

export const HouseDetails: FC<FeatureDetailProps> = ({
  buildingSize,
  rooms,
  bathrooms,
  landSize,
  yearBuilt,
  parkingSlots,
}) => {
  const features = [
    createFeature(
      <RulerDimensionLineIcon className="text-secondary h-6 w-6" />,
      "Área del terreno",
      buildingSize,
    ),
    createFeature(
      <CarIcon className="text-secondary h-6 w-6" />,
      "Estacionamiento",
      parkingSlots,
    ),
    createFeature(
      <ToiletIcon className="text-secondary h-6 w-6" />,
      "Baños",
      bathrooms,
    ),
    createFeature(
      <ChartAreaIcon className="text-secondary h-6 w-6" />,
      "Construcción",
      landSize,
    ),
    createFeature(
      <CalendarIcon className="text-secondary h-6 w-6" />,
      "Año",
      yearBuilt,
    ),
    createFeature(
      <BedDoubleIcon className="text-secondary h-6 w-6" />,
      "Habitaciones",
      rooms,
    ),
  ].filter(Boolean) as FeatureItem[];

  return <FeatureGrid features={features} />;
};

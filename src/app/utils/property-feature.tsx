import { Feature, PropertyFeature } from "@/types/feature";
import {
  BedIcon,
  BathIcon,
  CarIcon,
  RulerIcon,
  ShowerHeadIcon,
  LucideProps,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const featureIconMap: Partial<
  Record<
    Feature,
    ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >
  >
> = {
  [Feature.Rooms]: BedIcon,
  [Feature.Bathrooms]: BathIcon,
  [Feature.ParkingSlots]: CarIcon,
  [Feature.LandingSize]: RulerIcon,
  [Feature.ShowerHead]: ShowerHeadIcon,
};

/** getFeatureIcons
 *
 * Generates a list of JSX elements representing property features with
 * corresponding icons. This utility is used to visually display property
 * features such as rooms, bathrooms, parking slots, etc.
 */
export const getFeatureIcons = (features: Array<PropertyFeature>) => {
  return features.map((feature) => {
    const Icon = featureIconMap[Feature[feature.type]];

    return (
      <div
        key={feature.type}
        className="flex items-center justify-center gap-2"
      >
        {Icon && <Icon />}
        <span className="text-sm font-medium text-black">{feature.value}</span>
      </div>
    );
  });
};

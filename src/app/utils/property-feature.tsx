import { Feature, PropertyFeature } from "@/types/feature";
import {
  BedIcon,
  BathIcon,
  CarIcon,
  RulerIcon,
  ShowerHeadIcon,
} from "lucide-react";

const featureIconMap: Record<Feature, React.FC> = {
  [Feature.Rooms]: BedIcon,
  [Feature.Bathrooms]: BathIcon,
  [Feature.ParkingSlots]: CarIcon,
  [Feature.LandingSize]: RulerIcon,
  [Feature.ShowerHead]: ShowerHeadIcon,
};

/** getFeatureIcons
 *
 * Generates a list of JSX elements representing property features with corresponding icons.
 * This utility is used to visually display property features such as rooms, bathrooms, parking slots, etc.
 *
 * @param {Array<PropertyFeature>} features - An array of property features, each containing a type and value.
 * @returns {JSX.Element[]} An array of JSX elements, each displaying an icon and the corresponding feature value.
 *
 * @example
 * ```tsx
 * const features = [
 *   { type: "Rooms", value: 3 },
 *   { type: "Bathrooms", value: 2 },
 * ];
 * const featureIcons = getFeatureIcons(features);
 * ```
 */
export const getFeatureIcons = (features: Array<PropertyFeature>) => {
  return features.map((feature) => {
    const Icon = featureIconMap[Feature[feature.type]];
    return (
      <div
        key={feature.type}
        className="flex items-center justify-center gap-2"
      >
        <Icon />
        <span className="text-sm text-black font-medium">{feature.value}</span>
      </div>
    );
  });
};

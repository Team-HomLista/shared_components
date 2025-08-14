import { LucideProps } from "lucide-react";
import { FC, ForwardRefExoticComponent, RefAttributes } from "react";

export interface PropertyFeatureDetailProps {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  value: string | number;
}

/** Generates a list of JSX elements representing property features with
 * corresponding icons. This utility is used to visually display property
 * features such as rooms, bathrooms, parking slots, etc.
 */
export const PropertyCardLandDetail: FC<PropertyFeatureDetailProps> = ({ Icon, value }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-neutral-500">
      {Icon && <Icon />}
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
};

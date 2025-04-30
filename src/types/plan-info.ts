import { LucideIcon } from "lucide-react";

interface ComparisonFeature {
  Icon?: LucideIcon;
  Information?: LucideIcon;
  infoDescription?: string;
  agency: string | boolean;
  agencyVIP: string | boolean;
  agent: string | boolean;
  free: string | boolean;
  name: string;
}

type FeatureList = Array<ComparisonFeature>;

export interface ComparisonSection {
  title: string;
  items: FeatureList;
}

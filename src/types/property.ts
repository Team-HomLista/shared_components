import { PropertyFeature } from "./feature";
import { PropertyTagTypeEnum } from "@/components/property-card/feature";
import { TransactionTypeEnum } from "@/components/property-card/banner";

export interface Property {
  features: Array<PropertyFeature>;
  image: string;
  location: string;
  price: {
    value: number;
    currency: string;
  };
  tag: keyof typeof PropertyTagTypeEnum;
  title: string;
  transaction: keyof typeof TransactionTypeEnum;
}

import { cn } from "@/lib/utils";
import { FC } from "react";

export enum PropertyTagTypeEnum {
  Featured = "Featured",
  Offer = "Offer",
}

export interface FeaturePropertyProps {
  tag?: keyof typeof PropertyTagTypeEnum;
}

const FeatureProperty: FC<FeaturePropertyProps> = ({ tag }) => {
  const isFeature = tag === PropertyTagTypeEnum.Featured;

  if (!tag) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex h-full border-1 rounded-[30px] justify-center bg-white border-white py-0.5 px-2 text-sm w-fit",
        isFeature ? "bg-accent border-2 border-primary" : "bg-white border-1"
      )}
    >
      {tag == PropertyTagTypeEnum.Featured && "destacado"}
      {tag == PropertyTagTypeEnum.Offer && "oferta especial"}
    </div>
  );
};

export default FeatureProperty;

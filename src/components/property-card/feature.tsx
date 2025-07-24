import { cn } from "@/lib/utils";
import { FC } from "react";

export enum PropertyCardTagType {
  Featured = "Featured",
  Offer = "Offer",
}

export interface PropertyCardTagProps {
  tag?: keyof typeof PropertyCardTagType;
}

export const PropertyCardTag: FC<PropertyCardTagProps> = ({ tag }) => {
  const isFeature = tag === PropertyCardTagType.Featured;

  if (!tag) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex h-full w-fit justify-center rounded-[30px] border-1 border-white bg-white px-2 py-0.5 text-sm",
        isFeature
          ? "bg-accent text-accent-foreground border-primary border-2"
          : "border-1 bg-white",
      )}
    >
      {tag == PropertyCardTagType.Featured && "destacado"}
      {tag == PropertyCardTagType.Offer && "oferta especial"}
    </div>
  );
};

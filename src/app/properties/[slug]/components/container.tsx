"use client";
import { Navbar } from "@/components/navbar";
import { FC } from "react";
import { ImageGallery } from "./gallery";
import { PropertyDetailHeader } from "./detail-header";
import { CtaInfoCard } from "./cta/container";
import { DetailedProperty } from "@/types/property";

export interface PropertyDetailContainerProps {
  property: DetailedProperty;
}

export const PropertyDetailContainer: FC<PropertyDetailContainerProps> = ({
  property,
}) => {
  return (
    <>
      <Navbar variant="default" />
      {/* Breadcrumbs */}
      <PropertyDetailHeader
        title={property.title}
        price={property.price}
        price_currency={property.price_currency}
        state={property.state}
      />
      <ImageGallery multimedia={property.multimedia} />
      <CtaInfoCard
        description={property.description}
        features={[]}
        amenities={[]}
        agency={property.agency}
        agent={property.agent}
      />
    </>
  );
};

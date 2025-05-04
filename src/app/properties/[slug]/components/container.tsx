"use client";
import { Navbar } from "@/components/navbar";
import { FC } from "react";
import { ImageGallery } from "./gallery";
import { PropertyDetailHeader } from "./detail-header";
import { CtaInfoCard } from "./cta/container";

export interface PropertyDetailContainerProps {
  property: any;
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
        features={property.features}
        amenities={property.amenities}
        full_name={property.agent.full_name}
        agent_avatar={property.agent.avatar}
        agent_agency={property.agency}
      />
    </>
  );
};

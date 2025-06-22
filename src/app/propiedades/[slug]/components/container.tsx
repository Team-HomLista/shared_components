"use client";
import { Navbar } from "@/components/navbar";
import { FC } from "react";
import { ImageGallery } from "./sections/gallery";
import { CtaInfoCard } from "./sections/cta/container";
import { DetailedProperty } from "@/types/property";
import { BreadcrumbPagination } from "@/components/breadcrumb-index";
import { PropertyMainInfo } from "./sections/main-info";
import { transformPropertyPrice, formatPropertyLocation } from "@/app/utils/property-transformers";

export interface PropertyDetailContainerProps {
  property: DetailedProperty;
}

export const PropertyDetailContainer: FC<PropertyDetailContainerProps> = ({
  property,
}) => {
  const propertyPrice = transformPropertyPrice(property);
  const propertyLocation = formatPropertyLocation(property);
  
  return (
    <>
      <Navbar variant="default" />
      <BreadcrumbPagination propertyTitle={property.title} />
      <ImageGallery multimedia={property.multimedia} />
      <PropertyMainInfo
        title={property.title}
        price={propertyPrice}
        location={propertyLocation}
      />
      <CtaInfoCard
        property={property}
        agency={property.agency || undefined}
        agent={property.agent || undefined}
      />
    </>
  );
};

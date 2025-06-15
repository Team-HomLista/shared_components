"use client";
import { Navbar } from "@/components/navbar";
import { FC } from "react";
import { ImageGallery } from "./sections/gallery";
import { CtaInfoCard } from "./sections/cta/container";
import {
  DetailedProperty,
  PropertyPrice,
  PropertyPriceType,
} from "@/types/property";
import { BreadcrumbPagination } from "@/components/breadcrumb-index";
import { PropertyMainInfo } from "./sections/main-info";

export interface PropertyDetailContainerProps {
  property: DetailedProperty;
}

function mapPropertyPrice(property: DetailedProperty): PropertyPrice {
  return {
    type: PropertyPriceType.Normal,
    after: null,
    current: property.price,
    currency: property.price_currency,
  };
}

export const PropertyDetailContainer: FC<PropertyDetailContainerProps> = ({
  property,
}) => {
  return (
    <>
      <Navbar variant="default" />
      <BreadcrumbPagination propertyTitle={property.title} />
      <ImageGallery multimedia={property.multimedia} />
      <PropertyMainInfo
        title={property.title}
        price={mapPropertyPrice(property)}
        state={property.state}
        city={property.city}
        neighborhood={property.neighborhood}
      />
      <CtaInfoCard
        property={property}
        agency={property.agency || undefined}
        agent={property.agent || undefined}
      />
    </>
  );
};

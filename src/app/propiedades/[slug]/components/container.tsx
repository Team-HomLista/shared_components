"use client";
import { Navbar } from "@/components/navbar";
import { FC } from "react";
import { ImageGallery } from "./sections/gallery";
import { CtaInfoCard } from "./sections/cta/container";
import { DetailedProperty, Property } from "@/types/property";
import { BreadcrumbPagination } from "@/components/breadcrumb-index";
import { PropertyMainInfo } from "./sections/main-info";
import { transformPropertyPrice, formatPropertyLocation } from "@/app/utils/property-transformers";
import { PropertyCarousel } from "@/components/property-carousel";

export interface PropertyDetailContainerProps {
  property: DetailedProperty;
  propertyCarrusel?: Property[];
}

export const PropertyDetailContainer: FC<PropertyDetailContainerProps> = ({
  property,
  propertyCarrusel: recommendedProperties = [],
}) => {
  const propertyPrice = transformPropertyPrice(property);
  const propertyLocation = formatPropertyLocation(property);
  
  const carouselItems = recommendedProperties.map((prop) => ({
    slug: prop.slug,
    image: prop.cover_image,
    tag: (prop.is_featured ? "Featured" : undefined) as "Featured" | "Offer" | undefined,
    banner: {
      transaction: prop.transaction_type,
    },
    information: {
      title: prop.title,
      location: formatPropertyLocation(prop),
      price: {
        value: prop.price,
        currency: prop.price_currency,
      },
      details: {
        rooms: prop.rooms,
        bathrooms: prop.bathrooms,
        parking_slots: prop.parking_slots,
        building_size: prop.building_size,
      },
    },
  }));

  return (
    <>
      <Navbar variant="default" />
      <div className="px-64">
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
        <PropertyCarousel 
          items={carouselItems} 
          onClickLike={(index, isLiked) => {
            // TODO: Implement like functionality for recommended properties
            console.log(`Property ${index} liked: ${isLiked}`);
          }}
        />
      </div>
    </>
  );
};

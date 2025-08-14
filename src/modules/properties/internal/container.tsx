"use client";
import { Button } from "@shared/components/ui/button";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";

import { BreadcrumbPagination } from "@/components/breadcrumb-index";
import { Navbar } from "@/components/navbar";
import { PropertyCarousel } from "@/components/property-carousel";
import { DetailedProperty, Property, PropertyLocationDetail } from "@/types/property";
import { PropertyQueryParams } from "@/types/property-query-params";
import { buildSearchQueryParams } from "@/utils/build-search-query-params";
import { NearbyLocation } from "@/utils/location-utils";
import { transformPropertyPrice, formatPropertyLocation } from "@/utils/property-transformers";

import { CtaInfoCard } from "./sections/cta/container";
import { ImageGallery } from "./sections/gallery";
import { LocationNearby } from "./sections/location";
import { PropertyMainInfo } from "./sections/main-info";

export interface PropertyDetailContainerProps {
  property: DetailedProperty;
  propertyCarrusel?: Property[];
  transportation?: Array<PropertyLocationDetail>;
}
export const PropertyDetailContainer: FC<PropertyDetailContainerProps> = ({
  property,
  propertyCarrusel: recommendedProperties = []
}) => {
  const propertyPrice = transformPropertyPrice(property);
  const propertyLocation = formatPropertyLocation(property);
  const [showGallery, setShowGallery] = useState(false);

  const transformNearbyData = (nearbyData: any[]): NearbyLocation[] => {
    return nearbyData.map((item) => ({
      id: item.id,
      name: item.name,
      travel_time: item.travel_time,
      time_unit: item.time_unit,
      travel_mode: item.travel_mode
    }));
  };

  const nearbyLocations = transformNearbyData(property?.property_nearbys || []);
  const getSimilarPropertiesUrl = () => {
    const searchParams: PropertyQueryParams = {
      city: property?.city,
      state: property?.state,
      neighborhood: property?.neighborhood,
      property_type: property?.building_type,
      search_type: property?.transaction_type
    };

    const queryString = buildSearchQueryParams(searchParams);
    return `/propiedades?${queryString}`;
  };

  const carouselItems =
    recommendedProperties?.map((prop) => ({
      slug: prop.slug,
      image: prop.cover_image,
      tag: (prop.is_featured ? "Featured" : undefined) as "Featured" | "Offer" | undefined,
      banner: {
        transaction: prop.transaction_type
      },
      information: {
        title: prop.title,
        location: formatPropertyLocation(prop),
        price: {
          value: prop.price,
          currency: prop.price_currency
        },
        details: {
          rooms: prop.rooms,
          bathrooms: prop.bathrooms,
          parking_slots: prop.parking_slots,
          building_size: prop.building_size
        }
      }
    })) ?? [];
  return (
    <>
      <Navbar variant="default" />
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="hidden min-w-0 flex-row items-end justify-between gap-4 sm:mb-8 sm:flex sm:gap-6 lg:gap-8">
          <div className="min-w-0 flex-1">
            <BreadcrumbPagination propertyTitle={property?.title} />
          </div>
          <div className="flex-shrink-0">
            <Link href={getSimilarPropertiesUrl()}>
              <Button>
                <SearchIcon className="h-4 w-4" />
                <p>Ver Propiedades Similares</p>
              </Button>
            </Link>
          </div>
        </div>
        <div className="block sm:hidden">
          <div className="mb-4">
            <BreadcrumbPagination propertyTitle={property?.title} />
          </div>
          <div className="mb-6">
            <Link href={getSimilarPropertiesUrl()}>
              <Button className="w-full">
                <SearchIcon className="h-4 w-4" />
                <p>Ver Propiedades Similares</p>
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <ImageGallery multimedia={property?.multimedia ?? []} />
          <PropertyMainInfo
            uuid={property?.uuid}
            title={property?.title}
            price={propertyPrice}
            location={propertyLocation}
            tags={property?.tags}
          />
          <CtaInfoCard
            property={property}
            agency={property?.agency || undefined}
            agent={property?.agent || undefined}
          />
        </div>
        <div className="block lg:hidden">
          <div className="relative mb-4 sm:mb-6">
            {property?.multimedia?.[0] && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src={property?.multimedia[0]}
                  alt={property?.title}
                  className="h-full w-full object-cover"
                />
                <button
                  onClick={() => setShowGallery(true)}
                  className="absolute top-3 right-3 rounded-md bg-white/90 px-3 py-2 text-sm font-medium text-gray-900 shadow-sm backdrop-blur-sm transition-all hover:bg-white"
                >
                  Ver imágenes
                </button>
              </div>
            )}
          </div>
          <PropertyMainInfo
            uuid={property?.uuid}
            title={property?.title}
            price={propertyPrice}
            location={propertyLocation}
            tags={property?.tags}
          />
        </div>
      </div>
      <div className="mb-6 block px-4 sm:mb-8 sm:px-6 md:px-8 lg:hidden">
        <CtaInfoCard
          property={property}
          agency={property?.agency || undefined}
          agent={property?.agent || undefined}
        />
      </div>
      {showGallery && (
        <div className="fixed inset-0 z-50 bg-black">
          <ImageGallery multimedia={property?.multimedia ?? []} />
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <LocationNearby
          nearby={nearbyLocations}
          locationInfo={{
            city: property?.city,
            state: property?.state,
            neighborhood: property?.neighborhood,
            postalCode: property?.postal_code,
            latitude: property?.latitude,
            longitude: property?.longitude
          }}
        />
        <div className="flex items-center pb-3 text-xl font-semibold text-zinc-900">
          Otras propiedades que podrían interesarte
        </div>
      </div>
      <div className="pb-8 md:pb-12 lg:pb-16">
        <PropertyCarousel items={carouselItems} onClickLike={() => {}} />
      </div>
    </>
  );
};

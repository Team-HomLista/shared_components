"use client";
import { Navbar } from "@/components/navbar";
import { Property } from "@/types/property";
import { FC } from "react";
import { PropertiesSearchGridSection } from "./sections/grid";
import { PropertiesSearchPaginationSection } from "./sections/pagination";
import { Paginated } from "@/types/paginated";
import { PropertyQueryParams } from "../../types/property-query-params";
import { useRouter } from "next/navigation";
import { LocationFilters } from "@/types/property-filter";
import { buildSearchQueryParams } from "@/utils/build-search-query-params";
import { cleanQueries } from "@/utils/clean-queries";
import { ControlsSection } from "./sections/controls";
import { ControlsSchema, controlsSchema } from "./Schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionType } from "@/types/enums/transaction-type";

export interface PropertiesSearchContainerProps {
  filters: LocationFilters;
  paginated: Paginated<Property>;
  queries: PropertyQueryParams;
}

export const PropertiesSearchContainer: FC<PropertiesSearchContainerProps> = ({
  queries,
  paginated,
  filters,
}) => {
  const router = useRouter();
  const { data: properties, last_page, current_page } = paginated;

  const form = useForm<ControlsSchema>({
    resolver: zodResolver(controlsSchema),
    defaultValues: {
      order_by: queries.order_by ?? "",
      state: queries.state ?? "",
      city: queries.city ?? "",
      neighborhood: queries.neighborhood ?? "",
      distance_km: queries.distance_km ?? "",
      constructionYear: queries.construction_year ?? "",
      rooms: queries.rooms ?? "",
      baths: queries.baths ?? "",
      land_size: queries.land_size ?? "",
      land_unit: queries.land_unit ?? "",
      house_size: queries.house_size ?? "",
      house_unit: queries.house_unit ?? "",
      property_type: queries.property_type ?? "",
      transaction_type: queries.search_type ?? "",
      keywords: queries.title ?? "",
      parking_unit: queries.parking_unit ?? "",
    },
  });

  const selectedState = form.watch("state");
  const selectedCity = form.watch("city");

  const stateOptions = Object.keys(filters).map((state) => ({
    value: state,
    label: state,
  }));
  const cityOptions =
    selectedState && filters[selectedState]
      ? Object.keys(filters[selectedState]).map((city) => ({
          value: city,
          label: city,
        }))
      : [];
  const neighborhoodOptions =
    selectedState && selectedCity && filters[selectedState]?.[selectedCity]
      ? filters[selectedState][selectedCity].map((neighborhood) => ({
          value: neighborhood,
          label: neighborhood,
        }))
      : [];

  const handlePageChange = (newPage: number) => {
    const cleanedQueries = cleanQueries({ ...queries, page: newPage });
    const params = buildSearchQueryParams(cleanedQueries);
    router.push(`/propiedades?${params}`);
  };

  const onClickPrev = () => {
    if (current_page > 1) {
      handlePageChange(current_page - 1);
    }
  };

  const onClickNext = () => {
    if (current_page < last_page) {
      handlePageChange(current_page + 1);
    }
  };

  const handleFormSubmit = (data: z.infer<typeof controlsSchema>) => {
    // Map form data to PropertyQueryParams format
    const mappedData: Partial<PropertyQueryParams> = {
      order_by: data.order_by,
      property_type: data.property_type as any,
      search_type: data.transaction_type as any,
      title: data.keywords,
      state: data.state,
      city: data.city,
      neighborhood: data.neighborhood,
      distance_km: data.distance_km,
      construction_year: data.constructionYear,
      rooms: data.rooms,
      baths: data.baths,
      land_size: data.land_size,
      land_unit: data.land_unit,
      house_size: data.house_size,
      house_unit: data.house_unit,
      parking_size: data.parking_size,
      parking_unit: data.parking_unit,
    };

    // Clean the data to remove empty values before building query params
    const cleanedData = cleanQueries(mappedData);
    const params = buildSearchQueryParams(cleanedData as PropertyQueryParams);
    router.push(`/propiedades?${params}`);
  };

  return (
    <>
      <Navbar variant="default" />
      <ControlsSection
        form={form}
        onFormSubmit={handleFormSubmit}
        stateOptions={stateOptions}
        cityOptions={cityOptions}
        neighborhoodOptions={neighborhoodOptions}
      />
      <PropertiesSearchGridSection properties={properties} />
      <PropertiesSearchPaginationSection
        currentPage={current_page}
        totalPages={last_page}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
    </>
  );
};

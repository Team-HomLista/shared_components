"use client";
import { Navbar } from "@/components/navbar";
import { Property } from "@/types/property";
import { FC } from "react";
import { PropertiesSearchControlsSection } from "./sections/controls";
import { PropertiesSearchGridSection } from "./sections/grid";
import { PropertiesSearchPaginationSection } from "./sections/pagination";
import { Paginated } from "@/types/paginated";
import { PropertyQueryParams } from "../types";
import { useRouter, useSearchParams } from "next/navigation";

export interface PropertiesSearchContainerProps {
  filters: unknown;
  paginated: Paginated<Property>;
  queries: PropertyQueryParams;
}

export const PropertiesSearchContainer: FC<PropertiesSearchContainerProps> = ({
  filters,
  paginated,
  queries,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: properties, last_page, current_page } = paginated;

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <>
      <Navbar variant="default" />
      <PropertiesSearchControlsSection />
      <PropertiesSearchGridSection properties={properties} />
      <PropertiesSearchPaginationSection
        currentPage={current_page}
        totalPages={last_page}
        onPrev={() => handlePageChange(current_page - 1)}
        onNext={() => handlePageChange(current_page + 1)}
      />
    </>
  );
};

import { FilterService } from "../services/filter";
import { PropertyService } from "../services/property";
import { cleanQueries } from "../utils/clean-queries";
import { PropertiesSearchContainer } from "./components/container";
import { PropertyQueryParams } from "./types";

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] }>;
}) {
  const queries = cleanQueries(await searchParams);

  const [paginated, filters] = await Promise.all([
    PropertyService.getPropertiesBySearch(queries),
    FilterService.getFilterOptions(),
  ]);

  return (
    <PropertiesSearchContainer
      filters={filters}
      paginated={paginated}
      queries={queries}
    />
  );
}

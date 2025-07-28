import { FilterService } from "@/services/filter";
import { getPropertiesBySearch } from "@/services/property";
import { cleanQueries } from "@/utils/clean-queries";
import { PropertiesSearchContainer } from "@/modules/properties/container";

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] }>;
}) {
  try {
    const queries = cleanQueries(await searchParams);

    const [paginated, filters] = await Promise.all([
      getPropertiesBySearch(queries),
      FilterService.getFilterOptions(),
    ]);

    return (
      <PropertiesSearchContainer
        filters={filters}
        paginated={paginated}
        queries={queries}
      />
    );
  } catch (error) {
    return <>{JSON.stringify(error)}</>;
  }
}

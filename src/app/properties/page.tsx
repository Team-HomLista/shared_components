import { PropertyService } from "../services/property";
import { cleanQueries } from "../utils/clean-queries";
import { PropertiesSearchContainer } from "./components/container";
import { PropertyQueryParams } from "./types";

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<PropertyQueryParams>;
}) {
  const queries = cleanQueries(await searchParams);

  const response = await PropertyService.getPropertiesBySearch(queries);

  return <PropertiesSearchContainer response={response} queries={queries} />;
}

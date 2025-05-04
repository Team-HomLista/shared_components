import { PropertyService } from "../services/property";
import { PropertiesSearchContainer } from "./components/container";

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{
    property_type?: string;
    search_type?: string;
    city?: string;
  }>;
}) {
  const { property_type, search_type, city } = await searchParams;

  const { data: properties } = await PropertyService.getPropertiesBySearch({
    property_type,
    search_type,
    city,
  });

  return <PropertiesSearchContainer properties={properties} />;
}

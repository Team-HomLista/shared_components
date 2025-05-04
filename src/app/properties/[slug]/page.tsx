import { PropertyService } from "@/app/services/property";
import { PropertyDetailContainer } from "./components/container";

export default async function DetailedPropertiesPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const property = await PropertyService.getPropertyDetails(slug);

  return <PropertyDetailContainer property={property} />;
}

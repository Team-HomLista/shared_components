import { PropertyService } from "@/app/services/property";
import { PropertyDetailContainer } from "../components/container";

export default async function DetailedPropertiesPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const property = await PropertyService.getPropertyDetails(slug);

  return <PropertyDetailContainer property={property} />;
}

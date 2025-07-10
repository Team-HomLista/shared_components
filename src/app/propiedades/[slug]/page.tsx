import { PropertyService } from "@/app/services/property";
import { PropertyDetailContainer } from "./container";
import { notFound } from "next/navigation";
import { ErrorBoundary } from "@/app/components/ErrorBoundary";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const property = await PropertyService.getPropertyDetails(slug);
    return {
      title: `${property.title} - Propiedades`,
      description:
        property.description ||
        `Propiedad en ${property.city}, ${property.state}. ${property.rooms} habitaciones, ${property.bathrooms} baños.`,
      openGraph: {
        title: property.title,
        description:
          property.description ||
          `Propiedad en ${property.city}, ${property.state}`,
        images: property.cover_image ? [property.cover_image] : [],
      },
    };
  } catch {
    return {
      title: "Propiedad no encontrada",
      description: "La propiedad que buscas no está disponible.",
    };
  }
}

export default async function DetailedPropertiesPage({ params }: PageProps) {
  const { slug } = await params;

  try {
    const [property, featuredProperties] = await Promise.all([
      PropertyService.getPropertyDetails(slug),
      PropertyService.getFeaturedProperties(10),
    ]);
    return (
      <ErrorBoundary>
        <PropertyDetailContainer
          property={property}
          propertyCarrusel={featuredProperties}
        />
      </ErrorBoundary>
    );
  } catch (error) {
    console.error("Failed to load property:", error);
    notFound();
  }
}

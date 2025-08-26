import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ErrorBoundary } from "@/components/error-boundary";
import { PropertyDetailContainer } from "@/modules/properties/internal/container";
import { getPropertyDetails, getFeaturedProperties } from "@/services/legacy/property";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const property = await getPropertyDetails(slug);
    return {
      title: `${property.title} - Propiedades`,
      description:
        property.description ||
        `Propiedad en ${property.city}, ${property.state}. ${property.rooms} habitaciones, ${property.bathrooms} baños.`,
      openGraph: {
        title: property.title,
        description: property.description || `Propiedad en ${property.city}, ${property.state}`,
        images: property.cover_image ? [property.cover_image] : []
      }
    };
  } catch {
    return {
      title: "Propiedad no encontrada",
      description: "La propiedad que buscas no está disponible."
    };
  }
}

export default async function DetailedPropertiesPage({ params }: PageProps) {
  const { slug } = await params;

  try {
    const [property, featuredProperties] = await Promise.all([
      getPropertyDetails(slug),
      getFeaturedProperties(10)
    ]);
    return (
      <ErrorBoundary
        description={`No pudimos cargar los detalles de la propiedad. Esto puede
                  deberse a un problema de conexión o la propiedad ya no está
                  disponible.`}
      >
        <PropertyDetailContainer property={property} propertyCarrusel={featuredProperties} />
      </ErrorBoundary>
    );
  } catch (error) {
    console.error("Failed to load property:", error);
    notFound();
  }
}

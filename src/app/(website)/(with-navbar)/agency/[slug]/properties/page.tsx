import { WhiteLabelPropertiesContainer } from "@/modules/white-label/properties/container";
import { PageProps } from "@/types/next";
import { headers } from "next/headers";

export default async function PropertiesPage({ params }: PageProps<"slug">) {
  const { slug } = await params;
  const headersList = await headers();
  
  // Check if this is a white-label request
  const isWhiteLabel = headersList.get('x-is-white-label') === 'true';
  const brand = headersList.get('x-brand');
  
  // If it's a white-label request, show white-label properties page
  if (isWhiteLabel && brand) {
    return <WhiteLabelPropertiesContainer agencySlug={slug} />;
  }

  // Simple test page for regular agency properties
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Agency Properties</h1>
        <p className="text-lg text-gray-600 mb-4">Slug: {slug}</p>
        <p className="text-sm text-gray-500 mb-4">
          This is the regular agency properties page. White-label routing is working!
        </p>
        <a href={`/agency/${slug}`} className="text-blue-600 hover:underline">
          Back to Agency
        </a>
      </div>
    </div>
  );
}
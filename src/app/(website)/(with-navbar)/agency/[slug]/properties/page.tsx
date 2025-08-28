import { headers } from "next/headers";

import { WhiteLabelPropertiesContainer } from "@/modules/white-label/properties/container";
import { PageProps } from "@/types/next";

export default async function PropertiesPage({ params }: PageProps<"slug">) {
  const { slug } = await params;
  const headersList = await headers();

  // Check if this is a white-label request
  const isWhiteLabel = headersList.get("x-is-white-label") === "true";
  const brand = headersList.get("x-brand");

  // If it's a white-label request, show white-label properties page
  if (isWhiteLabel && brand) {
    return <WhiteLabelPropertiesContainer agencySlug={slug} />;
  }

  // Simple test page for regular agency properties
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold">Agency Properties</h1>
        <p className="mb-4 text-lg text-gray-600">Slug: {slug}</p>
        <p className="mb-4 text-sm text-gray-500">
          This is the regular agency properties page. White-label routing is working!
        </p>
        <a href={`/agency/${slug}`} className="text-blue-600 hover:underline">
          Back to Agency
        </a>
      </div>
    </div>
  );
}

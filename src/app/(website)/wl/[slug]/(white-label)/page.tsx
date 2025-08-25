import { headers } from "next/headers";

import { WhiteLabelHomePage } from "@/modules/white-label/home";

interface WhiteLabelHomePageProps {
  params: Promise<{ slug: string }>;
}

export default async function WhiteLabelAgencyPage({ params }: WhiteLabelHomePageProps) {
  const { slug } = await params;
  const headersList = await headers();

  // Get brand info from middleware
  const brand = headersList.get("x-brand") || slug;
  const isWhiteLabel = headersList.get("x-is-white-label") === "true";

  // Debug logging for development
  if (process.env.NODE_ENV !== "production") {
    console.log("🏠 Page Debug:", {
      slug,
      brand,
      isWhiteLabel,
      xBrandHeader: headersList.get("x-brand"),
      xWhiteLabelHeader: headersList.get("x-is-white-label"),
      allHeaders: Object.fromEntries(headersList.entries())
    });
  }

  // Check if it's a valid brand even if header is missing
  const supportedBrands = ["acme", "zenit", "demo"];
  const isValidBrand = supportedBrands.includes(slug);

  if (!isWhiteLabel && !isValidBrand) {
    // Fallback if not properly configured
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Agency not found: {slug}</h1>
        <p>Please check your configuration.</p>
        <p className="mt-4 text-sm text-gray-500">
          Supported agencies: {supportedBrands.join(", ")}
        </p>
        <p className="text-sm text-gray-500">
          Debug: isWhiteLabel={String(isWhiteLabel)}, brand={brand}, slug={slug}
        </p>
      </div>
    );
  }

  return <WhiteLabelHomePage agencySlug={brand} />;
}

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

  if (!isWhiteLabel) {
    // Fallback if not properly configured
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Agency not found: {slug}</h1>
        <p>Please check your configuration.</p>
      </div>
    );
  }

  return <WhiteLabelHomePage agencySlug={brand} />;
}

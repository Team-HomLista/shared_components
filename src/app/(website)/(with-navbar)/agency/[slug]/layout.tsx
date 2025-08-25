import { headers } from "next/headers";
import { PropsWithChildren } from "react";

import { getBrandConfig } from "@/config/brands";
import { WhiteLabelLayout } from "@/layouts/white-label";

interface AgencyLayoutProps extends PropsWithChildren {
  params: Promise<{ slug: string }>;
}

export default async function AgencyLayout({ children, params }: AgencyLayoutProps) {
  const { slug } = await params;
  const headersList = await headers();

  // Get brand info from middleware headers
  const brand = headersList.get("x-brand") || slug;
  const isWhiteLabel = headersList.get("x-is-white-label") === "true";

  // Server-side brand validation
  const brandConfig = getBrandConfig(brand);

  // If this is a white-label request with valid brand config, wrap with white-label layout
  if (isWhiteLabel && brandConfig) {
    return <WhiteLabelLayout brand={brand}>{children}</WhiteLabelLayout>;
  }

  // Otherwise, render normally (regular agency page)
  return children;
}

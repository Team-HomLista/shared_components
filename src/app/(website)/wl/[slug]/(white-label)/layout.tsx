import { WhiteLabelLayout } from "@/layouts/white-label";
import { getBrandConfig } from "@/config/brands";
import { headers } from "next/headers";
import { PropsWithChildren } from "react";

interface WhiteLabelLayoutProps extends PropsWithChildren {
  params: Promise<{ slug: string }>;
}

export default async function WhiteLabelLayoutWrapper({ 
  children, 
  params 
}: WhiteLabelLayoutProps) {
  const { slug } = await params;
  const headersList = await headers();
  
  // Get brand info from middleware or URL slug
  const brand = headersList.get('x-brand') || slug;
  const isWhiteLabel = headersList.get('x-is-white-label') === 'true';
  
  // Server-side brand validation
  const brandConfig = getBrandConfig(brand);
  
  // If no valid brand config and not marked as white-label, return regular layout
  if (!brandConfig && !isWhiteLabel) {
    return children;
  }
  
  // If brand is valid, always show white-label layout (even without middleware headers)
  if (brandConfig) {
    return (
      <WhiteLabelLayout brand={brand}>
        {children}
      </WhiteLabelLayout>
    );
  }

  // Fallback - brand not found
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Brand Not Found</h1>
        <p className="text-muted-foreground mb-4">
          The brand "{brand}" is not configured.
        </p>
        <a href="/" className="text-blue-600 hover:underline">
          Return to main site
        </a>
      </div>
    </div>
  );
}
import { WhiteLabelPropertiesContainer } from "@/modules/white-label/properties/container";
import { PageProps } from "@/types/next";

export default async function WhiteLabelPropertiesPage({ params }: PageProps<"slug">) {
  const { slug } = await params;

  return <WhiteLabelPropertiesContainer agencySlug={slug} />;
}
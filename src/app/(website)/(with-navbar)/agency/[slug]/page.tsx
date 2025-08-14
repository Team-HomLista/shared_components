import { AgenciesContainer } from "@/modules/agencies/internal/container";
import { PageProps } from "@/types/next";

export default async function Page({ params }: PageProps<"slug">) {
  const { slug } = await params;

  return <AgenciesContainer slug={slug} />;
}

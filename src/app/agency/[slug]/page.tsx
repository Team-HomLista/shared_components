import { AgenciesContainer } from "@/modules/agencies/internal/container";

interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  return <AgenciesContainer slug={params.slug} />;
}

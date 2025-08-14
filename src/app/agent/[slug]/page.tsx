import { AgentContainer } from "@/modules/agents/internal/container";

interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  return <AgentContainer slug={params.slug} />;
}

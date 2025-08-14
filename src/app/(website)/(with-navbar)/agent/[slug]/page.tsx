import { AgentContainer } from "@/modules/agents/internal/container";
import { PageProps } from "@/types/next";

export default async function Page({ params }: PageProps<"slug">) {
  const { slug } = await params;

  return <AgentContainer slug={slug} />;
}

import { use } from "react";

import { AgentContainer } from "@/modules/agents/internal/container";
import { PageProps } from "@/types/next";

export default async function Page({ params }: PageProps<"slug">) {
  const { slug } = use(params);

  return <AgentContainer slug={slug} />;
}

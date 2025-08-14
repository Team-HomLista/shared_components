import { use } from "react";

import { AgenciesContainer } from "@/modules/agencies/internal/container";
import { PageProps } from "@/types/next";

export default async function Page({ params }: PageProps<"slug">) {
  const { slug } = use(params);

  return <AgenciesContainer slug={slug} />;
}

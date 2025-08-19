"use client";
import { use } from "react";

import { getBreadcrumbFromMenuItem, useDashboard } from "@/hooks/use-dashboard";
import { PageProps } from "@/types/next";

export default function Page({ params }: PageProps<"id">) {
  const { id } = use(params);

  useDashboard({
    activeMenuItem: "real_state/properties",
    breadcrumb: [
      ...getBreadcrumbFromMenuItem("real_state/properties"),
      {
        label: `Propiedad ${id}`
      }
    ]
  });

  return (
    <div className="flex flex-col gap-2">
      <h1>Property {id}</h1>
      <div className="flex flex-col gap-2" />
    </div>
  );
}

"use client";
import { use } from "react";

import { getBreadcrumbFromMenuItem, useDashboard } from "@/hooks/useDashboard";
import { ClientPageProps } from "@/types/next";

export default function Page({ params }: ClientPageProps<"id">) {
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

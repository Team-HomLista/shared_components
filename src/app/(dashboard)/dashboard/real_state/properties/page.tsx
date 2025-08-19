"use client";

import { getBreadcrumbFromMenuItem, useDashboard } from "@/hooks/use-dashboard";

export default function Page() {
  useDashboard({
    activeMenuItem: "real_state/properties",
    breadcrumb: getBreadcrumbFromMenuItem("real_state/properties", true)
  });

  return <div className="flex flex-col gap-2">Propiedades</div>;
}

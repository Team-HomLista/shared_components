"use client";

import { getBreadcrumbFromMenuItem, useDashboard } from "@/hooks/use-dashboard";

export default function Page() {
  useDashboard({
    activeMenuItem: "administration/operators",
    breadcrumb: getBreadcrumbFromMenuItem("administration/operators", true)
  });

  return <div className="flex flex-col gap-2">Operators</div>;
}

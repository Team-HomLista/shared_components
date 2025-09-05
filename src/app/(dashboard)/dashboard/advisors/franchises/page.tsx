"use client";

import { getBreadcrumbFromMenuItem, useDashboard } from "@/hooks/use-dashboard";
import { AgencyViewContainer } from "@/modules/agencies/dashboard/view/container";

export default function Page() {
  useDashboard({
    activeMenuItem: "advisors/franchises",
    breadcrumb: getBreadcrumbFromMenuItem("advisors/franchises", true)
  });

  return <AgencyViewContainer />;
}

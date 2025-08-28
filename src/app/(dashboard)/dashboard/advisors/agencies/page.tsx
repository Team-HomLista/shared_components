"use client";
import { getBreadcrumbFromMenuItem, useDashboard } from "@/hooks/use-dashboard";
import { AgencyEditContainer } from "@/modules/dashboard/advisors/agencies/edit/container";

export default function Page() {
  useDashboard({
    activeMenuItem: "advisors/agencies",
    breadcrumb: getBreadcrumbFromMenuItem("advisors/agencies", true)
  });

  return <AgencyEditContainer />;
}

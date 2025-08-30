"use client";
import { getBreadcrumbFromMenuItem, useDashboard } from "@/hooks/use-dashboard";
import { AgencyEditContainer } from "@/modules/agencies/dashboard/edit/container";

export default function Page() {
  useDashboard({
    activeMenuItem: "advisors/agencies",
    breadcrumb: getBreadcrumbFromMenuItem("advisors/agencies", true)
  });

  return <AgencyEditContainer />;
}

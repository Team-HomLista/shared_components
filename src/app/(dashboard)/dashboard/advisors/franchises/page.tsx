"use client";

import { getBreadcrumbFromMenuItem, useDashboard } from "@/hooks/use-dashboard";
import { AgentViewContainer } from "@/modules/agents/dashboard/view/container";
//import { AgencyViewContainer } from "@/modules/agencies/dashboard/view/container";

export default function Page() {
  useDashboard({
    activeMenuItem: "advisors/franchises",
    breadcrumb: getBreadcrumbFromMenuItem("advisors/franchises", true)
  });

  return <AgentViewContainer />;
}

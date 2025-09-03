"use client";
import { getBreadcrumbFromMenuItem, useDashboard } from "@/hooks/use-dashboard";
import { AgentsEditContainer } from "@/modules/agents/dashboard/edit/container";

export default function Page() {
  useDashboard({
    activeMenuItem: "advisors/agents",
    breadcrumb: getBreadcrumbFromMenuItem("advisors/agents", true)
  });

  return <AgentsEditContainer />;
}

"use client";
import { getBreadcrumbFromMenuItem, useDashboard } from "@/hooks/use-dashboard";

export default function Page() {
  useDashboard({
    activeMenuItem: "advisors/agents",
    breadcrumb: getBreadcrumbFromMenuItem("advisors/agents", true)
  });

  return <p>página de agentes</p>;
}

"use client";

import { useDashboard } from "@/hooks/use-dashboard";
import { AgenciesDashboardContainer } from "@/modules/dashboard/home/agencies/container";
//import { FranquiciasDashboardContainer } from "@/modules/dashboard/home/franchises/container";
//import { DashboardContainer } from "@/modules/dashboard/home/backoffice/container";

export default function Page() {
  useDashboard({
    activeMenuItem: "dashboard"
  });

  return <AgenciesDashboardContainer />;
}

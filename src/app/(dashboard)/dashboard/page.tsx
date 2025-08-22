"use client";

import { useDashboard } from "@/hooks/use-dashboard";
import { FranquiciasDashboardContainer } from "@/modules/dashboard/home/franchises/container";
//import { DashboardContainer } from "@/modules/dashboard/home/backoffice/container";

export default function Page() {
  useDashboard({
    activeMenuItem: "dashboard"
  });

  return <FranquiciasDashboardContainer />;
}

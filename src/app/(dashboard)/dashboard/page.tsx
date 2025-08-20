"use client";

import { useDashboard } from "@/hooks/use-dashboard";
import { DashboardContainer } from "@/modules/dashboard/home/container";

export default function Page() {
  useDashboard({
    activeMenuItem: "dashboard"
  });

  return <DashboardContainer />;
}

"use client";

import { useDashboard } from "@/hooks/useDashboard";
import { DashboardContainer } from "@/modules/dashboard/home/container";

export default function Page() {
  useDashboard({
    activeMenuItem: "dashboard"
  });

  return <DashboardContainer />;
}

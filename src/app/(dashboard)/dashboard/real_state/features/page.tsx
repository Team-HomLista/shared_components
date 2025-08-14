"use client";

import { getBreadcrumbFromMenuItem, useDashboard } from "@/hooks/useDashboard";

export default function Page() {
  useDashboard({
    activeMenuItem: "real_state/features",
    breadcrumb: getBreadcrumbFromMenuItem("real_state/features", true)
  });

  return <div className="flex flex-col gap-2">Features</div>;
}

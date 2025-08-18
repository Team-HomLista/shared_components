"use client";

import { useDashboard } from "@/hooks/use-dashboard";

export default function Page() {
  useDashboard({
    activeMenuItem: "dashboard"
  });

  return <>HOME</>;
}

"use client";

import { useDashboard } from "@/hooks/useDashboard";

export default function Page() {
  useDashboard({
    activeMenuItem: "dashboard"
  });

  return <>HOME</>;
}

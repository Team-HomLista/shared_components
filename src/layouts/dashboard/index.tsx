import { PropsWithChildren } from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { BaseLayout } from "@/layouts/base-layout";

import { DashboardNavbar } from "./navbar";
import { DashboardSidebar } from "./sidebar";

import "@/styles/dashboard.css";

export function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <BaseLayout theme="dashboard">
      <SidebarProvider
        style={
          {
            "--header-height": "calc(var(--spacing) * 12)"
          } as React.CSSProperties
        }
      >
        <DashboardSidebar collapsible="offcanvas" />

        <SidebarInset>
          <DashboardNavbar />

          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">{children}</div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </BaseLayout>
  );
}

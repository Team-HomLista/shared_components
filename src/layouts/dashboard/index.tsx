"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { PropsWithChildren } from "react";

import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";
import useCookie from "@/shared/hooks/use-cookie";

import { DashboardHeader } from "./header";
import { DashboardSidebar } from "./sidebar";

export function DashboardLayout({ children }: PropsWithChildren) {
  const [isOpen, setOpen] = useCookie("sidebar_is_open", "false");

  return (
    <NuqsAdapter>
      <SidebarProvider
        open={isOpen === "true"}
        style={
          {
            "--header-height": "calc(var(--spacing) * 12)"
          } as React.CSSProperties
        }
        onOpenChange={(open) => setOpen(open ? "true" : "false")}
      >
        <DashboardSidebar collapsible="offcanvas" />

        <SidebarInset>
          <DashboardHeader />

          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">{children}</div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </NuqsAdapter>
  );
}

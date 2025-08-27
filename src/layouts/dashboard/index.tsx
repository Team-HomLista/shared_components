"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { PropsWithChildren } from "react";

import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";
import { AlertDialogProvider } from "@/shared/hooks/use-alert-dialog";
import useCookie from "@/shared/hooks/use-cookie";
import { DialogProvider } from "@/shared/hooks/use-dialog";

import { DashboardNavbar } from "./navbar";
import { DashboardSidebar } from "./sidebar";

import "@/styles/dashboard.css";

export function DashboardLayout({ children }: PropsWithChildren) {
  const [isOpen, setOpen] = useCookie("sidebar_is_open", "false");

  return (
    <AlertDialogProvider>
      <DialogProvider>
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
              <DashboardNavbar />

              <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">{children}</div>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </NuqsAdapter>
      </DialogProvider>
    </AlertDialogProvider>
  );
}

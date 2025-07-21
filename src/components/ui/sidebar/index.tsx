import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
} from "react";

import { useSidebar } from "./hook";
import { SidebarComposition } from "./types";
import { SidebarContent } from "./content";
import { SidebarFooter } from "./footer";
import { SidebarGroup } from "./group";
import { SidebarHeader } from "./header";
import { SidebarTrigger } from "./trigger";
import { SidebarProvider } from "./provider";
import { SidebarMenu } from "./menu";
import { SidebarRail } from "./rail";
import { SidebarSeparator } from "./separator";
import { SidebarInset } from "./inset";
import { cn } from "@shared/lib/utils";
import { Sheet, SheetContent } from "../sheet";

type SidebarCompound = ForwardRefExoticComponent<
  ComponentPropsWithoutRef<"div"> & SidebarProps
> &
  SidebarComposition;

interface SidebarProps {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}

const ref = forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & SidebarProps
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "bg-sidebar text-sidebar-foreground flex h-full w-64 flex-col",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="bg-sidebar text-sidebar-foreground w-64 p-0 [&>button]:hidden"
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className="text-sidebar-foreground group peer hidden md:block"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "relative h-full w-64 duration-200",
            "bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(2rem)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[2rem]",
          )}
        />
        <div
          className={cn(
            "fixed inset-y-0 z-10 hidden h-full w-64 duration-200",
            "transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(16rem)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(16rem)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(2rem)_+_theme(spacing.4)_+2px)]"
              : cn(
                  "group-data-[collapsible=icon]:w-[2rem]",
                  "group-data-[side=left]:border-r",
                  "group-data-[side=right]:border-l",
                ),
            className,
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className={cn(
              "bg-sidebar flex h-full w-full flex-col",
              "group-data-[variant=floating]:rounded-lg",
              "group-data-[variant=floating]:border",
              "group-data-[variant=floating]:border-sidebar-border",
              "group-data-[variant=floating]:shadow",
            )}
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);

ref.displayName = "Sidebar";

export const Sidebar = {
  ...ref,
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  Header: SidebarHeader,
  Inset: SidebarInset,
  Menu: SidebarMenu,
  Rail: SidebarRail,
  Separator: SidebarSeparator,
} as SidebarCompound;

export { useSidebar, SidebarTrigger, SidebarProvider };

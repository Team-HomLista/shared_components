import { forwardRef } from "react";
import { cn } from "@shared/lib/utils";

export const SidebarMenuItem = forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative cursor-pointer", className)}
    {...props}
  />
));

SidebarMenuItem.displayName = "SidebarMenuItem";

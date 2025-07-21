import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@shared/lib/utils";

export const SidebarMenuSubButton = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden",
        "text-sidebar-foreground ring-sidebar-ring rounded-md px-2 outline-none",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        "focus-visible:ring-2",
        "active:bg-sidebar-accent active:text-sidebar-accent-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        "aria-disabled:pointer-events-none aria-disabled:opacity-50",
        "[&>span:last-child]:truncate",
        "[&>svg]:size-4",
        "[&>svg]:shrink-0",
        "[&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent",
        "data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});

SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

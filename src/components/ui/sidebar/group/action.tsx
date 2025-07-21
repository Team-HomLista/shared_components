import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@shared/lib/utils";

export const SidebarGroupAction = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center",
        "text-sidebar-foreground rounded-md p-0 outline-none",
        "ring-sidebar-ring transition-transform",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        "focus-visible:ring-2",
        "[&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});

SidebarGroupAction.displayName = "SidebarGroupAction";

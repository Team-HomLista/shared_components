import { forwardRef } from "react";
import { Input } from "../input";
import { cn } from "@shared/lib/utils";

export const SidebarInput = forwardRef<
  React.ComponentRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "bg-background h-8 w-full shadow-none",
        "focus-visible:ring-sidebar-ring focus-visible:ring-2",
        className,
      )}
      {...props}
    />
  );
});

SidebarInput.displayName = "SidebarInput";

import { FormItemContext } from "@shared/components/ui/form/form-context";
import { cn } from "@shared/lib/utils";
import React from "react";

export function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" className={cn("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
}

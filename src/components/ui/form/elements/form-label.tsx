import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";
import { useFormField } from "@shared/components/ui/form/hooks/use-form-field";
import { Label } from "@shared/components/ui/label";

export function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField();

  if (!props.children) return null;

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

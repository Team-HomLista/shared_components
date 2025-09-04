import * as LabelPrimitive from "@radix-ui/react-label";

import { useFormField } from "@/components/ui/form/hooks/use-form-field";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField();

  if (!props.children) return null;

  return (
    <Label
      className={cn("data-[error=true]:text-destructive", className)}
      data-error={!!error}
      data-slot="form-label"
      htmlFor={formItemId}
      {...props}
    />
  );
}

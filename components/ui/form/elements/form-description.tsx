import { useFormField } from "@shared/components/ui/form/hooks/use-form-field";
import { cn } from "@shared/lib/utils";

export function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();

  if (!props.children) return null;

  return (
    <p
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="form-description"
      id={formDescriptionId}
      {...props}
    />
  );
}

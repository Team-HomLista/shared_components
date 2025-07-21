import { cn } from "@shared/lib/utils";
import { useFormField } from "@shared/components/ui/form/hooks/use-form-field";

export function FormDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();

  if (!props.children) return null;

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

import { cn } from "@shared/lib/utils";
import { FormItem } from "@shared/components/ui/form/elements/fomr-item";
import { FormControl } from "@shared/components/ui/form/elements/form-control";
import { FormDescription } from "@shared/components/ui/form/elements/form-description";
import { FormField } from "@shared/components/ui/form/elements/form-field";
import { FormLabel } from "@shared/components/ui/form/elements/form-label";
import { FormMessage } from "@shared/components/ui/form/elements/form-message";
import { Switch } from "@shared/components/ui/switch";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface FormSwitchProminentProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  description: string;
  label: string;
  name: FieldPath<TFieldValues>;
}

export const FormSwitchProminent = <TFieldValues extends FieldValues>({
  control,
  description,
  label,
  name,
}: FormSwitchProminentProps<TFieldValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="border-input has-data-[state=checked]:border-primary/50 relative flex w-full items-start gap-4 rounded-md border p-4 shadow-xs outline-none">
              <Switch
                className={cn(
                  "order-1 h-6 w-10 after:absolute after:inset-0",
                  "[&_span]:size-5",
                  "data-[state=checked]:[&_span]:translate-x-[18px]",
                  "data-[state=checked]:[&_span]:rtl:-translate-x-2",
                )}
                checked={field.value}
                onCheckedChange={field.onChange}
                onClick={() => field.onChange(!field.value)}
              />
              <div className="grid grow gap-2">
                <FormLabel>{label}</FormLabel>
                <FormDescription>{description}</FormDescription>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

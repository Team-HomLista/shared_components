import { FormItem } from "@shared/components/ui/form/elements/fomr-item";
import { FormControl } from "@shared/components/ui/form/elements/form-control";
import { FormDescription } from "@shared/components/ui/form/elements/form-description";
import { FormField } from "@shared/components/ui/form/elements/form-field";
import { FormLabel } from "@shared/components/ui/form/elements/form-label";
import { FormMessage } from "@shared/components/ui/form/elements/form-message";
import { Label } from "@shared/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@shared/components/ui/radio-group";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface RadioGroupProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  title: string;
  description?: string;
  options: { value: string; label: string }[];
  horizontal?: boolean;
}

export function FormRadioGroup<TFieldValues extends FieldValues>({
  control,
  name,
  title,
  description,
  options,
  horizontal = false
}: RadioGroupProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormDescription>{description}</FormDescription>
          <FormControl>
            <RadioGroup
              className={horizontal ? "flex flex-wrap gap-4" : ""}
              defaultValue={field.value}
              onValueChange={field.onChange}
            >
              {options.map((option) => (
                <div key={option.value} className="flex gap-2.5">
                  <RadioGroupItem id={`radio-item-${option.value}`} value={option.value} />
                  <Label htmlFor={`radio-item-${option.value}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

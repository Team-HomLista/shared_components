import { Control, FieldPath, FieldValues } from "react-hook-form";

import { FormItem } from "@/components/ui/form/elements/fomr-item";
import { FormControl } from "@/components/ui/form/elements/form-control";
import { FormDescription } from "@/components/ui/form/elements/form-description";
import { FormField } from "@/components/ui/form/elements/form-field";
import { FormLabel } from "@/components/ui/form/elements/form-label";
import { FormMessage } from "@/components/ui/form/elements/form-message";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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

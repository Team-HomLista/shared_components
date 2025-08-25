import { FormItem } from "@shared/components/ui/form/elements/fomr-item";
import { FormControl } from "@shared/components/ui/form/elements/form-control";
import { FormDescription } from "@shared/components/ui/form/elements/form-description";
import { FormField } from "@shared/components/ui/form/elements/form-field";
import { FormLabel } from "@shared/components/ui/form/elements/form-label";
import { FormMessage } from "@shared/components/ui/form/elements/form-message";
import { Input } from "@shared/components/ui/input";
import { HTMLProps } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface FormInputProps<TFieldValues extends FieldValues> extends HTMLProps<HTMLInputElement> {
  control: Control<TFieldValues>;
  description?: string;
  name: FieldPath<TFieldValues>;
  title?: string;
  contentClassName?: string;
}

export const FormInput = <TFieldValues extends FieldValues>({
  control,
  description,
  name,
  title,
  contentClassName,
  ...inputProps
}: FormInputProps<TFieldValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={contentClassName}>
          <FormLabel>{title}</FormLabel>
          <FormDescription>{description}</FormDescription>
          <FormControl>
            {/* Pass inputProps and field props to the Input component */}
            <Input {...inputProps} {...field} value={field.value ?? ""} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

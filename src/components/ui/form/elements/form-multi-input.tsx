import { HTMLProps } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

import { FormItem } from "@/components/ui/form/elements/fomr-item";
import { FormControl } from "@/components/ui/form/elements/form-control";
import { FormDescription } from "@/components/ui/form/elements/form-description";
import { FormField } from "@/components/ui/form/elements/form-field";
import { FormLabel } from "@/components/ui/form/elements/form-label";
import { FormMessage } from "@/components/ui/form/elements/form-message";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FormMultiInputProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  title?: string;
  description?: string;
  containerClass?: string;
  inputs: Array<
    {
      formItem?: React.ComponentProps<typeof FormItem>;
      name: FieldPath<TFieldValues>;
    } & HTMLProps<HTMLInputElement>
  >;
}

export const FormMultiInput = <TFieldValues extends FieldValues>({
  control,
  description,
  containerClass,
  inputs,
  title
}: FormMultiInputProps<TFieldValues>) => {
  return (
    <div className="flex flex-col gap-2">
      <FormLabel>{title}</FormLabel>
      <FormDescription>{description}</FormDescription>
      <div className={cn("grid grid-cols-2 gap-4", containerClass)}>
        {inputs.map((input) => (
          <FormField
            key={input.name}
            control={control}
            name={input.name}
            render={({ field }) => {
              const { formItem, ...inputProps } = input;

              return (
                <FormItem {...(formItem ?? {})}>
                  <FormControl>
                    <Input {...inputProps} {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        ))}
      </div>
    </div>
  );
};

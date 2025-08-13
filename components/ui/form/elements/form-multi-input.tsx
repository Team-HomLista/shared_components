import { FormItem } from "@shared/components/ui/form/elements/fomr-item";
import { FormControl } from "@shared/components/ui/form/elements/form-control";
import { FormDescription } from "@shared/components/ui/form/elements/form-description";
import { FormField } from "@shared/components/ui/form/elements/form-field";
import { FormLabel } from "@shared/components/ui/form/elements/form-label";
import { FormMessage } from "@shared/components/ui/form/elements/form-message";
import { Input } from "@shared/components/ui/input";
import { HTMLProps } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface FormMultiInputProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  title?: string;
  description?: string;
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
  inputs,
  title
}: FormMultiInputProps<TFieldValues>) => {
  return (
    <div className="flex flex-col gap-2">
      <FormLabel>{title}</FormLabel>
      <FormDescription>{description}</FormDescription>
      <div className="grid grid-cols-2 gap-4">
        {inputs.map((input) => (
          <FormField
            control={control}
            key={input.name}
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

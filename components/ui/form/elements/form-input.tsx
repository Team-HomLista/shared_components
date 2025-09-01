import { FormItem } from "@shared/components/ui/form/elements/fomr-item";
import { FormControl } from "@shared/components/ui/form/elements/form-control";
import { FormDescription } from "@shared/components/ui/form/elements/form-description";
import { FormField } from "@shared/components/ui/form/elements/form-field";
import { FormLabel } from "@shared/components/ui/form/elements/form-label";
import { FormMessage } from "@shared/components/ui/form/elements/form-message";
import { Input, InputProps } from "@shared/components/ui/input";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface FormInputProps<TFieldValues extends FieldValues> extends Omit<InputProps, "title"> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  title?: React.ReactNode;
  description?: React.ReactNode;
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
            <Input {...inputProps} {...field} value={field.value ?? ""} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

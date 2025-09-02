import { HTMLProps, ReactNode } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

import { FormItem } from "@/components/ui/form/elements/fomr-item";
import { FormControl } from "@/components/ui/form/elements/form-control";
import { FormDescription } from "@/components/ui/form/elements/form-description";
import { FormField } from "@/components/ui/form/elements/form-field";
import { FormLabel } from "@/components/ui/form/elements/form-label";
import { FormMultiFormMessage } from "@/components/ui/form/elements/form-message";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface Item {
  label: string;
  value: string;
}

interface SelectField<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  placeholder?: string;
  className?: string;
  items: Array<Item>;
  buildItem?: (item: Item) => ReactNode;
}

interface InputField<TFieldValues extends FieldValues> extends HTMLProps<HTMLInputElement> {
  name: FieldPath<TFieldValues>;
  placeholder?: string;
}

export interface FormInputWithSelectorProps<TFieldValues extends FieldValues>
  extends HTMLProps<HTMLInputElement> {
  control: Control<TFieldValues>;
  title?: string;
  description?: string;
  className?: string;
  inverted?: boolean;
  fields: {
    select: SelectField<TFieldValues>;
    input: InputField<TFieldValues>;
  };
}

export const FormInputWithSelector = <TFieldValues extends FieldValues>({
  control,
  title,
  description,
  className,
  inverted,
  fields
}: FormInputWithSelectorProps<TFieldValues>) => {
  const InputField = (
    <FormField
      control={control}
      name={fields.input.name}
      render={({ field }) => (
        <FormControl>
          <Input
            className={cn({
              "rounded-r-none": !inverted,
              "rounded-l-none": inverted
            })}
            {...field}
            {...fields.input}
          />
        </FormControl>
      )}
    />
  );
  const SelectField = (
    <FormField
      control={control}
      name={fields.select.name}
      render={({ field }) => (
        <Select defaultValue={field.value} onValueChange={field.onChange}>
          <FormControl>
            <SelectTrigger
              className={cn(
                {
                  "rounded-r-none border-r-0": inverted,
                  "rounded-l-none border-l-0": !inverted
                },
                fields.select.className
              )}
            >
              <SelectValue placeholder={fields.select.placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {fields.select.items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {fields.select.buildItem?.(item) ?? item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );

  return (
    <FormItem>
      <FormLabel>{title}</FormLabel>
      <FormDescription>{description}</FormDescription>
      <div className={cn("flex rounded-md shadow-xs", className)}>
        {inverted ? SelectField : InputField}
        {inverted ? InputField : SelectField}
      </div>

      <FormMultiFormMessage names={[fields.select.name, fields.input.name]} />
    </FormItem>
  );
};

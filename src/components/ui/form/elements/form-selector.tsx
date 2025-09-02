import { ReactNode } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

import { FormItem } from "@/components/ui/form/elements/fomr-item";
import { FormControl } from "@/components/ui/form/elements/form-control";
import { FormDescription } from "@/components/ui/form/elements/form-description";
import { FormField } from "@/components/ui/form/elements/form-field";
import { FormLabel } from "@/components/ui/form/elements/form-label";
import { FormMessage } from "@/components/ui/form/elements/form-message";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface Item {
  value: string;
  label: string;
}

export interface FormSelectorProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  title?: string;
  description?: string;
  placeholder: string;
  items: Array<Item>;
  children?: (item: Item) => ReactNode;
  className?: string;
}

export const FormSelector = <TFieldValues extends FieldValues>({
  control,
  description,
  name,
  title,
  placeholder,
  items,
  children,
  className
}: FormSelectorProps<TFieldValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormDescription>{description}</FormDescription>
          <Select defaultValue={field.value} onValueChange={(value) => field.onChange(value)}>
            <FormControl>
              <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {children?.(item) ?? item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

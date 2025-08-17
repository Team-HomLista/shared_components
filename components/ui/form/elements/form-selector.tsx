import { FormItem } from "@shared/components/ui/form/elements/fomr-item";
import { FormControl } from "@shared/components/ui/form/elements/form-control";
import { FormDescription } from "@shared/components/ui/form/elements/form-description";
import { FormField } from "@shared/components/ui/form/elements/form-field";
import { FormLabel } from "@shared/components/ui/form/elements/form-label";
import { FormMessage } from "@shared/components/ui/form/elements/form-message";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@shared/components/ui/select";
import { ReactNode } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

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

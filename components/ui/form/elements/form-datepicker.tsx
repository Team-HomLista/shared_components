"use client";

import { DatePicker } from "@shared/components/ui/date-picker";
import { FormControl } from "@shared/components/ui/form/elements/form-control";
import { FormField } from "@shared/components/ui/form/elements/form-field";
import { FormLabel } from "@shared/components/ui/form/elements/form-label";
import { FormMessage } from "@shared/components/ui/form/elements/form-message";

import { FormItem } from "./fomr-item";

interface FormDatePickerProps {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const FormDatePicker: React.FC<FormDatePickerProps> = ({
  control,
  name,
  label = "Selecciona una fecha",
  placeholder,
  disabled
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        // Normaliza el valor a Date
        const valueAsDate =
          field.value instanceof Date
            ? field.value
            : field.value
              ? new Date(field.value)
              : undefined;

        return (
          <FormItem>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <FormControl>
              <DatePicker
                date={valueAsDate}
                placeholder={placeholder}
                disabled={disabled}
                onSelect={(date) => {
                  // Guardar null si no hay fecha
                  field.onChange(date ?? null);
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

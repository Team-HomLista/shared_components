import { FormItem } from "@shared/components/ui/form/elements/fomr-item";
import { FormControl } from "@shared/components/ui/form/elements/form-control";
import { FormDescription } from "@shared/components/ui/form/elements/form-description";
import { FormField } from "@shared/components/ui/form/elements/form-field";
import { FormLabel } from "@shared/components/ui/form/elements/form-label";
import { FormMessage } from "@shared/components/ui/form/elements/form-message";
import { Input } from "@shared/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@shared/components/ui/select";
import { HTMLProps } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

export interface FormPhoneProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  description?: string;
  fields: {
    lada: {
      name: FieldPath<TFieldValues>;
      placeholder: string;
    };
    number: {
      name: FieldPath<TFieldValues>;
    } & HTMLProps<HTMLInputElement>;
    extension: {
      name: FieldPath<TFieldValues>;
    } & HTMLProps<HTMLInputElement>;
  };
  title: string;
}

export const FormPhone = <TFieldValues extends FieldValues>({
  control,
  description,
  fields,
  title,
}: FormPhoneProps<TFieldValues>) => {
  return (
    <FormField
      control={control}
      name={fields.number.name}
      render={() => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormDescription>{description}</FormDescription>
          <FormControl>
            <div className="flex gap-2 rounded-md shadow-xs">
              <Controller
                control={control}
                name={fields.lada.name}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-[150px] flex-none">
                      <SelectValue placeholder={fields.lada.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Lada</SelectLabel>
                        <SelectItem value="52">+52 México</SelectItem>
                        <SelectItem value="33">+33 Francia</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              <Controller
                control={control}
                name={fields.number.name}
                render={({ field }) => (
                  <Input className="flex-grow" {...fields.number} {...field} />
                )}
              />
              <Controller
                control={control}
                name={fields.extension.name}
                render={({ field }) => (
                  <Input
                    className="w-[150px] flex-none"
                    {...fields.extension}
                    {...field}
                  />
                )}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

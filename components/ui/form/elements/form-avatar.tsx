"use client";

import { AvatarUploader } from "@shared/components/avatar-uploader";
import { FormItem } from "@shared/components/ui/form/elements/fomr-item";
import { FormControl } from "@shared/components/ui/form/elements/form-control";
import { FormDescription } from "@shared/components/ui/form/elements/form-description";
import { FormField } from "@shared/components/ui/form/elements/form-field";
import { FormLabel } from "@shared/components/ui/form/elements/form-label";
import { FormMessage } from "@shared/components/ui/form/elements/form-message";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface FormAvatarProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  description: string;
  label: string;
  name: FieldPath<TFieldValues>;
}

export const FormAvatar = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description
}: FormAvatarProps<TFieldValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col gap-2">
            <FormLabel>{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
            <FormControl>
              {}
              <AvatarUploader preview={field.value} onChange={field.onChange} />
            </FormControl>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

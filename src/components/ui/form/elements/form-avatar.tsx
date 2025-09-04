"use client";

import { Control, FieldPath, FieldValues } from "react-hook-form";

import { AvatarUploader } from "@/components/avatar-uploader";
import { FormItem } from "@/components/ui/form/elements/fomr-item";
import { FormControl } from "@/components/ui/form/elements/form-control";
import { FormDescription } from "@/components/ui/form/elements/form-description";
import { FormField } from "@/components/ui/form/elements/form-field";
import { FormLabel } from "@/components/ui/form/elements/form-label";
import { FormMessage } from "@/components/ui/form/elements/form-message";

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

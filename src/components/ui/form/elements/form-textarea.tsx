// src/shared/components/ui/form/textarea.tsx
import { TextareaHTMLAttributes } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

type BaseProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "value" | "onChange">;

export type FormTextareaProps<TFieldValues extends FieldValues> = BaseProps & {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  title?: string;
  helperText?: string;
};

export function FormTextarea<TFieldValues extends FieldValues>({
  control,
  name,
  title,
  helperText,
  className,
  id,
  ...props
}: FormTextareaProps<TFieldValues>) {
  const inputId = id ?? String(name);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const length = typeof field.value === "string" ? field.value.length : 0;
        const max = props.maxLength ?? undefined;

        return (
          <div className="space-y-1">
            {title && (
              <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
                {title}
              </label>
            )}

            <textarea
              id={inputId}
              {...props}
              {...field}
              className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${className ?? ""}`}
            />

            {/* Contador opcional si hay maxLength */}
            {typeof max === "number" && (
              <p className="mt-1 text-xs text-gray-500">{max - length} caracteres restantes</p>
            )}

            {/* Error */}
            {fieldState.error?.message && (
              <p className="text-xs text-red-600">{fieldState.error.message}</p>
            )}

            {helperText && !fieldState.error?.message && (
              <p className="text-xs text-gray-500">{helperText}</p>
            )}
          </div>
        );
      }}
    />
  );
}

import { FC, ChangeEvent, TextareaHTMLAttributes } from "react";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const FormTextarea: FC<FormTextareaProps> = ({ value, onChange, ...props }) => {
  return (
    <textarea
      {...props}
      value={value}
      className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${props.className}`}
      onChange={onChange}
    />
  );
};

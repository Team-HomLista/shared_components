import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@shared/components/ui/select";
import { FC } from "react";

export interface FilterSelectProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  label?: string;
  disabled?: boolean;
}

export const FilterSelect: FC<FilterSelectProps> = ({
  value,
  onChange,
  placeholder = "Seleccionar...",
  className,
  options,
  label,
  disabled
}) => {
  return (
    <div className={className}>
      {label && <label className="mb-1 block text-sm font-medium">{label}</label>}
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        {" "}
        {/* Apply disabled prop */}
        <SelectTrigger className="w-full py-2">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

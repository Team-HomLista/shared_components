import { FC } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface LabeledSelectProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  options: { value: string; label: string }[];
  className?: string;
}

export const LabeledSelect: FC<LabeledSelectProps> = ({
  label,
  placeholder,
  value,
  onChange,
  options,
  className = ""
}) => (
  <div>
    <label>{label}</label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={className + " w-full"}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

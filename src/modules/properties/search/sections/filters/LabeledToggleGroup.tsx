import { FC } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface LabeledToggleGroupProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  options: { value: string; label: string }[];
  className?: string;
}

export const LabeledToggleGroup: FC<LabeledToggleGroupProps> = ({
  label,
  value,
  onChange,
  options,
  className = ""
}) => (
  <div>
    <label>{label}</label>
    <ToggleGroup type="single" value={value} className={className} onValueChange={onChange}>
      {options.map((opt) => (
        <ToggleGroupItem key={opt.value} value={opt.value}>
          {opt.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  </div>
);

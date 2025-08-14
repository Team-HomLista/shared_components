import { Input } from "@shared/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@shared/components/ui/select";
import { FC } from "react";

interface DimensionInputProps {
  label: string;
  value?: string;
  onValueChange?: (value: string) => void;
  unit?: string;
  onUnitChange?: (unit: string) => void;
  unitOptions?: { value: string; label: string }[];
  placeholder?: string;
}

export const DimensionInput: FC<DimensionInputProps> = ({
  label,
  value,
  onValueChange,
  unit,
  onUnitChange,
  unitOptions = [
    { value: "m²", label: "m²" },
    { value: "ft²", label: "ft²" }
  ],
  placeholder = unitOptions[0]?.label || "m²"
}) => (
  <div>
    <label>{label}</label>
    <div className="flex w-full flex-row">
      <Input
        className="flex rounded-l-md rounded-r-none border-r-0"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onValueChange && onValueChange(e.target.value)}
      />
      <Select value={unit} onValueChange={onUnitChange}>
        <SelectTrigger className="rounded-l-none rounded-r-md">
          <SelectValue placeholder={"m²"}>
            {unit || (
              <>
                {"m"}
                <sup>2</sup>
              </>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {unitOptions.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </div>
);

"use client";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  date?: Date;
  formatDate?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onSelect: (date?: Date) => void;
}

export function DatePicker({
  date,
  formatDate = "PP",
  placeholder,
  className,
  disabled,
  onSelect
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, formatDate, { locale: es })
          ) : (
            <span>{placeholder || "Pick a date"}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          autoFocus
          locale={es}
          initialFocus
          disabled={disabled}
          showOutsideDays
          onSelect={onSelect}
        />
      </PopoverContent>
    </Popover>
  );
}

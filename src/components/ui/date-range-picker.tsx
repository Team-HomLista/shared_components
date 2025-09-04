"use client";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, X } from "lucide-react";
import type { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DateRangePickerProps {
  date?: DateRange;
  formatDate?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  onSelect: (range?: DateRange) => void;
}

export function DateRangePicker({
  date,
  formatDate = "PP",
  className,
  disabled,
  placeholder = "Seleccione una fecha o rango de fechas",
  onSelect
}: DateRangePickerProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn("justify-between text-left font-normal", {
              "text-muted-foreground": !date,
              "cursor-not-allowed opacity-50": disabled,
              "pr-1!": date?.from
            })}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />

            <span className="flex-1">
              {date?.from ? (
                !date?.to || date?.to?.toISOString() === date?.from?.toISOString() ? (
                  format(date.from, formatDate, { locale: es })
                ) : (
                  <>
                    {format(date.from, formatDate, { locale: es })} -{" "}
                    {format(date.to, formatDate, { locale: es })}
                  </>
                )
              ) : (
                <span className="text-muted-foreground">{placeholder}</span>
              )}
            </span>

            {date?.from && (
              <div
                className="hover:bg-accent text-foreground flex size-6 items-center justify-center rounded-md"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onSelect(undefined);
                }}
              >
                <X />
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            autoFocus
            locale={es}
            defaultMonth={date?.from}
            captionLayout="dropdown"
            selected={date}
            numberOfMonths={2}
            onSelect={onSelect}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

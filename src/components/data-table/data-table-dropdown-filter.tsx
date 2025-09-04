import { Table } from "@tanstack/react-table";
import { format, parse } from "date-fns";
import { Settings2 } from "lucide-react";
import { ReactNode, useEffect, useId, useState } from "react";
import { DateRange } from "react-day-picker";

import {
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem
} from "@/components/ui";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { useDebounce } from "@/hooks/use-debounce";

export const DataTableDropdownFilter = <TData,>({ table }: { table: Table<TData> }) => {
  const columnFilters = table
    .getAllColumns()
    .filter((column) => column.getCanFilter() && column.columnDef.meta?.filter);

  if (!columnFilters.length) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Settings2 className="h-4 w-4" /> Filtros
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel className="flex items-center justify-between gap-4">
          <span>Filtrar por:</span>
          <Button variant="secondary" size="xs" onClick={() => table.resetColumnFilters()}>
            <span>Limpiar filtros</span>
          </Button>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        {columnFilters.map((column) => {
          const columnDef = column.columnDef;
          const key = column.id;
          const filter = columnDef.meta!.filter;
          const filterValues = column.getFilterValue() as any | undefined;

          return (
            <DropdownMenuSub key={key}>
              <DropdownMenuSubTrigger>{filter.label}</DropdownMenuSubTrigger>

              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {filter.type === "text" && (
                    <DropdownMenuTextFilter
                      value={filterValues ?? ""}
                      onChange={(value) => {
                        if (value) return column.setFilterValue(value);
                        return column.setFilterValue(undefined);
                      }}
                    />
                  )}

                  {filter.type === "checkbox" && (
                    <DropdownMenuCheckboxFilter
                      options={filter.options}
                      selectedOptions={filterValues}
                      onSelectAll={() => {
                        column.setFilterValue(filter.options.map((option) => option.value));
                      }}
                      onUnselectAll={() => column.setFilterValue(undefined)}
                      onCheckedChange={(isChecked, option) => {
                        column?.setFilterValue((prevValue = []) => {
                          if (isChecked) {
                            return [...prevValue, option.value];
                          }

                          return prevValue.filter((value) => value !== option.value);
                        });
                      }}
                    />
                  )}

                  {filter.type === "radio" && (
                    <DropdownMenuRadioFilter
                      options={filter.options}
                      value={filterValues?.[0]}
                      onValueChange={(value) => {
                        column.setFilterValue(value === undefined ? undefined : [value]);
                      }}
                    />
                  )}

                  {filter.type === "date" && (
                    <DropdownMenuDateFilter
                      date={filterValues}
                      onDateChange={(date) => column.setFilterValue(date)}
                    />
                  )}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const DropdownMenuTextFilter = ({
  value: initialValue,
  onChange
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const [value, setValue] = useState(initialValue);
  const debouncedInputValue = useDebounce(value);

  useEffect(() => {
    onChange(debouncedInputValue);
  }, [debouncedInputValue]);

  return (
    <DropdownMenuLabel>
      <Input autoFocus defaultValue={value} onChange={(e) => setValue(e.target.value)} />
    </DropdownMenuLabel>
  );
};

export const DropdownMenuCheckboxFilter = ({
  options,
  selectedOptions,
  onSelectAll,
  onUnselectAll,
  onCheckedChange
}: {
  options: { label: ReactNode; value: string }[];
  selectedOptions: string[] | undefined;
  onSelectAll: () => void;
  onUnselectAll: () => void;
  onCheckedChange: (isChecked: boolean, option: { label: ReactNode; value: string }) => void;
}) => {
  const id = useId();

  const isOptionChecked = (option: { label: ReactNode; value: string }) =>
    selectedOptions?.includes(option.value) ?? false;

  return (
    <>
      <DropdownMenuItem
        onSelect={(e) => {
          e.preventDefault();
        }}
      >
        <Checkbox
          id={`${id}-ALL_OPTIONS`}
          className="[&_svg:not([class*='text-'])]:text-primary-foreground"
          checked={
            selectedOptions?.length === options.length
              ? true
              : selectedOptions?.length
                ? "indeterminate"
                : false
          }
          onCheckedChange={(isChecked) => {
            if (isChecked && selectedOptions?.length) {
              return onUnselectAll();
            }

            if (!isChecked) {
              return onUnselectAll();
            }

            onSelectAll();
          }}
        />

        <Label className="w-full" htmlFor={`${id}-ALL_OPTIONS`}>
          {selectedOptions?.length ? (
            selectedOptions?.length === options.length ? (
              <span>Limpiar Todos</span>
            ) : (
              <span>Limpiar ({selectedOptions?.length})</span>
            )
          ) : (
            <span>Seleccionar todos</span>
          )}
        </Label>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      {options.map((option) => (
        <DropdownMenuItem
          key={option.value}
          onSelect={(e) => {
            onCheckedChange(!isOptionChecked(option), option);
            e.preventDefault();
          }}
        >
          <Checkbox
            id={`${id}-${option.value}`}
            className="[&_svg:not([class*='text-'])]:text-primary-foreground"
            checked={isOptionChecked(option)}
            onCheckedChange={(isChecked) => onCheckedChange(!!isChecked, option)}
          />

          <Label className="w-full" htmlFor={`${id}-${option.value}`}>
            {option.label}
          </Label>
        </DropdownMenuItem>
      ))}
    </>
  );
};

export const DropdownMenuRadioFilter = ({
  options,
  value,
  onValueChange
}: {
  options: { label: ReactNode; value: string }[];
  value: string | undefined;
  onValueChange: (value: string | undefined) => void;
}) => {
  const id = useId();

  const handleValueChange = (newValue: string) => {
    onValueChange(newValue === value ? undefined : newValue);
  };

  return (
    <RadioGroup className="gap-0" value={value ?? null} onValueChange={handleValueChange}>
      {options.map((option) => (
        <DropdownMenuItem
          key={option.value}
          onSelect={(e) => {
            handleValueChange(option.value);
            e.preventDefault();
          }}
        >
          <RadioGroupItem
            id={`${id}-${option.value}`}
            className="[&_svg:not([class*='text-'])]:text-primary-foreground"
            value={option.value}
            checked={value === option.value}
          />

          <Label className="w-full">{option.label}</Label>
        </DropdownMenuItem>
      ))}
    </RadioGroup>
  );
};

export const DropdownMenuDateFilter = ({
  date,
  onDateChange
}: {
  date?: string[];
  onDateChange: (date: string[] | undefined) => void;
}) => {
  const [startDateStr, endDateStr] = date ?? [];
  const startDate = startDateStr ? parse(startDateStr, "yyyy-MM-dd", new Date()) : undefined;
  const endDate = endDateStr ? parse(endDateStr, "yyyy-MM-dd", new Date()) : undefined;

  const onDateRangeChange = (date: DateRange | undefined) => {
    if (!date) {
      onDateChange(undefined);
      return;
    }
    const startDate = date.from ? format(date.from, "yyyy-MM-dd") : undefined;
    const endDate = date.to ? format(date.to, "yyyy-MM-dd") : undefined;

    if (!startDate && !endDate) {
      return onDateChange(undefined);
    }

    if (startDate === endDate) {
      return onDateChange([startDate!]);
    }

    onDateChange([startDate!, endDate!]);
  };

  return (
    <>
      <DropdownMenuLabel className="flex items-center gap-2">
        <DateRangePicker
          className="w-full"
          date={{ from: startDate, to: endDate }}
          onSelect={onDateRangeChange}
        />
      </DropdownMenuLabel>
    </>
  );
};

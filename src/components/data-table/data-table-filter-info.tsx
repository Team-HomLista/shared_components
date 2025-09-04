import { Column, Table } from "@tanstack/react-table";
import { format, parse } from "date-fns";
import { es } from "date-fns/locale";
import { ChevronDown } from "lucide-react";
import React, { ReactNode } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Separator,
  Tag,
  TagCloseButton,
  TagCount
} from "@/components/ui";

import {
  DropdownMenuCheckboxFilter,
  DropdownMenuDateFilter,
  DropdownMenuRadioFilter
} from "./data-table-dropdown-filter";

export const DataTableFilterInfo = <TData,>({ table }: { table: Table<TData> }) => {
  const columnFilters = table
    .getAllColumns()
    .filter((column) => column.getCanFilter() && column.columnDef.meta?.filter);

  return (
    <>
      {columnFilters.map((column) => {
        const columnDef = column.columnDef;
        const key = column.id;
        const filter = columnDef.meta?.filter;
        const filterType = filter?.type;

        if (filterType === "checkbox") {
          return <CheckboxFilterTag key={key} columnFilter={column} />;
        }

        if (filterType === "radio") {
          return <RadioFilterTag key={key} columnFilter={column} />;
        }

        if (filterType === "date") {
          return <DateFilterTag key={key} columnFilter={column} />;
        }

        const filterValue = column.getFilterValue() as string;

        if (filterValue === undefined) return null;

        return (
          <FilterTag
            key={key}
            label={filter?.label ?? "-"}
            selectedFilters={[filterValue]}
            onRemove={() => column.setFilterValue(undefined)}
          />
        );
      })}
    </>
  );
};

const CheckboxFilterTag = <TData,>({ columnFilter }: { columnFilter: Column<TData> }) => {
  const columnDef = columnFilter.columnDef;
  const filter = columnDef.meta?.filter;
  const filterValues = columnFilter.getFilterValue() as string[] | undefined;

  if (filter?.type !== "checkbox") return null;
  if (!filterValues) return null;

  const filterOptions = filter.options;
  const filterLabels = Object.fromEntries(
    filterOptions?.map((option) => [option.value, option.label]) ?? []
  );
  const selectedFilters = filterValues?.map((value) => filterLabels[value]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FilterTag
          label={filter?.label ?? "-"}
          selectedFilters={selectedFilters}
          onRemove={() => columnFilter.setFilterValue(undefined)}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="min-w-[var(--radix-dropdown-menu-trigger-width)]"
        align="start"
      >
        <DropdownMenuCheckboxFilter
          options={filterOptions!}
          selectedOptions={filterValues}
          onSelectAll={() =>
            columnFilter.setFilterValue(filterOptions?.map((option) => option.value))
          }
          onUnselectAll={() => columnFilter.setFilterValue(undefined)}
          onCheckedChange={(isChecked, option) => {
            columnFilter?.setFilterValue((prevValue = []) => {
              if (isChecked) {
                return [...prevValue, option.value];
              }

              return prevValue.filter((value) => value !== option.value);
            });
          }}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const RadioFilterTag = <TData,>({ columnFilter }: { columnFilter: Column<TData> }) => {
  const columnDef = columnFilter.columnDef;
  const filter = columnDef.meta?.filter;
  const filterValues = columnFilter.getFilterValue() as string[] | undefined;

  if (filter?.type !== "radio") return null;
  if (!filterValues) return null;

  const filterValue = filterValues?.[0];
  const filterOptions = filter.options;
  const filterLabels = Object.fromEntries(
    filterOptions?.map((option) => [option.value, option.label]) ?? []
  );
  const selectedFilter = filterValue && filterLabels[filterValue];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FilterTag
          label={filter?.label ?? "-"}
          selectedFilters={[selectedFilter]}
          onRemove={() => columnFilter.setFilterValue(undefined)}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="min-w-[var(--radix-dropdown-menu-trigger-width)]"
        align="start"
      >
        <DropdownMenuRadioFilter
          options={filterOptions!}
          value={filterValue}
          onValueChange={(value) =>
            columnFilter.setFilterValue(value === undefined ? undefined : value)
          }
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DateFilterTag = <TData,>({ columnFilter }: { columnFilter: Column<TData> }) => {
  const columnDef = columnFilter.columnDef;
  const filter = columnDef.meta?.filter;
  const filterValues = columnFilter.getFilterValue() as string[] | undefined;

  if (filter?.type !== "date") return null;

  const formatDate = filter?.formatDate ?? "PP";

  if (!filterValues) return null;

  const selectedFilters = filterValues.map((value) => {
    const date = parse(value, "yyyy-MM-dd", new Date());
    return format(date, formatDate, { locale: es });
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FilterTag
          label={filter?.label ?? "-"}
          showMax={2}
          separator="al"
          selectedFilters={selectedFilters}
          onRemove={() => columnFilter.setFilterValue(undefined)}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="min-w-[var(--radix-dropdown-menu-trigger-width)]"
        align="start"
      >
        <DropdownMenuDateFilter
          date={columnFilter.getFilterValue() as string[]}
          onDateChange={(date) => columnFilter.setFilterValue(date)}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const SelectedFilterTag = ({ label }: { label: ReactNode }) => {
  if (typeof label === "string") return <TagCount className="text-foreground">{label}</TagCount>;
  return label;
};

const FilterTag = ({
  label,
  selectedFilters,
  showMax = 1,
  separator,
  onRemove
}: {
  label: string;
  separator?: string;
  showMax?: number;
  selectedFilters: ReactNode[];
  onRemove: () => void;
}) => {
  const hasMoreThatMax = selectedFilters.length > showMax;

  return (
    <Tag className="text-muted-foreground" variant="outline" size="md">
      <span>{label}:</span>
      <span className="flex items-center gap-1">
        {!hasMoreThatMax &&
          selectedFilters.map((filterLabel, index) => (
            <React.Fragment key={index}>
              <SelectedFilterTag label={filterLabel} />
              {selectedFilters.length > 1 && index < selectedFilters.length - 1 && separator && (
                <span>{separator}</span>
              )}
            </React.Fragment>
          ))}

        {hasMoreThatMax && (
          <TagCount className="text-foreground pointer-events-none">
            +{selectedFilters.length}
          </TagCount>
        )}
      </span>

      <span>
        <ChevronDown className="size-4" />
      </span>

      <Separator className="min-h-4" decorative orientation="vertical" />

      <TagCloseButton
        as="span"
        onPointerDown={(e: any) => {
          /* Prevent to open the dropdown menu */
          e.preventDefault();
          e.stopPropagation();
        }}
        onClick={onRemove}
      />
    </Tag>
  );
};

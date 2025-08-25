import { Button, Input } from "@shared/components/ui";
import { Table, TableMeta } from "@tanstack/react-table";
import { SearchIcon, XIcon } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

import { useDebounce } from "@/hooks/use-debounce";
import { ActionItem } from "@/types/data-table";

import { DataTableDropdownFilter } from "./data-table-dropdown-filter";
import { DataTableFilterInfo } from "./data-table-filter-info";

export interface DataTableToolbarProps<TData extends Record<string, any>> {
  table: Table<TData>;
  countLabel?: (meta: TableMeta<TData>) => ReactNode;
  actions?: Array<ActionItem>;
}

export function DataTableToolbar<TData extends Record<string, any>>({
  table,
  countLabel: _countLabel,
  actions
}: DataTableToolbarProps<TData>) {
  const { search: initialSearch } = table.getState();
  const [search, setSearch] = useState(initialSearch);
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    table.setSearch(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <SearchIcon className="text-muted-foreground absolute top-1/2 left-2 size-4 -translate-y-1/2" />

            <Input
              placeholder="Buscar"
              value={search ?? null}
              className="w-64 px-8 lg:w-80"
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <XIcon
                className="text-muted-foreground absolute top-1/2 right-2 size-4 -translate-y-1/2 cursor-pointer"
                onClick={() => setSearch("")}
              />
            )}
          </div>

          <DataTableDropdownFilter table={table} />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {actions?.map((action, index) => (
            <Button key={index} onClick={action.onClick}>
              {action.icon && <action.icon className="h-4 w-4" />}
              {action.label}
            </Button>
          ))}
        </div>
      </div>

      {(table.getState().columnFilters?.length ?? 0) > 0 && (
        <div className="bg-muted/60 flex flex-col items-end justify-between rounded-md md:flex-row md:items-center">
          <div className="flex max-h-18 flex-1 flex-wrap items-center gap-1 overflow-y-auto px-2 py-2">
            <DataTableFilterInfo table={table} />
          </div>

          <Button variant="ghost" onClick={() => table.resetColumnFilters()}>
            Limpiar todos
          </Button>
        </div>
      )}
    </div>
  );
}

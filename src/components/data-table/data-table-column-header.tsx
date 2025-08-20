"use client";

import { Button } from "@shared/components/ui/button";
import { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

interface DataTableColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>;
  children: React.ReactNode;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  children
}: DataTableColumnHeaderProps<TData, TValue>) {
  const sortOrder = column.getIsSorted();
  const isEnableSorting = column.getCanSort();

  if (!isEnableSorting) return children;

  return (
    <div className="flex items-center gap-1">
      {children}

      <Button
        variant={sortOrder ? "secondary" : "ghost"}
        size="iconXs"
        onClick={() =>
          column.toggleSorting(
            sortOrder === "asc" ? true : sortOrder === "desc" ? undefined : false,
            true
          )
        }
      >
        {!sortOrder && <ArrowUpDown />}
        {sortOrder === "asc" && <ArrowDown />}
        {sortOrder === "desc" && <ArrowUp />}
      </Button>
    </div>
  );
}

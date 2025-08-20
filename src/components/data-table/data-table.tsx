import { Table, TableMeta } from "@tanstack/react-table";
import { ReactNode } from "react";

import { ActionItem } from "@/types/data-table";

import { DataTableContent } from "./data-table-content";
import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";

export interface DataTableProps<TData extends Record<string, any>> {
  table: Table<TData>;
  emptyData?: {
    title: string;
    description: string | ReactNode;
    action?: {
      label: string;
      onClick: () => void;
    };
  };
  countLabel?: (meta: TableMeta<TData>) => ReactNode;
  actions?: Array<ActionItem>;
}

export function DataTable<TData extends Record<string, any>>({
  table,
  emptyData,
  countLabel,
  actions
}: DataTableProps<TData>) {
  return (
    <div className="flex w-full flex-col gap-4">
      <DataTableToolbar table={table} countLabel={countLabel} actions={actions} />

      <DataTableContent table={table} emptyData={emptyData} />

      <DataTablePagination table={table} />
    </div>
  );
}

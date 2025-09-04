"use client";

import type { Table as ReactTable } from "@tanstack/react-table";
import type { ReactNode } from "react";

import { Table } from "@/components/ui/table";

import { DataTableBody } from "./data-table-body";
import { DataTableHeader } from "./data-table-header";

interface DataTableContentProps<TData> {
  table: ReactTable<TData>;
  emptyData?: {
    title: string;
    description: string | ReactNode;
    action?: {
      label: string;
      onClick: () => void;
    };
  };
}

export function DataTableContent<TData>({ table, emptyData }: DataTableContentProps<TData>) {
  const { isLoading } = table.getState();

  return (
    <div className="rounded-md border">
      <Table>
        <DataTableHeader table={table} />
        <DataTableBody table={table} isLoading={isLoading} emptyData={emptyData} />
      </Table>
    </div>
  );
}

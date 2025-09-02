"use client";

import { flexRender, type Table } from "@tanstack/react-table";

import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { DataTableColumnHeader } from "./data-table-column-header";

interface DataTableHeaderProps<TData> {
  table: Table<TData>;
}

export function DataTableHeader<TData>({ table }: DataTableHeaderProps<TData>) {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead
                key={header.id}
                style={{
                  width: header.getSize(),
                  maxWidth: table.getColumn(header.id)?.columnDef?.maxSize
                }}
              >
                {header.isPlaceholder ? null : (
                  <DataTableColumnHeader column={header.column}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </DataTableColumnHeader>
                )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
}

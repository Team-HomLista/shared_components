"use client";

import { flexRender, type Table as ReactTable } from "@tanstack/react-table";
import type { ReactNode } from "react";

import { Skeleton } from "@/components/ui";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";

import { DataTableEmptyState } from "./data-table-empty-state";

interface DataTableBodyProps<TData> {
  table: ReactTable<TData>;
  isLoading: boolean;
  emptyData?: {
    title: string;
    description: string | ReactNode;
    action?: {
      label: string;
      onClick: () => void;
    };
  };
}

export function DataTableBody<TData>({ table, isLoading, emptyData }: DataTableBodyProps<TData>) {
  const colSpan = table.getVisibleLeafColumns().length;
  const rows = table.getRowModel().rows;
  const pegeSize = table.getState().pagination?.pageSize ?? 10;

  if (rows?.length === 0) {
    return (
      <TableBody>
        <DataTableEmptyState colSpan={colSpan} emptyData={emptyData} />
      </TableBody>
    );
  }

  return (
    <TableBody>
      {rows?.map((row) => (
        <TableRow
          key={row.id}
          data-state={row.getIsSelected() && "selected"}
          className={row.index % 2 === 0 ? "bg-background" : "bg-muted/50"} // Zebra style
        >
          {row.getVisibleCells().map((cell) => (
            <TableCell
              key={cell.id}
              className="h-10 py-0"
              style={{
                maxWidth: table.getColumn(cell.column.id)?.columnDef.maxSize
              }}
            >
              {isLoading ? (
                <Skeleton className="h-4 w-full" />
              ) : (
                flexRender(cell.column.columnDef.cell, cell.getContext())
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}

      {rows.length < pegeSize &&
        Array.from({ length: pegeSize - rows.length }).map((_, index) => (
          <TableRow
            key={`empty-${index}`}
            className={index % 2 === rows.length % 2 ? "bg-background" : "bg-muted/50"} // Zebra style
          >
            {Array.from({ length: colSpan }).map((_, index) => (
              <TableCell key={`empty-cell-${index}`} className="h-10" />
            ))}
          </TableRow>
        ))}
    </TableBody>
  );
}

"use client";

import { Table } from "@tanstack/react-table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { DataTablePaginationControls } from "./data-table-pagination-controls";
import { DataTablePaginationInfo } from "./data-table-pagination-info";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  const { isLoading } = table.getState();

  const pageNumber = (table.getState().pagination?.pageIndex ?? 0) + 1;
  const pageSize = table.getState().pagination?.pageSize ?? 0;
  const rowCount = table.getRowCount();
  const lastPage = Math.ceil(rowCount / pageSize);

  return (
    <div className="flex items-center justify-end px-2">
      <DataTablePaginationInfo
        rowCount={rowCount}
        pageNumber={pageNumber}
        pageSize={pageSize}
        isLoading={isLoading}
      />
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Filas por página</p>
          <Select
            value={`${pageSize}`}
            disabled={isLoading}
            onValueChange={(value: any) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((size) => (
                <SelectItem key={size} value={`${size}`}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium whitespace-nowrap">
          Página {pageNumber} de {lastPage}
        </div>
        <DataTablePaginationControls
          isLoading={isLoading}
          canPreviousPage={pageNumber > 1}
          canNextPage={pageNumber < lastPage}
          onPreviousPage={table.previousPage}
          onNextPage={table.nextPage}
          onFirstPage={table.firstPage}
          onLastPage={table.lastPage}
        />
      </div>
    </div>
  );
}

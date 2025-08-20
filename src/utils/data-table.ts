import { TableColumnDef } from "@/types/data-table";

export function isColumnIdString(columnId: any): columnId is string {
  return typeof columnId === "string";
}

export function getColumnIdByAccessorKey<TData, TValue>(
  columns: TableColumnDef<TData, TValue>[],
  accessorKey: string
): string | undefined {
  for (const column of columns) {
    if (column.accessorKey === accessorKey) {
      return column.id;
    }
  }

  return undefined;
}

export function getAccessorKeyByColumnId<TData, TValue>(
  columns: TableColumnDef<TData, TValue>[],
  columnId: string
): string | undefined {
  for (const column of columns) {
    if (column.id === columnId) {
      return column.accessorKey as string;
    }
  }

  return undefined;
}

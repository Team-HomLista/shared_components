"use client";

import type { Row } from "@tanstack/react-table";

import { DataTableActionButton } from "@/components/data-table/data-table-action-button";

import { Action } from "./data-table-row-actions";

interface DataTableRowActionsButtonsProps<TData> {
  row: Row<TData>;
  actions: Array<Action<TData>>;
  showLabels?: boolean;
}

export function DataTableRowActionsButtons<TData>({
  row,
  actions
}: DataTableRowActionsButtonsProps<TData>) {
  return (
    <div className="flex items-center gap-1">
      {actions.map((action, index) => (
        <DataTableActionButton
          key={index}
          icon={action.icon}
          label={action.label}
          variant="ghost"
          onClick={() => action.onClick(row.original)}
        />
      ))}
    </div>
  );
}

"use client";

import type { Row } from "@tanstack/react-table";
import { LucideIcon } from "lucide-react";

import { DataTableRowActionsButtons } from "./data-table-row-actions-buttons";
import { DataTableRowActionsDropdown } from "./data-table-row-actions-dropdown";

export type Action<TData> = {
  label: string;
  icon?: LucideIcon;
  onClick: (data: TData) => void;
};

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  actionsMode?: "buttons" | "dropdown";
  showLabels?: boolean;
  actions: Array<Action<TData>>;
}

export function DataTableRowActions<TData>({
  row,
  actionsMode = "buttons",
  showLabels = false,
  actions
}: DataTableRowActionsProps<TData>) {
  if (actionsMode === "dropdown") {
    return (
      <div className="flex items-center justify-end gap-2">
        <DataTableRowActionsDropdown row={row} actions={actions} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <DataTableRowActionsButtons row={row} showLabels={showLabels} actions={actions} />
    </div>
  );
}

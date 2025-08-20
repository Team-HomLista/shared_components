import { ActionItem } from "@/types/data-table";

import { DataTableActionButton } from "./data-table-action-button";

export const DataTableActions = ({ actions }: { actions: Array<ActionItem> }) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center space-x-2">
        {actions.map((action) => (
          <DataTableActionButton
            key={action.label}
            icon={action.icon}
            label={action.label}
            variant="default"
            onClick={action.onClick}
          />
        ))}
      </div>
    </div>
  );
};

import { OnChangeFn, RowData, Updater } from "@tanstack/react-table";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type TableColumnFilter =
  | {
      type: "text";
      label: string;
    }
  | {
      type: "date";
      label: string;
      formatDate?: string;
    }
  | {
      type: "checkbox" | "radio";
      label: string;
      options: { label: ReactNode; value: string }[];
    };

export interface TableResponse<T> {
  data: T[];
  total: number;
  last_page: number;
  current_page: number;
  per_page: number;
}

export interface UseDataTableProps {
  routeName: string;
  dataKey: string;
  filtersKey: string;
  statusOptionsKey?: string;
  dateFilterOptionsKey?: string;
  debounceMs?: number;
}

export interface FilterOption {
  value: string;
  label: string;
}

export type RowActionItem<T> = {
  label: string;
  isDestructive?: true;
  onClick: (data: T) => void;
  icon?: LucideIcon;
};

export type ActionItem = {
  label: string;
  icon: LucideIcon;
  isDestructive?: boolean;
  onClick: () => void;
};

export interface LoadingTableState {
  isLoading: boolean;
}

export type SearchState = string;

export interface SearchTableState {
  search: SearchState;
}

export interface SearchOptions {
  enableSearch?: boolean;
  onSearchChange?: OnChangeFn<SearchState>;
}

export interface SearchInstance {
  setSearch: (updater: Updater<SearchState>) => void;
}

declare module "@tanstack/react-table" {
  interface TableState extends LoadingTableState, SearchTableState {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
  interface TableOptionsResolved<TData extends RowData> extends SearchOptions {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
  interface Table<TData extends RowData> extends SearchInstance {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue = unknown> {
    filter: TableColumnFilter;
  }
}

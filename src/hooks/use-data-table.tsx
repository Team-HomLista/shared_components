import {
  ColumnDef,
  ColumnFiltersState,
  functionalUpdate,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  makeStateUpdater,
  OnChangeFn,
  PaginationState,
  RowData,
  SortingState,
  Table,
  TableFeature,
  Updater,
  useReactTable
} from "@tanstack/react-table";

import { SearchOptions, SearchState, SearchTableState } from "@/types/data-table";

type UseDataTableProps<TData> = {
  data: TData[];
  total?: number;
  columns: ColumnDef<TData, any>[];
  isLoading?: boolean;
  search?: SearchState;
  pagination?: PaginationState;
  sorting?: SortingState;
  columnFilters?: ColumnFiltersState;
  onSearchChange?: OnChangeFn<SearchState>;
  onPaginationChange?: OnChangeFn<PaginationState>;
  onSortingChange?: OnChangeFn<SortingState>;
  onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;
};

export function useDataTable<TData>({
  data,
  total,
  columns,
  isLoading = false,
  search,
  pagination,
  sorting,
  columnFilters,
  onSearchChange,
  onPaginationChange,
  onSortingChange,
  onColumnFiltersChange
}: UseDataTableProps<TData>) {
  const rowCount = total ?? data.length;

  return useReactTable({
    _features: [SearchFeature],
    data,
    rowCount,
    columns,
    enableMultiSort: true,
    isMultiSortEvent: () => true,
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      isLoading,
      search,
      pagination,
      sorting,
      columnFilters
    },
    onSearchChange,
    onPaginationChange,
    onSortingChange,
    onColumnFiltersChange
  });
}

export const SearchFeature: TableFeature<any> = {
  getInitialState: (state): SearchTableState => {
    return {
      search: "",
      ...state
    };
  },

  getDefaultOptions: <TData extends RowData>(table: Table<TData>): SearchOptions => {
    return {
      enableSearch: true,
      onSearchChange: makeStateUpdater("search", table)
    } as SearchOptions;
  },

  createTable: <TData extends RowData>(table: Table<TData>): void => {
    table.setSearch = (updater) => {
      const safeUpdater: Updater<SearchState> = (old) => {
        const newState = functionalUpdate(updater, old);
        return newState;
      };
      return table.options.onSearchChange?.(safeUpdater);
    };
  }
};

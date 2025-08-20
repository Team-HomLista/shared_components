import { ColumnDef, ColumnFiltersState } from "@tanstack/react-table";
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";

const FILTER_KEY = "filter";
const parseByFilterType = {
  text: parseAsString,
  radio: parseAsString,
  checkbox: parseAsArrayOf(parseAsString),
  date: parseAsArrayOf(parseAsString)
};

export function useColumnFiltersQueryParams<TData, TValue = unknown>({
  columns
}: {
  columns: ColumnDef<TData, TValue>[];
}) {
  const columnsWithFilter = columns.filter((column) => column.meta?.filter);
  const parsers = Object.fromEntries(
    columnsWithFilter.map((column) => [
      column.id ?? (column as any).accessorKey,
      parseByFilterType[column.meta?.filter.type ?? "text"]
    ])
  );
  const urlKeys = Object.fromEntries(
    columnsWithFilter.map((column) => {
      const id = column.id ?? (column as any).accessorKey;
      return [id, `${FILTER_KEY}[${id}]`];
    })
  );

  const [filters, setFilters] = useQueryStates(parsers, { urlKeys });

  const columnFilers = Object.entries(filters)
    .map(([id, value]) => ({
      id,
      value
    }))
    .filter((column) => column.value !== null);

  const setColumnFilters = (
    valueResolver: ColumnFiltersState | ((old: ColumnFiltersState) => ColumnFiltersState)
  ) => {
    const columnFilterResolved =
      typeof valueResolver === "function" ? valueResolver(columnFilers) : valueResolver;
    const columnFilterResolvedMap = new Map(
      columnFilterResolved.map(({ id, value }) => [id, value])
    );
    const filtersResolved = Object.fromEntries(
      Object.keys(filters).map((key) => [key, columnFilterResolvedMap.get(key) ?? null])
    );

    setFilters(filtersResolved);
  };

  return [columnFilers, setColumnFilters] as const;
}

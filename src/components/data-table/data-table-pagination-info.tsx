interface DataTablePaginationInfoProps {
  rowCount: number;
  pageNumber: number;
  pageSize: number;
  isLoading?: boolean;
}

export function DataTablePaginationInfo({
  rowCount,
  pageNumber,
  pageSize,
  isLoading
}: DataTablePaginationInfoProps) {
  const firstItem = rowCount === 0 ? 0 : (pageNumber - 1) * pageSize + 1;
  const lastItem = Math.min(pageNumber * pageSize, rowCount);

  return (
    <div className="text-muted-foreground flex-1 text-sm">
      {isLoading ? (
        <span>Cargando...</span>
      ) : (
        <span>
          Mostrando {firstItem} - {lastItem} de {rowCount}{" "}
          {rowCount === 1 ? "resultado" : "resultados"}.
        </span>
      )}
    </div>
  );
}

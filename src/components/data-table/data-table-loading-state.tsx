import { LoadingSpinner } from "@shared/components/ui/loading-spinner";
import { TableCell, TableRow } from "@shared/components/ui/table";

interface DataTableLoadingStateProps {
  colSpan: number;
  message?: string;
}

export function DataTableLoadingState({ colSpan, message }: DataTableLoadingStateProps) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="h-24 text-center">
        <div className="flex items-center justify-center gap-2">
          <LoadingSpinner className="h-6 w-6" />
          {message ?? "Cargando datos..."}
        </div>
      </TableCell>
    </TableRow>
  );
}

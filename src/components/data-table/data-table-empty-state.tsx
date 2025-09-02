"use client";

import { SearchX } from "lucide-react";
import type { ReactNode } from "react";

import { TableCell, TableRow } from "@/components/ui/table";
import { Text } from "@/components/ui/text";

interface DataTableEmptyStateProps {
  colSpan: number;
  emptyData?: {
    title: string;
    description: string | ReactNode;
    action?: {
      label: string;
      onClick: () => void;
    };
  };
}

export function DataTableEmptyState({ colSpan, emptyData }: DataTableEmptyStateProps) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan}>
        <div className="flex flex-1 place-content-center">
          <div className="sticky right-0 left-0 flex w-sm flex-col items-center justify-center gap-4 overflow-hidden p-8 wrap-break-word whitespace-break-spaces md:w-md lg:w-fit">
            <SearchX className="text-muted-foreground size-12" />

            <div>
              <Text
                as="div"
                variant="title"
                className="flex-1 text-center wrap-break-word whitespace-break-spaces"
              >
                {emptyData?.title ?? "No se encontraron resultados."}
              </Text>

              <Text
                as="div"
                variant="description"
                className="flex-1 text-center wrap-break-word whitespace-break-spaces"
              >
                {emptyData?.description ?? "Intenta ajustar tu búsqueda o filtros."}
              </Text>
            </div>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}

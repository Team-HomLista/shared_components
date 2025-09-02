"use client";

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DataTablePaginationControlsProps {
  isLoading?: boolean;
  canPreviousPage: boolean;
  canNextPage: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onFirstPage?: () => void;
  onLastPage?: () => void;
}

export function DataTablePaginationControls({
  canPreviousPage,
  canNextPage,
  onPreviousPage,
  onNextPage,
  onFirstPage,
  onLastPage,
  isLoading
}: DataTablePaginationControlsProps) {
  return (
    <div className="flex items-center space-x-2">
      {onFirstPage && (
        <Button
          variant="outline"
          className="hidden h-8 w-8 bg-transparent p-0 lg:flex"
          disabled={!canPreviousPage || isLoading}
          onClick={onFirstPage}
        >
          <span className="sr-only">Ir a la primera página</span>
          <ChevronsLeft className="h-4 w-4" />
        </Button>
      )}
      <Button
        variant="outline"
        className="h-8 w-8 bg-transparent p-0"
        disabled={!canPreviousPage || isLoading}
        onClick={onPreviousPage}
      >
        <span className="sr-only">Ir a la página anterior</span>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        className="h-8 w-8 bg-transparent p-0"
        disabled={!canNextPage || isLoading}
        onClick={onNextPage}
      >
        <span className="sr-only">Ir a la página siguiente</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
      {onLastPage && (
        <Button
          variant="outline"
          className="hidden h-8 w-8 bg-transparent p-0 lg:flex"
          disabled={!canNextPage || isLoading}
          onClick={onLastPage}
        >
          <span className="sr-only">Ir a la última página</span>
          <ChevronsRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

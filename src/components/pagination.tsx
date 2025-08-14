"use client";
import { Button } from "@shared/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onClickPrev,
  onClickNext
}) => {
  return (
    <div className="mx-auto flex max-w-[512px] flex-row items-center justify-center gap-2 px-16 py-8">
      <Button
        size="icon"
        className="h-6 w-6"
        onClick={onClickPrev}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <ChevronLeft />
      </Button>
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <div className="bg-primary h-1 flex-1" />
        <span className="text-primary px-4 text-center text-base font-semibold whitespace-nowrap">
          Página {currentPage} de {totalPages}
        </span>
        <div className="bg-primary h-1 flex-1" />
      </div>
      <Button
        size="icon"
        className="h-6 w-6"
        onClick={onClickNext}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

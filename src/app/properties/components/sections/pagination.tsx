"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PropertiesSearchPaginationSectionProps {
  currentPage: number;
  totalPages: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

export const PropertiesSearchPaginationSection: React.FC<
  PropertiesSearchPaginationSectionProps
> = ({ currentPage, totalPages, onClickPrev, onClickNext }) => {
  return (
    <div className="mx-auto flex max-w-[512px] flex-row items-center justify-center gap-2 px-16 py-8">
      <Button
        variant="secondary"
        corner="rounded"
        size="icon"
        className="h-6 w-6"
        onClick={onClickPrev}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <ChevronLeft />
      </Button>
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <div className="bg-secondary h-1 flex-1" />
        <span className="text-secondary px-4 text-center text-base font-bold whitespace-nowrap">
          Página {currentPage} de {totalPages}
        </span>
        <div className="bg-secondary h-1 flex-1" />
      </div>
      <Button
        corner="rounded"
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

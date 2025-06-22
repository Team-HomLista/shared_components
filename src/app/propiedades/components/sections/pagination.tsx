import { Pagination } from "@/components/pagination";

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
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
    />
  );
};

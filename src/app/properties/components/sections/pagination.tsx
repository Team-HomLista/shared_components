export interface PropertiesSearchPaginationSectionProps {

}

export const PropertiesSearchPaginationSection: React.FC<
  PropertiesSearchPaginationSectionProps
> = ({}) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-sm text-gray-700">Showing 1-10 of 100</span>
      </div>
      <div className="flex items-center space-x-2">
        <button className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">
          Previous
        </button>
        <button className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">
          Next
        </button>
      </div>
    </div>
  );
};

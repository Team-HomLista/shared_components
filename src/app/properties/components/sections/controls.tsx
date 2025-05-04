export interface PropertiesSearchControlsSectionProps {}

export const PropertiesSearchControlsSection: React.FC<
  PropertiesSearchControlsSectionProps
> = ({}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">
          Filter
        </button>
        <button className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">
          Sort
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-700">Sort by:</span>
        <select className="rounded border border-gray-300 px-2 py-1 text-sm">
          <option value="price">Price</option>
          <option value="date">Date</option>
        </select>
      </div>
    </div>
  );
};

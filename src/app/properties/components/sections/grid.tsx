import { Property } from "@/types/property";

export interface PropertiesSearchGridSectionProps {
  properties: Array<Property>;
}

export const PropertiesSearchGridSection: React.FC<
  PropertiesSearchGridSectionProps
> = ({ properties }) => {
  return (
    <div className="m-8 my-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <div
          key={property.short_id}
          className="rounded-lg border border-gray-300 bg-white p-4 shadow-md hover:shadow-lg"
        >
          <img
            src={property.cover_image}
            alt={property.title}
            className="mb-4 h-48 w-full rounded-lg object-cover"
          />
          <h2 className="text-lg font-semibold">{property.title}</h2>
          <p className="mt-2 text-gray-600">{property.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-bold">${property.price}</span>
            <button className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

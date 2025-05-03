export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{
    property_type?: string;
    search_type?: string;
    city?: string;
  }>;
}) {
  const { property_type, search_type, city } = await searchParams;

  console.log({ property_type, search_type, city });

  return (
    <div>
      <h1>Properties</h1>
      <p>List of properties</p>
      <p>
        Filters: Type={property_type}, Search={search_type}, City={city}
      </p>
    </div>
  );
}

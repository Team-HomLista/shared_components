import { HomepageContainer } from "./components/container";
import { PropertyService } from "./services/property";

export const revalidate = 86400; // 24 hours

export default async function HomePage() {
  const properties = await PropertyService.getFeaturedProperties();

  return <HomepageContainer properties={properties} />;
}

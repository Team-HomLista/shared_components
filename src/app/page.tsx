import { HomepageContainer } from "@/modules/home/container";
import { getFeaturedProperties } from "@/services/property";

export const revalidate = 86400; // 24 hours

export default async function HomePage() {
  const properties = await getFeaturedProperties();

  return <HomepageContainer properties={properties ?? []} />;
}

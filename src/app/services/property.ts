import { Paginated } from "@/types/paginated";
import { DetailedProperty, Property } from "@/types/property";

interface GetPropertiesBySearchParams {
  search_type?: string;
  property_type?: string;
  city?: string;
}

export class PropertyService {
  static async getPropertiesBySearch(params?: GetPropertiesBySearchParams) {
    "use server";
    const SERVER_URL = process.env.SERVER_URL;
    const HARD_KEY = String(process.env.HARD_KEY);

    const url = new URL(`${SERVER_URL}/properties/search`);

    if (params) {
      if (params.search_type)
        url.searchParams.append("search_type", params.search_type);

      if (params.property_type)
        url.searchParams.append("property_type", params.property_type);

      if (params.city) url.searchParams.append("city", params.city);
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-HARD-KEY": HARD_KEY,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      console.error(
        new Error(
          `PropertyService.getPropertiesBySearch: ${JSON.stringify(errorData)}`,
        ),
      );

      throw errorData;
    }

    return (await response.json()) as Paginated<Property>;
  }

  static async getFeaturedProperties() {
    "use server";
    const SERVER_URL = process.env.SERVER_URL;
    const HARD_KEY = String(process.env.HARD_KEY);

    const url = `${SERVER_URL}/properties/featured`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-HARD-KEY": HARD_KEY,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      console.error(
        new Error(
          `PropertyService.getFeaturedProperties: ${JSON.stringify(errorData)}`,
        ),
      );

      throw errorData;
    }

    return (await response.json()).data as Array<Property>;
  }

  static async getPropertyDetails(slug: string) {
    "use server";
    const SERVER_URL = process.env.SERVER_URL;
    const HARD_KEY = String(process.env.HARD_KEY);

    const url = `${SERVER_URL}/properties/${slug}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-HARD-KEY": HARD_KEY,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      console.error(
        new Error(
          `PropertyService.getPropertyDetails: ${JSON.stringify(errorData)}`,
        ),
      );

      return errorData;
    }

    return (await response.json()).data as DetailedProperty;
  }
}

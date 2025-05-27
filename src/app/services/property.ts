import { Paginated } from "@/types/paginated";
import { DetailedProperty, Property } from "@/types/property";
import { PropertyQueryParams } from "../properties/types";

export class PropertyService {
  static async getPropertiesBySearch(params?: PropertyQueryParams) {
    "use server";
    const SERVER_URL = process.env.SERVER_URL;
    const HARD_KEY = String(process.env.HARD_KEY);

    const url = new URL(`${SERVER_URL}/api/properties/search`);

    if (params) {
      if (params.page !== undefined)
        url.searchParams.append("page", String(params.page));

      if (params.search_type !== undefined)
        url.searchParams.append("search_type", params.search_type);

      if (params.property_type !== undefined)
        url.searchParams.append("property_type", params.property_type);

      if (params.title !== undefined)
        url.searchParams.append("title", params.title);

      if (params.state !== undefined)
        url.searchParams.append("state", params.state);

      if (params.city !== undefined)
        url.searchParams.append("city", params.city);

      if (params.neighborhood !== undefined)
        url.searchParams.append("neighborhood", params.neighborhood);
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

    const featuredUrl = `${SERVER_URL}/api/properties/featured`;

    const response = await fetch(featuredUrl, {
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
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
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

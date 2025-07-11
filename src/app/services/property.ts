import { Paginated } from "@/types/paginated";
import { DetailedProperty, Property } from "@/types/property";
import { PropertyQueryParams } from "../propiedades/types";

export class PropertyService {
  static async getPropertiesBySearch(params?: PropertyQueryParams) {
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

  static async getFeaturedProperties(limit?: number) {
    const SERVER_URL = process.env.SERVER_URL;
    const HARD_KEY = String(process.env.HARD_KEY);

    const url = new URL(`${SERVER_URL}/api/properties/featured`);
    
    if (limit !== undefined) {
      url.searchParams.append("limit", String(limit));
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
          `PropertyService.getFeaturedProperties: ${JSON.stringify(errorData)}`,
        ),
      );

      throw errorData;
    }

    const data = (await response.json()).data as Array<Property>;
    
    if (limit !== undefined && data.length > limit) {
      return data.slice(0, limit);
    }
    
    return data;
  }

  static async getPropertyDetails(slug: string) {
    const SERVER_URL = process.env.SERVER_URL;
    const HARD_KEY = String(process.env.HARD_KEY);

    const url = `${SERVER_URL}/api/properties/${slug}`;

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

      throw new Error(`Failed to fetch property details: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.data) {
      throw new Error('Property not found');
    }
    
    return data.data as DetailedProperty;
  }
}

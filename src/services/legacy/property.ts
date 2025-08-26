"use server";
import { fetchServer, getResponseData } from "@/lib/http-server";
import { Paginated } from "@/types/paginated";
import { DetailedProperty, Property } from "@/types/property";
import { PropertyQueryParams } from "@/types/property-query-params";

export async function getPropertiesBySearch(params?: PropertyQueryParams) {
  const response = await fetchServer("/api/properties/search", { params });
  return getResponseData<Paginated<Property>>(response);
}

export async function getFeaturedProperties(limit?: number) {
  try {
    const response = await fetchServer("/api/properties/featured", {
      params: {
        limit
      }
    });

    const { data } = await getResponseData<Paginated<Property>>(response);

    if (limit !== undefined && data.length > limit) {
      return data.slice(0, limit);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPropertyDetails(slug: string) {
  const response = await fetchServer(`/api/properties/${slug}`);
  const { data } = await getResponseData<{ data: DetailedProperty }>(response);
  return data;
}

export async function addPropertyToFavorites(uuid: string) {
  const response = await fetchServer(`/api/properties/${uuid}/favorite`, {
    method: "POST"
  });
  return getResponseData<DetailedProperty>(response);
}

export async function removePropertyFromFavorites(uuid: string) {
  const response = await fetchServer(`/api/properties/${uuid}/favorite`, {
    method: "DELETE"
  });
  return getResponseData<DetailedProperty>(response);
}

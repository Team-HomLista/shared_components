"use server";
import { Paginated } from "@/types/paginated";
import { DetailedProperty, Property } from "@/types/property";
import { PropertyQueryParams } from "@/types/property-query-params";
import { getIdentifyToken, getSession } from "./session";
import { headers } from "next/headers";
import { fetchServer, getResponseData } from "@/lib/http-server";

export async function getPropertiesBySearch(params?: PropertyQueryParams) {
  const response = await fetchServer("/api/properties/search", { params });
  return getResponseData<Paginated<Property>>(response);
}

export async function getFeaturedProperties(limit?: number) {
  const response = await fetchServer("/api/properties/featured", {
    params: {
      limit,
    },
  });

  const data = await getResponseData<Array<Property>>(response);

  console.log({ data });

  if (limit !== undefined && data.length > limit) {
    return data.slice(0, limit);
  }

  return data;
}

export async function getPropertyDetails(slug: string) {
  const response = await fetchServer(`/api/properties/${slug}`);
  return getResponseData<DetailedProperty>(response);
}

export async function addPropertyToFavorites(uuid: string) {
  const response = await fetchServer(`/api/properties/${uuid}/favorite`, {
    method: "POST",
  });
  return getResponseData<DetailedProperty>(response);
}

export async function removePropertyFromFavorites(uuid: string) {
  const response = await fetchServer(`/api/properties/${uuid}/favorite`, {
    method: "DELETE",
  });
  return getResponseData<DetailedProperty>(response);
}

"use server";

import { fetchServer, getResponseData } from "@/lib/http-server";

export async function getStates() {
  try {
    const response = await fetchServer("/api/properties/locations/states");
    return await getResponseData<string[]>(response);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getCities(state: string) {
  const response = await fetchServer("/api/properties/locations/cities", {
    params: { state },
  });
  return await getResponseData<string[]>(response);
}

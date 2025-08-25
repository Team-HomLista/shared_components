import { LocationFilters } from "@/types/property-filter";

export class FilterService {
  static async getFilterOptions() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const HARD_KEY = String(process.env.HARD_KEY);

    const url = new URL(`${API_URL}/api/search/filters`);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-HARD-KEY": HARD_KEY,
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(new Error(`FilterService.getFilterOptions: ${JSON.stringify(errorData)}`));
      throw errorData;
    }

    const data = (await response.json()) as LocationFilters;
    return data;
  }
}

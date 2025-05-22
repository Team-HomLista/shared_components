import { PropertyLocations } from "@/types/property-filter";

export class FilterService {
  static async getFilterOptions() {
    const SERVER_URL = process.env.SERVER_URL;
    const HARD_KEY = String(process.env.HARD_KEY);

    const url = new URL(`${SERVER_URL}/api/search/filters`);

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
          `FilterService.getFilterOptions: ${JSON.stringify(errorData)}`,
        ),
      );

      throw errorData;
    }

    return (await response.json()) as PropertyLocations;
  }
}

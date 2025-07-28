"use server";

export async function getStates() {
  const SERVER_URL = process.env.SERVER_URL;
  const HARD_KEY = String(process.env.HARD_KEY);

  const url = new URL(`${SERVER_URL}/api/properties/locations/states`);

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

  return (await response.json()) as string[];
}

export async function getCities(state: string) {
  const SERVER_URL = process.env.SERVER_URL;
  const HARD_KEY = String(process.env.HARD_KEY);
  const url = new URL(
    `${SERVER_URL}/api/properties/locations/cities?state=${state}`,
  );
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
  return (await response.json()) as string[];
}

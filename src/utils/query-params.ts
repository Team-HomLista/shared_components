/**
 * @description Get all query params that match the key and return them as an object
 *
 * @param queryParams - URLSearchParams object
 * @param key - The key to match in the query params
 * @returns Record<string, string> - An object with the query params that match the key
 *
 * @example
 *  queryParams = "filter[status]=active&filter[type]=house"
 *  getFromQueryParams(queryParams, "filter") // returns { status: "active", type: "house" }
 */
export function getFromQueryParams(queryParams: URLSearchParams, key: string) {
  const regexToMatch = new RegExp(`^${key}\\[(.+)\\]$`);

  function reduceFilter(
    acc: Record<string, string>,
    [queryParamKey, queryParamValue]: [string, string]
  ) {
    const matchKey = queryParamKey.match(regexToMatch);
    const subKey = matchKey?.[1];
    if (subKey) acc[subKey] = queryParamValue;
    return acc;
  }

  return queryParams.entries().reduce(reduceFilter, {} as Record<string, string>);
}

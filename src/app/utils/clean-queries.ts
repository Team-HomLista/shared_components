export function cleanQueries<T>(queries: T): T {
  const cleaned: Record<string, any> = {};
  for (const key in queries) {
    if (
      queries[key] !== undefined &&
      queries[key] !== null &&
      queries[key] !== "" &&
      queries[key] !== "undefined"
    ) {
      cleaned[key] = queries[key];
    }
  }
  return cleaned as T;
}

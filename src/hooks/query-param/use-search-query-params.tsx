import { parseAsString, useQueryState } from "nuqs";

export function useSearchQueryParam() {
  return useQueryState("search", parseAsString.withDefault(""));
}

import { createParser, parseAsArrayOf, useQueryState } from "nuqs";

const parseAsSorting = createParser({
  parse(queryValue) {
    const desc = queryValue.startsWith("-");
    const id = desc ? queryValue.slice(1) : queryValue;

    return {
      desc,
      id
    };
  },
  serialize({ desc, id }) {
    return `${desc ? "-" : ""}${id}`;
  }
});

export function useSortingQueryParam() {
  return useQueryState("sort", parseAsArrayOf(parseAsSorting).withDefault([]));
}

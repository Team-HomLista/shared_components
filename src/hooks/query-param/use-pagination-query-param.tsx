import { parseAsIndex, parseAsInteger, useQueryStates } from "nuqs";

const paginationParsers = {
  pageIndex: parseAsIndex.withDefault(0),
  pageSize: parseAsInteger.withDefault(10)
};

const paginationUrlKeys = {
  pageIndex: "page[number]",
  pageSize: "page[size]"
};

export function usePaginationQueryParam() {
  return useQueryStates(paginationParsers, {
    urlKeys: paginationUrlKeys
  });
}

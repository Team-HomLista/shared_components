import { AxiosError, AxiosResponse } from "axios";

import { ApiErrorResponse } from "@/types/api-response";

export function transformErrorResponseToAxiosError(
  error: ApiErrorResponse,
  response?: AxiosResponse
): AxiosError {
  return new AxiosError(
    error.message,
    error.error_code,
    response?.config,
    response?.request,
    response
  );
}

import { AxiosError } from "axios";
import { redirect } from "next/navigation";

import { removeAccessToken } from "@/services/access-token";
import { isApiErrorResponse, isApiSuccessResponse } from "@/types/api-response";
import { ServerActionResponse } from "@/types/server-action-response";
import { transformErrorResponseToAxiosError } from "@/utils/http";

import { globalHttpErrorHandler } from "./http-error-handler";

/**
 * Executes a server action safely, handling both successful and error responses.
 * For successful responses, it checks if the result is an API success response and returns it.
 * If not, it wraps the result in a success response with a default message.
 * For errors, it handles Axios errors (including 401 and 403 status codes) and generic errors,
 * returning appropriate error responses with messages and error codes.
 *
 * @template T - A function type that returns a Promise of any type
 * @param {T} action - The server action to execute
 * @returns {Promise<ServerActionResponse>} A promise that resolves to a ServerActionResponse
 *   containing either the successful result or error information
 */
export async function runServerActionSafe<T extends () => any>(
  action: T
): Promise<ServerActionResponse> {
  try {
    const result = await action();

    if (isApiSuccessResponse(result)) return result;

    return { success: true, message: "Server action response", data: result, meta: undefined };
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;

      if (response?.status === 401) {
        removeAccessToken();
        return redirect("/login");
      }

      if (isApiErrorResponse(response?.data)) return response.data;

      return {
        success: false,
        message: error.message,
        error_code: error.code ?? error.name
      };
    }

    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
        error_code: error.name
      };
    }

    return { success: false, message: "Server action error", error_code: "SERVER_ACTION_ERROR" };
  }
}

/**
 * Creates a hook for executing server actions with error handling.
 * The returned function will execute the provided action with the given arguments,
 * then check the response for API error responses. If an error is found, it will
 * be transformed and handled using the global HTTP error handler, and the promise
 * will be rejected with the error. For successful responses, the response is returned as-is.
 *
 * @template T - A function type that takes any number of arguments and returns a Promise
 * @param {T} action - The server action to execute
 * @returns {Function} A function that takes the same arguments as the provided action,
 *   executes it, and handles any API errors by transforming and rejecting them
 */
export function useServerAction<T extends (...args: any[]) => Promise<any>>(action: T) {
  return async (...args: Parameters<T>) => {
    const response = await action(...args);

    if (isApiErrorResponse(response)) {
      const error = globalHttpErrorHandler.handleResponseError(
        transformErrorResponseToAxiosError(response)
      );

      return Promise.reject(error);
    }

    return response;
  };
}

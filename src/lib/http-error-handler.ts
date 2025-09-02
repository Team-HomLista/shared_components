import axios, { AxiosError } from "axios";

import { HTTP_ERROR_HANDLERS } from "@/config/http-errors";
import { ErrorHandler, ErrorHandlerMany, ErrorHandlerRegistry } from "@/lib/error-handler";
import { isApiErrorResponse } from "@/types/api-response";

export interface HttpData {
  code: string;
  description?: string;
  status: number;
}

export type THttpError = Error | AxiosError;

class HttpErrorHandler extends ErrorHandlerRegistry<THttpError> {
  /**
   * Handles an error response, determining the appropriate error handler to use.
   *
   * @param error - The error to handle
   * @param direct - If true, bypasses some error handling logic
   * @throws The error if it cannot be handled
   */
  handleResponseError(this: HttpErrorHandler, error: THttpError) {
    if (error === null) throw new Error("Unrecoverrable error!! Error is null!");

    const fromServerSide = typeof window === "undefined";

    if (fromServerSide || !axios.isAxiosError(error)) return error;

    const response = error?.response;
    const data = response?.data;
    const seekers = [
      isApiErrorResponse(data) ? data.error_code : undefined,
      error.code,
      error.name,
      String(error.status),
      String(response?.status)
    ];

    if (!this.handleError(seekers, error)) return error;
  }
}

export const globalHttpErrorHandler = new HttpErrorHandler();

globalHttpErrorHandler.registerMany(HTTP_ERROR_HANDLERS);

/**
 * Creates a new error handler function that processes errors using a combination of local and global handlers.
 *
 * @param solutions - An object containing error handlers to be used locally
 * @param ignoreGlobal - If true, global error handlers will be ignored (default: false)
 * @returns A function that takes an error and processes it using the combined local/global handlers
 */
export function dealWith(solutions: ErrorHandlerMany<THttpError>, ignoreGlobal?: boolean) {
  let global;

  if (ignoreGlobal === false) global = globalHttpErrorHandler;

  const localHandlers = new HttpErrorHandler(global, solutions);

  return (error: any) => localHandlers.handleResponseError(error);
}

/**
 * Registers a new error handler with the global error handler registry.
 *
 * @param key - The key to associate with the error handler
 * @param handler - The error handler to register (can be a function, object, or string)
 */
export function registerError(key: string, handler: ErrorHandler<THttpError>) {
  globalHttpErrorHandler.register(key, handler);
}

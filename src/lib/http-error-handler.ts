import axios, { AxiosError } from "axios";

import { registerGlobalErrors } from "@/config/http-errors";
import { ErrorHandler, ErrorHandlerMany, ErrorHandlerRegistry } from "@/lib/error-handler";

export interface HttpData {
  code: string;
  description?: string;
  status: number;
}

export type THttpError = Error | AxiosError;

export class HttpError extends Error {
  constructor(message?: string) {
    super(message); // 'Error' breaks prototype chain here
    this.name = "HttpError";
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}

class HttpErrorHandler extends ErrorHandlerRegistry<THttpError> {
  /**
   * Handles an error response, determining the appropriate error handler to use.
   *
   * @param error - The error to handle
   * @param direct - If true, bypasses some error handling logic
   * @throws The error if it cannot be handled
   */
  resposeErrorHandler(this: HttpErrorHandler, error: THttpError) {
    if (error === null) throw new Error("Unrecoverrable error!! Error is null!");

    if (axios.isAxiosError(error)) {
      const response = error?.response;
      const data = response?.data as HttpData;

      const seekers = [
        data?.code,
        error.code,
        error?.name,
        String(data?.status),
        String(response?.status)
      ];

      const result = this.handleError(seekers, error);

      if (!result) {
        if (data?.code && data?.description) {
          const res = this.handleErrorObject(error, {
            message: data?.description
          });

          return res;
        }
      }
    }

    if (error instanceof Error) {
      if (this.handleError(error.name, error)) return;
    }

    throw error;
  }
}

export const globalErrorHandler = new HttpErrorHandler();

registerGlobalErrors(globalErrorHandler);

/**
 * Creates a new error handler function that processes errors using a combination of local and global handlers.
 *
 * @param solutions - An object containing error handlers to be used locally
 * @param ignoreGlobal - If true, global error handlers will be ignored (default: false)
 * @returns A function that takes an error and processes it using the combined local/global handlers
 */
export function dealWith(solutions: ErrorHandlerMany<THttpError>, ignoreGlobal?: boolean) {
  let global;

  if (ignoreGlobal === false) global = globalErrorHandler;

  const localHandlers = new HttpErrorHandler(global, solutions);

  return (error: any) => localHandlers.resposeErrorHandler(error);
}

/**
 * Registers a new error handler with the global error handler registry.
 *
 * @param key - The key to associate with the error handler
 * @param handler - The error handler to register (can be a function, object, or string)
 */
export function registerError(key: string, handler: ErrorHandler<THttpError>) {
  globalErrorHandler.register(key, handler);
}

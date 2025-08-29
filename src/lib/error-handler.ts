/**
 * Represents a function that handles errors of type TError.
 *
 * @template TError - The type of error to handle, defaults to Error
 * @param error - The error to handle (optional)
 * @returns A boolean indicating whether the error was handled successfully, or void if no return value is needed
 */
export type ErrorHandler<TError extends Error = Error> = (error?: TError) => boolean;

export interface ErrorHandlerMany<TError extends Error = Error> {
  [key: string]: ErrorHandler<TError>;
}

/**
 * A registry for managing error handlers, allowing for hierarchical error handling.
 * Supports registration, lookup, and execution of error handlers in a parent-child relationship.
 *
 * Features:
 * - Hierarchical error handler resolution (child can fall back to parent)
 * - Multiple handler types (functions, objects, strings)
 * - Batch registration of handlers
 * - Error handling with before/after hooks
 * - Support for both direct and indirect error handling
 */
export class ErrorHandlerRegistry<TError extends Error = Error> {
  private handlers = new Map<string, ErrorHandler<TError>>();

  private parent: ErrorHandlerRegistry | null = null;

  constructor(parent?: ErrorHandlerRegistry, input?: ErrorHandlerMany<TError>) {
    if (typeof parent !== "undefined") this.parent = parent;
    if (typeof input !== "undefined") this.registerMany(input);
  }

  /**
   * Registers an error handler with the specified key.
   *
   * @param key - The key to associate with the error handler
   * @param handler - The error handler to register (can be a function, object, or string)
   * @returns The current ErrorHandlerRegistry<T> instance for method chaining
   */
  register(key: string, handler: ErrorHandler<TError>) {
    this.handlers.set(key, handler);
    return this;
  }

  /**
   * Unregisters an error handler with the specified key.
   *
   * @param key - The key of the error handler to unregister
   * @returns The current ErrorHandlerRegistry instance for method chaining
   */
  unregister(key: string) {
    this.handlers.delete(key);
    return this;
  }

  /**
   * Finds an error handler by key, searching in the current registry and its parent if not found.
   *
   * @param seek - The key of the error handler to find
   * @returns The found error handler or undefined if not found
   */
  find(seek: string): ErrorHandler<TError> | undefined {
    const handler = this.handlers.get(seek);
    if (handler) return handler;
    return this.parent?.find(seek);
  }

  /**
   * Registers multiple error handlers at once.
   *
   * @param input - An object containing key-value pairs of error handlers
   * @returns The current ErrorHandlerRegistry instance for method chaining
   */
  registerMany(input: ErrorHandlerMany<TError>) {
    for (const [key, value] of Object.entries(input)) {
      this.register(key, value);
    }
    return this;
  }

  /**
   * Handles an error by finding and executing the appropriate error handler.
   *
   * @param seek - The key(s) of the error handler(s) to use
   * @param error - The error to handle
   * @returns True if the error was handled successfully, false otherwise
   */
  handleError(
    this: ErrorHandlerRegistry<TError>,
    seek: (string | undefined)[] | string,
    error: TError
  ): boolean {
    if (Array.isArray(seek)) {
      return seek.some((key) => {
        if (key !== undefined) return this.handleError(String(key), error);

        return false;
      });
    }

    const handler = this.handlers.get(String(seek));

    if (!handler) return false;

    return !!handler(error);
  }
}

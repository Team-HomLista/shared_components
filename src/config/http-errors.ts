import { ErrorHandlerRegistry } from "@/lib/error-handler";

export const HTTTP_ERROR_TYPE = {
  GENERIC_ERROR: "GENERIC_ERROR",
  NOT_FOUND: "404",
  SERVER_ERROR: "500"
};

export const registerGlobalErrors = (registry: ErrorHandlerRegistry) => {
  registry.registerMany({
    [HTTTP_ERROR_TYPE.GENERIC_ERROR]: { message: "Something went wrong. Please try again." },
    [HTTTP_ERROR_TYPE.NOT_FOUND]: { message: "API Page not found!" },
    [HTTTP_ERROR_TYPE.SERVER_ERROR]: { message: "Internal server error" }
  });
};

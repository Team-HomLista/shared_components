import { AxiosError } from "axios";
import { toast } from "sonner";

export const HTTTP_ERROR_TYPE = {
  NOT_FOUND: "404",
  SERVER_ERROR: "500"
} as const;

export const HTTP_ERROR_HANDLERS = {
  [AxiosError.ERR_NETWORK]: () => !!toast.error("Network error"),
  [HTTTP_ERROR_TYPE.NOT_FOUND]: () => !!toast.error("API Page not found!"),
  [HTTTP_ERROR_TYPE.SERVER_ERROR]: () => !!toast.error("Internal server error")
};

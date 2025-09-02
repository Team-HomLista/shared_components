import { Json } from "./json";

export type ApiSuccessResponse<
  TData extends Json = Json,
  TMeta extends Record<string, Json> | undefined = undefined
> = {
  success: true;
  message: string;
  data: TData;
  meta: TMeta;
};

export type ApiErrorResponse<TErrors extends Record<string, any> = Record<string, any>> = {
  success: false;
  message: string;
  error_code: string;
  errors?: TErrors;
};

export type ApiResponse<
  TData extends Json = Json,
  TMeta extends Record<string, Json> | undefined = undefined,
  TErrors extends Record<string, any> = Record<string, any>
> = ApiSuccessResponse<TData, TMeta> | ApiErrorResponse<TErrors>;

export function isApiSuccessResponse(value: any): value is ApiErrorResponse {
  if (typeof value === "object") {
    return ["success", "message", "data"].every((k) => k in value) && value.success;
  }

  return false;
}

export function isApiErrorResponse(value: any): value is ApiErrorResponse {
  if (typeof value === "object") {
    return ["success", "message", "error_code"].every((k) => k in value) && !value.success;
  }

  return false;
}

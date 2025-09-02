import {
  ApiErrorResponse,
  ApiResponse,
  ApiSuccessResponse,
  isApiErrorResponse,
  isApiSuccessResponse
} from "./api-response";

export type ServerActionSuccessResponse = ApiSuccessResponse;
export type ServerActionErrorResponse = ApiErrorResponse;
export type ServerActionResponse = ApiResponse;

export const isServerActionResponse = isApiSuccessResponse;
export const isServerActionErrorResponse = isApiErrorResponse;

import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { redirect } from "next/navigation";

import { getAccessToken, removeAccessToken } from "@/services/access-token";
import { isApiErrorResponse } from "@/types/api-response";
import { transformErrorResponseToAxiosError } from "@/utils/http";

import { globalHttpErrorHandler } from "./http-error-handler";

async function handleRequest(config: InternalAxiosRequestConfig) {
  const accessToken = await getAccessToken();

  const HARD_KEY = String(process.env.NEXT_PUBLIC_HARD_KEY);
  config.headers["X-HARD-KEY"] = HARD_KEY;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
}

function handleResponse(response: AxiosResponse) {
  const responseData = response.data;

  if (isApiErrorResponse(responseData)) {
    const error = globalHttpErrorHandler.handleResponseError(
      transformErrorResponseToAxiosError(responseData, response)
    );

    return Promise.reject(error);
  }

  return response;
}

function handleResponseError(error: any) {
  if (error.response?.status === 401) {
    removeAccessToken();
    return redirect("/login");
  }

  return Promise.reject(globalHttpErrorHandler.handleResponseError(error));
}

function createAxiosInstance() {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json"
    }
  });

  axiosInstance.interceptors.request.use(handleRequest);
  axiosInstance.interceptors.response.use(handleResponse, handleResponseError);

  return axiosInstance;
}

export const apiClient = createAxiosInstance();

// export function handleApiError(error: any) {}

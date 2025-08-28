import axios, { InternalAxiosRequestConfig } from "axios";

import { globalErrorHandler } from "@/lib/http-error-handler";
import { getAccessToken } from "@/services/access-token";

async function requestHandler(config: InternalAxiosRequestConfig) {
  const accessToken = await getAccessToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
}

function responseError(error: any) {
  return globalErrorHandler.resposeErrorHandler(error);
}

function createAxiosInstance() {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json"
    }
  });

  axiosInstance.interceptors.request.use(requestHandler);
  axiosInstance.interceptors.response.use(undefined, responseError);

  return axiosInstance;
}

export const apiClient = createAxiosInstance();

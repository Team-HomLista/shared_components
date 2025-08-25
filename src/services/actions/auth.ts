"use server";
import { apiClient } from "@/lib/api-client";
import { setAccessToken } from "@/services/access-token";

type LoginPayload = {
  email: string;
  password: string;
};

export async function login(payload: LoginPayload) {
  const { data } = await apiClient.post("/api/login", payload);

  if (!data?.token) return null;

  setAccessToken(data.token);

  return data;
}

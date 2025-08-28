"use server";
import { redirect } from "next/navigation";

import { apiClient } from "@/lib/api-client";
import { removeAccessToken, setAccessToken } from "@/services/access-token";

export type LoginPayload = {
  email: string;
  password: string;
};

export async function login(payload: LoginPayload) {
  const { data } = await apiClient.post("/api/login", payload);

  if (!data?.token) throw new Error("User without token");

  setAccessToken(data.token);

  return data;
}

export async function logout() {
  await apiClient.post("/api/logout");
  await removeAccessToken();
  redirect("/login");
}

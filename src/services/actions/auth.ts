"use server";
import { redirect } from "next/navigation";

import { apiClient } from "@/lib/api-client";
import { runServerActionSafe } from "@/lib/server-action";
import { removeAccessToken, setAccessToken } from "@/services/access-token";

export type LoginPayload = {
  email: string;
  password: string;
};

export async function login(payload: LoginPayload) {
  return runServerActionSafe(async () => {
    const { data } = await apiClient.post("login", payload);

    if (!data?.token) throw new Error("User without token");

    setAccessToken(data.token);

    return data;
  });
}

export async function logout() {
  const response = await runServerActionSafe(async () => {
    await apiClient.post("logout");

    await removeAccessToken();
  });

  if (!response.success) return response;

  redirect("/login");
}

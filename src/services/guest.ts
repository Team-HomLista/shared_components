"use server";
import { createSession } from "./session";
import { fetchServer, getResponseData } from "@/lib/http-server";

export async function identifyGuest(anonymous_id: string) {
  const response = await fetchServer("/api/guest/identify", {
    method: "POST",
    body: JSON.stringify({ anonymous_id }),
    withIdentifyToken: false,
  });

  const data = await getResponseData<{
    guest_id: string;
    lead_id: string;
    user_id: string;
  }>(response);

  await createSession({
    userId: data.user_id,
    anonymousId: anonymous_id,
  });

  return data;
}

export async function makeLead(guest_id: number) {
  const response = await fetchServer("/api/guest/lead", {
    method: "POST",
    body: JSON.stringify({ guest_id }),
    withIdentifyToken: false,
  });

  return await getResponseData<{
    lead_id: number;
  }>(response);
}

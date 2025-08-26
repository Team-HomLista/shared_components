"use server";
import { fetchServer, getResponseData } from "@/lib/http-server";
import { createSession } from "@/services/legacy/session";

export async function identifyGuest(anonymousId: string) {
  const response = await fetchServer("/api/guest/identify", {
    method: "POST",
    body: JSON.stringify({ anonymous_id: anonymousId }),
    withIdentifyToken: false
  });

  const data = await getResponseData<{
    guest_id: string;
    lead_id: string;
    user_id: string;
  }>(response);

  await createSession({
    userId: data.user_id,
    anonymousId
  });

  return data;
}

export async function makeLead(guestId: number) {
  const response = await fetchServer("/api/guest/lead", {
    method: "POST",
    body: JSON.stringify({ guest_id: guestId }),
    withIdentifyToken: false
  });

  return await getResponseData<{
    lead_id: number;
  }>(response);
}

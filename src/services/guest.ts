"use server";
import { decrypt, encrypt } from "@/lib/session";
import { SessionPayload } from "@/types/session-payload";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createSession, getSession } from "./session";

export async function identifyGuest(anonymous_id: string) {
  try {
    const SERVER_URL = process.env.SERVER_URL;
    const HARD_KEY = String(process.env.HARD_KEY);
    const url = `${SERVER_URL}/api/guest/identify`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-HARD-KEY": HARD_KEY,
        Accept: "application/json",
      },
      body: JSON.stringify({
        anonymous_id,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();

      return NextResponse.json(
        { message: `Error from downstream server: ${errorData}` },
        { status: response.status },
      );
    }

    const data = (await response.json()) as {
      guest_id: string;
      lead_id: string;
      user_id: string;
    };

    await createSession({
      userId: data.user_id,
      anonymousId: anonymous_id,
    });

    return data;
  } catch (error) {
    console.error("Error in fingerprinting route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function makeLead(guest_id: number) {
  const response = await fetch("/api/guest/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      guest_id,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error(new Error(`GuestService.makeLead: ${errorData}`));
  }

  return (await response.json()) as {
    lead_id: number;
  };
}

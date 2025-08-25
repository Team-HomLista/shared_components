"use server";
// TODO: cambiar logica para almacenar la session del invitado(GUEST)
import { cookies } from "next/headers";

import { decrypt, encrypt } from "@/lib/session";
import { SessionPayload } from "@/types/session-payload";

export async function createSession(payload: SessionPayload) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt(payload);
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/"
  });

  return session;
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) return null;

  return (await decrypt(session)) as SessionPayload;
}

export async function getIdentifyToken() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  return session;
}

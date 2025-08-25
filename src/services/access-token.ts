import { deleteCookie, getCookie, setCookie } from "@/lib/cookie";

export const cookieName = "access-token";

export async function getAccessToken() {
  return await getCookie(cookieName);
}

export async function setAccessToken(accessToken: string) {
  return await setCookie(cookieName, accessToken);
}

export async function removeAccessToken() {
  return await deleteCookie(cookieName);
}

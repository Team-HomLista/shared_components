import { deleteCookie, getCookie, setCookie } from "@/lib/cookie";

export const cookieName = "access-token";

export async function getAccessToken() {
  return getCookie(cookieName);
}

export async function setAccessToken(accessToken: string) {
  return setCookie(cookieName, accessToken);
}

export async function removeAccessToken() {
  return deleteCookie(cookieName);
}

import { COOKIE_NAME, EXPIRES_TIME } from "@/config/access-token";
import { deleteCookie, getCookie, setCookie } from "@/lib/cookie";

export async function getAccessToken() {
  return getCookie(COOKIE_NAME);
}

export async function setAccessToken(accessToken: string) {
  return setCookie(COOKIE_NAME, accessToken, {
    expires: EXPIRES_TIME ? new Date(Date.now() + EXPIRES_TIME) : undefined
  });
}

export async function removeAccessToken() {
  return deleteCookie(COOKIE_NAME);
}

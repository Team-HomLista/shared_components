import { cookieName, expiresTime } from "@/config/access-token";
import { deleteCookie, getCookie, setCookie } from "@/lib/cookie";

export async function getAccessToken() {
  return getCookie(cookieName);
}

export async function setAccessToken(accessToken: string) {
  return setCookie(cookieName, accessToken, {
    expires: expiresTime ? new Date(Date.now() + expiresTime) : undefined
  });
}

export async function removeAccessToken() {
  return deleteCookie(cookieName);
}

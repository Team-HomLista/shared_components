import { OptionsType } from "cookies-next";

import cookieClient from "./cookie-client";
import * as cookieServer from "./cookie-server";

export async function getCookie(key: string) {
  return typeof window === "undefined" ? cookieServer.getCookie(key) : cookieClient.getCookie(key);
}

export async function setCookie(key: string, value: string, option: OptionsType = {}) {
  return typeof window === "undefined"
    ? cookieServer.setCookie(key, value, option)
    : cookieClient.setCookie(key, value, option);
}

export async function deleteCookie(key: string) {
  return typeof window === "undefined"
    ? cookieServer.deleteCookie(key)
    : cookieClient.deleteCookie(key);
}

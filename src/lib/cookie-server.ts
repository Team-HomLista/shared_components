"use server";
import cookieServer, { OptionsType } from "cookies-next";
import { cookies } from "next/headers";

export async function getCookie(key: string, option: OptionsType = {}) {
  return await cookieServer.getCookie(key, { ...option, cookies });
}

export async function setCookie(key: string, value: string, option: OptionsType = {}) {
  return await cookieServer.setCookie(key, value, { ...option, cookies });
}

export async function deleteCookie(key: string, option: OptionsType = {}) {
  return await cookieServer.deleteCookie(key, { ...option, cookies });
}

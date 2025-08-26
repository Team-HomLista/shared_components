"use server";
import {
  OptionsType,
  getCookie as getCookiePrimitive,
  setCookie as setCookiePrimitive,
  deleteCookie as deleteCookiePrimitive
} from "cookies-next";
import { cookies } from "next/headers";

export async function getCookie(key: string, option: OptionsType = {}) {
  return await getCookiePrimitive(key, { ...option, cookies });
}

export async function setCookie(key: string, value: string, option: OptionsType = {}) {
  return await setCookiePrimitive(key, value, { ...option, cookies });
}

export async function deleteCookie(key: string, option: OptionsType = {}) {
  return await deleteCookiePrimitive(key, { ...option, cookies });
}

import { createInstance, KeyPrefix } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import z from "zod";

import { FALLBACK_LNG, LANGUAGUES, DEFAULT_NS, COOKIE_NAME } from "@/config/i18n";
import { getCookie } from "@/lib/cookie";
import { capitalize } from "@/utils/string";

import { makeZodI18nMap } from "./i18n.zod";

const runsOnServerSide = typeof window === "undefined";

const i18n = createInstance({
  debug: false,
  supportedLngs: LANGUAGUES,
  fallbackLng: FALLBACK_LNG,
  lng: undefined, // let detect the language on client side
  fallbackNS: DEFAULT_NS,
  defaultNS: DEFAULT_NS,
  ns: ["zod", DEFAULT_NS],
  detection: {
    order: ["path", "htmlTag", "cookie", "navigator"]
  },
  preload: runsOnServerSide ? LANGUAGUES : []
});

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      // loadZodLocale(language);
      return import(`@/locales/${language}/${namespace}.json`);
    })
  )
  .init();

i18n.services.formatter?.add("capitalize", (value) => {
  return capitalize(value);
});

z.config({
  localeError: makeZodI18nMap(i18n, { ns: ["zod"] })
});

export default i18n;

export async function getT<NS extends string | readonly string[]>(
  ns: NS,
  options: { keyPrefix?: KeyPrefix<NS> } = {}
) {
  const lng = await getCookie(COOKIE_NAME);

  if (lng && i18n.resolvedLanguage !== lng) {
    await i18n.changeLanguage(lng);
  }

  if (ns && !i18n.hasLoadedNamespace(ns)) {
    await i18n.loadNamespaces(ns);
  }

  return {
    t: i18n.getFixedT(
      lng ?? i18n.resolvedLanguage ?? FALLBACK_LNG,
      Array.isArray(ns) ? ns[0] : ns,
      options?.keyPrefix
    ),
    i18n
  };
}

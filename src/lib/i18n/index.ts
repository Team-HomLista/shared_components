import { createInstance, KeyPrefix } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import z from "zod";

import { getCookie } from "@/lib/cookie";
import { capitalize } from "@/utils/string";

import { makeZodI18nMap } from "./i18n.zod";
import { fallbackLng, languages, defaultNS, cookieName } from "./settings";

const runsOnServerSide = typeof window === "undefined";

const i18n = createInstance({
  debug: false,
  supportedLngs: languages,
  fallbackLng,
  lng: undefined, // let detect the language on client side
  fallbackNS: defaultNS,
  defaultNS,
  ns: ["zod", defaultNS],
  detection: {
    order: ["path", "htmlTag", "cookie", "navigator"]
  },
  preload: runsOnServerSide ? languages : []
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
  const lng = await getCookie(cookieName);

  if (lng && i18n.resolvedLanguage !== lng) {
    await i18n.changeLanguage(lng);
  }

  if (ns && !i18n.hasLoadedNamespace(ns)) {
    await i18n.loadNamespaces(ns);
  }

  return {
    t: i18n.getFixedT(
      lng ?? i18n.resolvedLanguage ?? fallbackLng,
      Array.isArray(ns) ? ns[0] : ns,
      options?.keyPrefix
    ),
    i18n
  };
}

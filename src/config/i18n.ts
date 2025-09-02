// Default fallback language for the application
export const FALLBACK_LNG = "es" as const;
// List of supported languages, with fallback language as the first element
export const LANGUAGUES = [FALLBACK_LNG, "en"] as const;
// Default namespace for translations
export const DEFAULT_NS = "globals" as const;
// Name of the cookie used to store language preference
export const COOKIE_NAME = "i18next" as const;
// HTTP header name used to indicate the current language
export const HEADER_NAME = "x-i18next-current-language" as const;

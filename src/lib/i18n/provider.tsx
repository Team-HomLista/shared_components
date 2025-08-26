"use client";

import { PropsWithChildren } from "react";
import { I18nextProvider as I18nextProviderPrimitive } from "react-i18next";

import i18n from "@/lib/i18n";

export function I18nextProvider({ children }: PropsWithChildren) {
  return <I18nextProviderPrimitive i18n={i18n}>{children}</I18nextProviderPrimitive>;
}

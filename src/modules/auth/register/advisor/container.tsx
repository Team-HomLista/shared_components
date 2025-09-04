"use client";

import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

import { Card, CardContent, Text } from "@/components/ui";

import { AdvisorRegisterForm } from "./form";

export function AdvisorRegisterContainer() {
  const { t } = useTranslation("auth");

  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 px-2 py-4">
      <Text variant="title">{t("welcome")}</Text>

      <Card>
        <CardContent className="flex flex-col gap-4">
          <AdvisorRegisterForm />

          <Text variant="description">
            <Trans
              ns="auth"
              i18nKey="acceptTermsAndPrivacy"
              components={[
                <Link key="terms" href="/terms" />, // <0>...</0>
                <Link key="privacy" href="/privacy_policy" /> // <1>...</1>
              ]}
            />
          </Text>
        </CardContent>
      </Card>
    </div>
  );
}

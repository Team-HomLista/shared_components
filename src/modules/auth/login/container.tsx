import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

import { Text } from "@/components/ui";

import { LoginForm } from "./form";

export function LoginContainer() {
  const { t } = useTranslation("auth");

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-2">
        <Text variant="title">{t("login.title")}</Text>
        <Text variant="description">{t("login.description")}</Text>
      </div>

      <LoginForm />

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

      <Text variant="description">
        <span>{t("dontHaveAnAccount")} </span>
        <Link href="/register">{t("registerLabel")}</Link>
      </Text>
    </div>
  );
}

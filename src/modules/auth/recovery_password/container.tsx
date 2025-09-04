import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Text } from "@/components/ui";

import { RecoveryPasswordForm } from "./form";

export function RecoveryPasswordContainer() {
  const { t } = useTranslation("auth");

  return (
    <div className="flex flex-col gap-6 text-left">
      <Text variant="title">{t("recovery_password.title")}</Text>
      <Text variant="description">{t("recovery_password.description")}</Text>

      <RecoveryPasswordForm />

      <Text>
        <Link href="/login">{t("recovery_password.returnToLogin")}</Link>
      </Text>
    </div>
  );
}

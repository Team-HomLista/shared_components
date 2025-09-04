"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Card, CardContent, CardTitle, Text } from "@/components/ui";

export function RegisterContainer() {
  const { t } = useTranslation("auth");

  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 px-2 py-4 text-center">
      <div>
        <Text variant="title">{t("welcome")}</Text>
        <Text variant="description">{t("register.selectAccountType")}</Text>
      </div>

      <div className="flex w-full items-center justify-center gap-2 md:gap-4 lg:gap-8 xl:gap-16">
        <Link className="h-full max-w-xs flex-1" href="/register/advisor">
          <Card className="h-full">
            <CardContent className="space-y-4">
              <CardTitle>{t("register.advisorBtn")}</CardTitle>

              <div className="relative aspect-square w-full">
                <Image alt="advisor" src="/images/register-account-type/advisor.webp" fill />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link className="h-full max-w-xs flex-1" href="/register/buyer">
          <Card className="h-full">
            <CardContent className="space-y-4">
              <CardTitle>{t("register.buyerBtn")}</CardTitle>

              <div className="relative aspect-square w-full">
                <Image alt="buyer" src="/images/register-account-type/buyer.webp" fill />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}

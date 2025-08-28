"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { toast } from "sonner";

import { login } from "@/services/actions/auth";
import { Button, Form, Text } from "@/shared/components/ui";
import { LoadingSpinner } from "@/shared/components/ui/loading-spinner";

import { Schema, schema } from "./schema";

export function LoginForm() {
  const router = useRouter();
  const form = useForm({ resolver: zodResolver(schema) });
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess() {
      router.push("/login");
    },
    onError() {
      toast.error(t("error.title"), { description: t("error.description") });
    }
  });
  const { t } = useTranslation("login");

  const handleSubmit = (data: Schema) => mutate(data);

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex flex-col gap-4">
          <Form.Input
            control={form.control}
            type="email"
            name="email"
            title={t("email")}
            autoFocus
          />
          <Form.Input
            control={form.control}
            type="password"
            name="password"
            title={t("password")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Button type="submit" size="lg">
            {isPending && <LoadingSpinner />}
            <span>{t("loginBtn")}</span>
          </Button>

          <Button variant="ghost" size="lg">
            {t("forgotPassBtn")}
          </Button>

          <Text variant="description">
            <Trans
              ns="login"
              i18nKey="acceptTermsAndPrivacy"
              components={[
                <Link key="terms" href="/terms" className="font-medium" />, // <0>...</0>
                <Link key="privacy_policy" href="/privacy_policy" className="font-medium" /> // <1>...</1>
              ]}
            />
          </Text>
        </div>
      </form>
    </Form>
  );
}

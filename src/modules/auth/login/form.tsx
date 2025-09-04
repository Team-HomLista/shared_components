"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Button, Form, Text } from "@/components/ui";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useLogin } from "@/services/auth";

import { Schema, schema } from "./schema";

export function LoginForm() {
  const form = useForm({ resolver: zodResolver(schema), mode: "onTouched" });
  const { mutate, isPending } = useLogin();
  const { t } = useTranslation("auth");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (data: Schema) => mutate(data);

  const EyeIcon = showPassword ? Eye : EyeClosed;

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
        <Form.Input
          control={form.control}
          type="email"
          name="email"
          title={t("login.fields.email")}
          autoFocus
        />

        <Form.Input
          control={form.control}
          type={showPassword ? "text" : "password"}
          name="password"
          title={t("login.fields.password")}
          suffixNode={
            <EyeIcon
              className="text-muted-foreground h-4 w-4 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          }
        />

        <Text variant="description">
          <Text as={Link} variant="link" href="/recovery_password">
            {t("login.forgotPassBtn")}
          </Text>
        </Text>

        <Button
          type="submit"
          size="lg"
          disabled={!form.formState.isDirty || !form.formState.isValid}
        >
          {isPending && <LoadingSpinner />}
          <span>{t("login.submitBtn")}</span>
        </Button>
      </form>
    </Form>
  );
}

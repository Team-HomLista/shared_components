"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Button, Form, Text } from "@/components/ui";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { cn } from "@/lib/utils";
import { passwordChecks } from "@/modules/auth/register/account/schema";
import { useLogin } from "@/services/auth";

import { Schema, schema } from "./schema";

export function BuyerRegisterForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched"
  });
  const { mutate, isPending } = useLogin();
  const { t } = useTranslation("auth");
  const [showPassword, setShowPassword] = useState(false);

  const password = form.watch("password") ?? "";
  const isPasswordDirty = form.formState.dirtyFields?.password ?? false;

  const handleSubmit = (data: Schema) => mutate(data);

  const EyeIcon = showPassword ? Eye : EyeClosed;

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
        <Form.Input
          control={form.control}
          name="firstName"
          title={t("register.fields.firstName")}
        />

        <Form.Input control={form.control} name="lastName" title={t("register.fields.lastName")} />

        <div className="grid grid-cols-[auto_1fr_auto] gap-2">
          <Form.Selector
            control={form.control}
            name="phoneCode"
            title={t("register.fields.phoneCode")}
            placeholder="+52"
            items={[
              {
                label: "+52",
                value: "52"
              },
              {
                label: "+1",
                value: "1"
              }
            ]}
          />

          <Form.Input
            control={form.control}
            name="phoneNumber"
            title={t("register.fields.phoneNumber")}
            className="min-w-32"
          />
        </div>

        <Form.Input
          control={form.control}
          type="email"
          name="email"
          title={t("register.fields.email")}
          autoFocus
        />

        <Form.HideErrorMessage>
          <Form.Input
            control={form.control}
            type={showPassword ? "text" : "password"}
            name="password"
            title={t("register.fields.password")}
            suffixNode={
              <EyeIcon
                className="text-muted-foreground h-4 w-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            }
          />
        </Form.HideErrorMessage>

        <ul className="space-y-1 text-left">
          {passwordChecks.map(({ label, validate }, index) => (
            <li key={index} className="flex items-center gap-2">
              {isPasswordDirty && (
                <CheckCircle2
                  className={cn({
                    "text-green-500": validate(password),
                    "text-red-500": !validate(password)
                  })}
                />
              )}
              <Text variant="description">{label(t)}</Text>
            </li>
          ))}
        </ul>

        <Button
          type="submit"
          size="lg"
          disabled={!form.formState.isDirty || !form.formState.isValid}
        >
          {isPending && <LoadingSpinner />}
          <span>{t("register.submitBtn")}</span>
        </Button>
      </form>
    </Form>
  );
}

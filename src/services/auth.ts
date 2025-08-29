"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

import { useServerAction } from "@/lib/server-action";

import { login } from "./actions/auth";

export function useLogin() {
  const { t } = useTranslation("login");
  const router = useRouter();

  return useMutation({
    mutationFn: useServerAction(login),
    onSuccess() {
      router.push("/dashboard");
    },
    onError() {
      toast.error(t("error.title"), { description: t("error.description") });
    }
  });
}

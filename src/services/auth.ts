"use client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { login } from "@/services/actions/auth";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      router.push("/dashboard");
    }
  });
};

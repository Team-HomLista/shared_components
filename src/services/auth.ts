"use client";
import { useMutation } from "@tanstack/react-query";

import { login } from "@/services/actions/auth";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
    }
  });
};

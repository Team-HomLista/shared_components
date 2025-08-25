"use client";
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderPrimitive
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export function QueryClientProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProviderPrimitive client={queryClient}>{children}</QueryClientProviderPrimitive>
  );
}

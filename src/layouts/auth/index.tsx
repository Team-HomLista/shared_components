import { PropsWithChildren } from "react";

import { AuthHeader } from "./header";

import "@/styles/auth.css";

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid min-h-full flex-1 grid-flow-row grid-rows-[calc(var(--spacing)*20)_1fr]">
      <AuthHeader />
      <main className="container mx-auto flex h-full flex-col items-center justify-center px-4">
        {children}
      </main>
    </div>
  );
}

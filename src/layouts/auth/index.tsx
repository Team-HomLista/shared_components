import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

import Logo from "@/assets/logo.svg";
import { Card, CardContent, Text } from "@/components/ui";
import { BaseLayout } from "@/layouts/base-layout";

import { AuthHeader } from "./header";

import "@/styles/auth.css";

export function AuthWithHeaderLayout({ children }: PropsWithChildren) {
  return (
    <BaseLayout theme="auth">
      <div className="grid min-h-full flex-1 grid-flow-row grid-rows-[calc(var(--spacing)*20)_1fr]">
        <AuthHeader />
        <main className="container mx-auto flex h-full flex-col items-center justify-center px-2 sm:px-4">
          {children}
        </main>
      </div>
    </BaseLayout>
  );
}

export function AuthHeroLayout({ children }: PropsWithChildren) {
  return (
    <BaseLayout theme="auth">
      <main className="container mx-auto flex h-svh items-center justify-center p-2 lg:p-4">
        <Card className="h-fit w-fit flex-none overflow-hidden p-0">
          <CardContent className="grid h-full max-h-[1024px] min-h-min w-full p-0 lg:grid-cols-[auto_1fr]">
            <div className="flex w-full flex-col items-center justify-center gap-6 place-self-center p-6 text-left lg:max-w-lg lg:px-12">
              <Link href="/" className="flex items-center gap-2 self-start">
                <Logo className="size-8" />
                <Text variant="subtitle" className="text-brand font-semibold">
                  HomLista
                </Text>
              </Link>

              {children}
            </div>

            <div className="bg-muted relative hidden aspect-[844/1024] h-[calc(100svh-var(--spacing)*4)] min-h-[620px] overflow-hidden lg:block lg:max-h-[620px] xl:max-h-[1024px]">
              <Image
                alt="login-hero"
                src="/images/hero-assets/login-hero.webp"
                fill
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
          </CardContent>
        </Card>
      </main>
    </BaseLayout>
  );
}

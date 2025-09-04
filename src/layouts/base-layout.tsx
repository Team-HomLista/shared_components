"use server";

import { getCookie } from "cookies-next";
import { dir } from "i18next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui";
import { COOKIE_NAME, FALLBACK_LNG } from "@/config/i18n";
import { AlertDialogProvider } from "@/hooks/use-alert-dialog";
import { DialogProvider } from "@/hooks/use-dialog";
import { I18nextProvider } from "@/lib/i18n/provider";
import { QueryClientProvider } from "@/lib/react-query";

import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export async function BaseLayout({ theme, children }: React.PropsWithChildren<{ theme?: string }>) {
  const lng = (await getCookie(COOKIE_NAME)) ?? FALLBACK_LNG;

  return (
    <QueryClientProvider>
      <I18nextProvider>
        <AlertDialogProvider>
          <DialogProvider>
            <NuqsAdapter>
              <html data-theme={theme} lang={lng} dir={dir(lng)}>
                <body className={`${inter.variable} flex min-h-screen flex-col antialiased`}>
                  <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                  >
                    {children}
                    <Toaster />
                  </ThemeProvider>
                </body>
              </html>
            </NuqsAdapter>
          </DialogProvider>
        </AlertDialogProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

import { getCookie } from "cookies-next";
import { dir } from "i18next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { I18nextProvider } from "@/lib/i18n/provider";
import { cookieName, fallbackLng } from "@/lib/i18n/settings";
import { QueryClientProvider } from "@/lib/react-query";

import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "HomLista",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const lng = (await getCookie(cookieName)) ?? fallbackLng;

  return (
    <QueryClientProvider>
      <I18nextProvider>
        <html lang={lng} dir={dir(lng)}>
          <body className={`${inter.variable} flex min-h-screen flex-col antialiased`}>
            {children}
          </body>
        </html>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

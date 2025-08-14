import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import { WebsiteLayout } from "@/components/layouts/website/website-layout";
import "@/styles/website.css";

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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <body className={`${inter.variable} flex min-h-screen flex-col antialiased`}>
        <WebsiteLayout>{children}</WebsiteLayout>
      </body>
    </html>
  );
}

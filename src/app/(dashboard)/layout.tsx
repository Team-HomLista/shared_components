import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/dashboard.css";

import { ThemeProvider } from "@/components/theme-provider";
import { DashboardLayout } from "@/layouts/dashboard";
import { AlertDialogProvider } from "@/shared/hooks/use-alert-dialog";
import { DialogProvider } from "@/shared/hooks/use-dialog";

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

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="es" suppressHydrationWarning={process.env.NODE_ENV === "production"}>
      <head />
      <body className={`${inter.variable} flex min-h-screen flex-col antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AlertDialogProvider>
            <DialogProvider>
              <DashboardLayout>{children}</DashboardLayout>
            </DialogProvider>
          </AlertDialogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

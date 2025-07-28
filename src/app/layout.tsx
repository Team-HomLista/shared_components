import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer/footer";
import { ClientSide } from "./client-side";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} flex min-h-screen flex-col antialiased`}
      >
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
      <ClientSide />
    </html>
  );
}

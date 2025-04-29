import { Inter } from "next/font/google";
import "./globals.css";
import { Fingerprinting } from "./fingerprinting";
import type { Metadata, Viewport } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HomLista",
  // description: "Descripción de tu app",
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
      <Fingerprinting />
    </html>
  );
}

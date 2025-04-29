import { Inter } from "next/font/google";
import "./globals.css";
import { Fingerprinting } from "./fingerprinting";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>{children}</body>
      <Fingerprinting />
    </html>
  );
}

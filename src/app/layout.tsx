import { Inter } from "next/font/google";
import "./globals.css";
import { Fingerprinting } from "./fingerprinting";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer/footer";

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
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Footer />
      </body>
      <Fingerprinting />
    </html>
  );
}

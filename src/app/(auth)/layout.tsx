import { PropsWithChildren } from "react";

import "@/styles/auth.css";
import { AuthLayout } from "@/layouts/auth";

export default function RootLayout({ children }: PropsWithChildren) {
  return <AuthLayout>{children}</AuthLayout>;
}

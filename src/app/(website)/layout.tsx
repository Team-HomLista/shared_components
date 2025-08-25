import { PropsWithChildren } from "react";

import { WebsiteLayout } from "@/layouts/website";
import "@/styles/website.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return <WebsiteLayout>{children}</WebsiteLayout>;
}

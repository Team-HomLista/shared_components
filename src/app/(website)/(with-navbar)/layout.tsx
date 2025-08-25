import { PropsWithChildren } from "react";

import "@/styles/website.css";
import { WebsiteNavbar } from "@/layouts/website/navbar";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <WebsiteNavbar variant="default" />
      {children}
    </>
  );
}

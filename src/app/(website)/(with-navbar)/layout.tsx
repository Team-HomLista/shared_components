import { PropsWithChildren } from "react";

import "@/styles/website.css";
import { Navbar } from "@/layouts/website/navbar";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar variant="default" />
      {children}
    </>
  );
}

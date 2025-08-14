import { PropsWithChildren } from "react";

import { ClientSide } from "@/components/layouts/website/client-side";

import { Footer } from "./footer/footer";

export function WebsiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
      <ClientSide />
    </>
  );
}

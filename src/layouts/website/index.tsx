import { PropsWithChildren } from "react";

import { BaseLayout } from "@/layouts/base-layout";
import { ClientSide } from "@/layouts/website/client-side";

import { WebsiteFooter } from "./footer/footer";

import "@/styles/website.css";

export function WebsiteLayout({ children }: PropsWithChildren) {
  return (
    <BaseLayout theme="website">
      <main className="flex flex-1 flex-col">{children}</main>
      <WebsiteFooter />
      <ClientSide />
    </BaseLayout>
  );
}

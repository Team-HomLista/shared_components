import { PropsWithChildren } from "react";

import "@/styles/website.css";
import { UnderConstruction } from "@/components/under-construction";

export default function Layout({ children }: PropsWithChildren) {
  return <>{process.env.NODE_ENV === "production" ? <UnderConstruction /> : children}</>;
}

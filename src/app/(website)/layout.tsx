import { WebsiteLayout } from "@/layouts/website";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return <WebsiteLayout>{children}</WebsiteLayout>;
}

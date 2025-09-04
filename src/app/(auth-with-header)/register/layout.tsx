import { AuthWithHeaderLayout } from "@/layouts/auth";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return <AuthWithHeaderLayout>{children}</AuthWithHeaderLayout>;
}

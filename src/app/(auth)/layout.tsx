import { AuthLayout } from "@/layouts/auth";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return <AuthLayout>{children}</AuthLayout>;
}

import { AuthHeroLayout } from "@/layouts/auth";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return <AuthHeroLayout>{children}</AuthHeroLayout>;
}

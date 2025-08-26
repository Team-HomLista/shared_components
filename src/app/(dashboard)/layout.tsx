import { DashboardLayout } from "@/layouts/dashboard";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

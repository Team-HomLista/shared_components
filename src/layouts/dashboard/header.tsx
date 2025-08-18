import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui";
import { Separator } from "@/shared/components/ui/separator";
import { SidebarTrigger } from "@/shared/components/ui/sidebar";

import { DashboardBreadcrumb } from "./breadcrum";

export function DashboardHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-4 px-4">
        <SidebarTrigger />

        <Separator orientation="vertical" className="data-[orientation=vertical]:h-8" />

        <DashboardBreadcrumb />

        <div className="ml-auto flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

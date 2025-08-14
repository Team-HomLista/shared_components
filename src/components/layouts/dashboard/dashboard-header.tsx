import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui";
import { Separator } from "@/shared/components/ui/separator";
import { SidebarTrigger } from "@/shared/components/ui/sidebar";

import { DashboardBreadcrumb } from "./dashboard-breadcrum";

export function DashboardHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-4 px-4">
        <SidebarTrigger />

        <Separator orientation="vertical" className="data-[orientation=vertical]:h-8" />

        <DashboardBreadcrumb />

        {/* <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="flex items-center gap-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5"
                asChild
              >
                <Link href="/dashboard">
                  <Home />
                  <span>Home</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {/* 
            {menuItem !== undefined && menuItem.id !== "dashboard" && (
              <>
                <BreadcrumbSeparator />

                {"parentMenu" in menuItem && (
                  <BreadcrumbItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5">
                        {menuItem.parentMenu?.icon && <menuItem.parentMenu.icon />}
                        {menuItem.parentMenu?.label}
                        <ChevronDownIcon />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="start">
                        {menuItem.parentMenu?.subMenu.map((child) => (
                          <DropdownMenuItem key={child.id} asChild>
                            <Link href={child.href}>{child.label}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </BreadcrumbItem>
                )}

                {/* {!isMenuCollepsible(menuItem) && (
                  <>
                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href={menuItem.url}>{menuItem.title}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                )} * /}

                {!isMenuCollepsible(menuItem) && (
                  <>
                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                      <BreadcrumbPage>{menuItem.label}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </>
            )} * /}
          </BreadcrumbList>
        </Breadcrumb> */}

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

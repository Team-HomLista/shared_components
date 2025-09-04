"use client";

import { ChevronDownIcon, Home } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { useDashboardStore } from "@/hooks/use-dashboard";
import { isBreadcrumbLinkItem, isBreadcrumbMenuItem } from "@/types/breadcrumb";

export function DashboardBreadcrumb() {
  const breadcrumb = useDashboardStore((state) => state.breadcrumb);

  return (
    <Breadcrumb>
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

        {breadcrumb?.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              {isBreadcrumbMenuItem(item) ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5">
                    {item.icon && <item.icon />}
                    {item.label}
                    <ChevronDownIcon />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="start">
                    {item.menu.map((menuItem, index) => (
                      <DropdownMenuItem key={index} asChild>
                        <Link href={menuItem.href}>{menuItem.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : isBreadcrumbLinkItem(item) ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>
                    {item.icon && <item.icon />}
                    {item.label}
                  </Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>
                  {item.icon && <item.icon />}
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

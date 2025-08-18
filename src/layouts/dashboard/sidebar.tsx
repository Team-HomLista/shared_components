"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";

import { useDashboardStore } from "@/hooks/use-dashboard";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, Icon } from "@/shared/components/ui";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "@/shared/components/ui/sidebar";
import useCookie from "@/shared/hooks/use-cookie";
import { isMenuCollepsible, MenuCollapsible, MenuItem } from "@/types/menu";

export function DashboardSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const menu = useDashboardStore((state) => state.menu);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex flex-row items-center gap-2 p-2">
            <div className="bg-logo flex size-8 items-center justify-center rounded-md p-2">
              <Image src="/logo.svg" alt="Homlista" width={16} height={16} />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold">Homlista</span>
              <span className="text-muted-foreground text-xs">Backoffice</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menú</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) =>
                isMenuCollepsible(item) ? (
                  <NavCollapsible key={item.id} {...item} />
                ) : (
                  <NavButton key={item.id} {...item} />
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

interface NavCollapsibleProps extends MenuCollapsible {}

const NavCollapsible = ({ subMenu, ...item }: NavCollapsibleProps) => {
  const [isCollapsed, setCollapsed] = useCookie(`sidebar_menu_${item.id}_is_collapsed`, "false");
  const [isOpen, setIsOpen] = useState(isCollapsed === "true");

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    setCollapsed(open ? "true" : "false");
  };

  return (
    <Collapsible open={isOpen} className="group/collapsible" onOpenChange={handleOpenChange}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            {item.icon && <Icon iconNode={item.icon} />}

            <span>{item.label}</span>

            <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub>
            {subMenu.map((item) => (
              <NavButton key={item.id} {...item} isSubMenu />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

interface NavButtonProps extends MenuItem {
  isSubMenu?: boolean;
  isCollapsible?: boolean;
}

const NavButton = ({ id, label, icon, href, isSubMenu = false }: NavButtonProps) => {
  const activeMenuItem = useDashboardStore((state) => state.activeMenuItem);
  const MenuItem = isSubMenu ? SidebarMenuSubItem : SidebarMenuItem;
  const MenuButton = isSubMenu ? SidebarMenuSubButton : SidebarMenuButton;

  return (
    <MenuItem>
      <MenuButton
        asChild
        isActive={activeMenuItem === id}
        className="data-[active=true]:font-medium"
      >
        <Link href={href}>
          {icon && <Icon iconNode={icon} />}

          <span>{label}</span>
        </Link>
      </MenuButton>
    </MenuItem>
  );
};

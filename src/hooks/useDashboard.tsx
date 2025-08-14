"use client";

import { useEffect } from "react";
import { create } from "zustand";

import { menu } from "@/components/layouts/dashboard/menu";
import { BreadcrumbItem } from "@/types/breadcrumb";
import { isMenuCollepsible, Menu } from "@/types/menu";
import { getMenuItemById } from "@/utils/menu";

type DashboardContext = {
  menu: Menu;
  activeMenuItem?: string;
  setActiveMenuItem: (activeMenuItem: string) => void;
  breadcrumb?: BreadcrumbItem[];
  setBreadcrumb: (breadcrumb: BreadcrumbItem[]) => void;
};

export const useDashboardStore = create<DashboardContext>((set) => ({
  menu,
  activeMenuItem: undefined,
  setActiveMenuItem: (activeMenuItem) => set({ activeMenuItem }),
  breadcrumb: undefined,
  setBreadcrumb: (breadcrumb) => set({ breadcrumb })
}));

export const useDashboard = ({
  activeMenuItem,
  breadcrumb
}: {
  activeMenuItem?: string;
  breadcrumb?: BreadcrumbItem[];
}) => {
  const { setActiveMenuItem, setBreadcrumb } = useDashboardStore.getState();

  useEffect(() => {
    if (activeMenuItem) {
      setActiveMenuItem(activeMenuItem);
    }
    if (breadcrumb) {
      setBreadcrumb(breadcrumb);
    }
    console.log({ activeMenuItem, breadcrumb });
  }, [activeMenuItem, breadcrumb]);
};

export function getBreadcrumbFromMenuItem(
  menuItemId: string,
  isCurrentPage = false
): BreadcrumbItem[] {
  const menu = useDashboardStore.getState().menu;

  if (!menuItemId) {
    return [];
  }

  const activeMenuItem = getMenuItemById(menu, menuItemId);

  if (!activeMenuItem) {
    return [];
  }

  const parentMenu = "parentMenu" in activeMenuItem ? activeMenuItem.parentMenu : undefined;
  const breadcrumbMenu = parentMenu
    ? {
        label: parentMenu.label,
        icon: parentMenu.icon,
        menu: parentMenu.subMenu
      }
    : undefined;

  const breadcrumbItem =
    isCurrentPage || isMenuCollepsible(activeMenuItem)
      ? {
          icon: activeMenuItem.icon,
          label: activeMenuItem.label
        }
      : {
          icon: activeMenuItem.icon,
          label: activeMenuItem.label,
          href: activeMenuItem.href
        };

  return [breadcrumbMenu, breadcrumbItem].filter(Boolean) as BreadcrumbItem[];
}

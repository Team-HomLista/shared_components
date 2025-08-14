import { MenuItem } from "./menu";

export type BreadcrumbPageItem = {
  icon?: string;
  label: string;
};

export type BreadcrumbLinkItem = BreadcrumbPageItem & {
  href: string;
};

export type BreadcrumbMenuItem = BreadcrumbPageItem & {
  menu: Omit<MenuItem, "id">[];
};

export type BreadcrumbItem = BreadcrumbPageItem | BreadcrumbLinkItem | BreadcrumbMenuItem;

export function isBreadcrumbLinkItem(item: BreadcrumbItem): item is BreadcrumbLinkItem {
  return "href" in item;
}

export function isBreadcrumbMenuItem(item: BreadcrumbItem): item is BreadcrumbMenuItem {
  return "menu" in item;
}

export function isBreadcrumbPageItem(item: BreadcrumbItem): item is BreadcrumbPageItem {
  return !isBreadcrumbLinkItem(item) && !isBreadcrumbMenuItem(item);
}

import { LucideIcon } from "lucide-react";

export type MenuItem = {
  id: string;
  label: string;
  icon?: LucideIcon;
  href: string;
};

export type MenuCollapsible = {
  id: string;
  label: string;
  icon?: LucideIcon;
  subMenu: Array<MenuItem>;
};

export type Menu = Array<MenuItem | MenuCollapsible>;

export function isMenuCollepsible(item: MenuItem | MenuCollapsible): item is MenuCollapsible {
  return "subMenu" in item;
}

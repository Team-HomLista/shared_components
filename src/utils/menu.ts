import { isMenuCollepsible, Menu, MenuCollapsible, MenuItem } from "@/types/menu";

export function getMenuItemById(
  menu: Menu,
  id: string
): MenuCollapsible | (MenuItem & { parentMenu?: MenuCollapsible }) | undefined {
  for (const item of menu) {
    if (item.id === id) {
      return item;
    }

    if (isMenuCollepsible(item)) {
      const foundItem = getMenuItemById(item.subMenu, id);

      if (foundItem) {
        return {
          parentMenu: item,
          ...foundItem
        };
      }
    }
  }

  return undefined;
}

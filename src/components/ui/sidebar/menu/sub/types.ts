import { SidebarMenuSubButton } from "./button";
import { SidebarMenuSubItem } from "./item";


export interface SidebarMenuSubComposition {
    Button: typeof SidebarMenuSubButton;
    Item: typeof SidebarMenuSubItem;
}
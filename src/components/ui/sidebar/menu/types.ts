import { SidebarMenuAction } from './action';
import { SidebarMenuBadge } from './badge';
import { SidebarMenuButton } from './button';
import { SidebarMenuItem } from './item';
import { SidebarMenuSkeleton } from './skeleton';
import { SidebarMenuSub } from './sub';

export interface SidebarMenuComposition {
  Action: typeof SidebarMenuAction;
  Badge: typeof SidebarMenuBadge;
  Button: typeof SidebarMenuButton;
  Item: typeof SidebarMenuItem;
  Skeleton: typeof SidebarMenuSkeleton;
  Sub: typeof SidebarMenuSub;
}

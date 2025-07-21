import { SidebarGroupAction } from './action';
import { SidebarGroupContent } from './content';
import { SidebarGroupLabel } from './label';

export interface SidebarGroupComposition {
  Action: typeof SidebarGroupAction;
  Content: typeof SidebarGroupContent;
  Label: typeof SidebarGroupLabel;
}

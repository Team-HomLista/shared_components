import { SidebarContent } from './content';
import { SidebarFooter } from './footer';
import { SidebarGroup } from './group';
import { SidebarHeader } from './header';
import { SidebarInset } from './inset';
import { SidebarMenu } from './menu';
import { SidebarRail } from './rail';
import { SidebarSeparator } from './separator';

export interface SidebarComposition {
  Content: typeof SidebarContent;
  Footer: typeof SidebarFooter;
  Group: typeof SidebarGroup;
  Header: typeof SidebarHeader;
  Inset: typeof SidebarInset;
  Menu: typeof SidebarMenu;
  Rail: typeof SidebarRail;
  Separator: typeof SidebarSeparator;
}

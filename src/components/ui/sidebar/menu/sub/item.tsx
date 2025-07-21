import { forwardRef } from 'react';

export const SidebarMenuSubItem = forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ ...props }, ref) => <li ref={ref} {...props} />);

SidebarMenuSubItem.displayName = 'SidebarMenuSubItem';

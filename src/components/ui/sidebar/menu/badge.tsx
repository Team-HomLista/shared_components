import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const SidebarMenuBadge = forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      'absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md',
      'text-sidebar-foreground px-1 text-xs font-medium tabular-nums',
      'pointer-events-none select-none',
      'peer-hover/menu-button:text-sidebar-accent-foreground',
      'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
      'peer-data-[size=sm]/menu-button:top-1',
      'peer-data-[size=default]/menu-button:top-1.5',
      'peer-data-[size=lg]/menu-button:top-2.5',
      'group-data-[collapsible=icon]:hidden',
      className,
    )}
    {...props}
  />
));

SidebarMenuBadge.displayName = 'SidebarMenuBadge';

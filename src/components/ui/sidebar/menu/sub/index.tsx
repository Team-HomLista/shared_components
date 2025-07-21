import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef, forwardRef, ForwardRefExoticComponent } from 'react';
import { SidebarMenuSubComposition } from './types';
import { SidebarMenuSubButton } from './button';
import { SidebarMenuSubItem } from './item';

type SidebarMenuSubCompound = ForwardRefExoticComponent<ComponentPropsWithoutRef<'ul'>> & SidebarMenuSubComposition;

const ref = forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      'border-black/50 mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l',
      'px-2.5 py-0.5',
      'group-data-[collapsible=icon]:hidden',
      className,
    )}
    {...props}
  />
));

ref.displayName = 'SidebarMenuSub';

export const SidebarMenuSub = {
  ...ref,
  Button: SidebarMenuSubButton,
  Item: SidebarMenuSubItem
} as SidebarMenuSubCompound;

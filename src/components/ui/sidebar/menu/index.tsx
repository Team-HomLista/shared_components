import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
} from 'react';

import { cn } from '@/lib/utils';
import { SidebarMenuComposition } from './types';
import { SidebarMenuAction } from './action';
import { SidebarMenuBadge } from './badge';
import { SidebarMenuButton } from './button';
import { SidebarMenuItem } from './item';
import { SidebarMenuSkeleton } from './skeleton';
import { SidebarMenuSub } from './sub';

type SidebarMenuCompound = ForwardRefExoticComponent<
  ComponentPropsWithoutRef<'ul'>
> &
  SidebarMenuComposition;

const ref = forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu"
      className={cn('flex w-full min-w-0 flex-col gap-1', className)}
      {...props}
    />
  ),
);

ref.displayName = 'SidebarMenu';

export const SidebarMenu = {
  ...ref,
  Action: SidebarMenuAction,
  Badge: SidebarMenuBadge,
  Button: SidebarMenuButton,
  Item: SidebarMenuItem,
  Skeleton: SidebarMenuSkeleton,
  Sub: SidebarMenuSub,
} as SidebarMenuCompound;

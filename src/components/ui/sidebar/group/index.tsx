import {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
} from 'react';
import { cn } from '@/lib/utils';
import { SidebarGroupComposition } from './types';
import { SidebarGroupAction } from './action';
import { SidebarGroupContent } from './content';
import { SidebarGroupLabel } from './label';

type SidebarGroupCompound = ForwardRefExoticComponent<
  ComponentPropsWithoutRef<'div'>
> &
  SidebarGroupComposition;

const ref = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="group"
        className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
        {...props}
      />
    );
  },
);

ref.displayName = 'SidebarGroup';

export const SidebarGroup = {
  ...ref,
  Action: SidebarGroupAction,
  Content: SidebarGroupContent,
  Label: SidebarGroupLabel,
} as SidebarGroupCompound;

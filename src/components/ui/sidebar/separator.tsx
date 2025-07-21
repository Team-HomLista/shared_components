import { forwardRef } from 'react';
import { Separator } from '../separator';
import { cn } from '@/lib/utils';


export const SidebarSeparator = forwardRef<
  React.ComponentRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn('bg-sidebar-border mx-2 w-auto', className)}
      {...props}
    />
  );
});

SidebarSeparator.displayName = 'SidebarSeparator';

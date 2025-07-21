import { forwardRef } from 'react';
import { Input } from '../input';
import { cn } from '@/lib/utils';

export const SidebarInput = forwardRef<
  React.ComponentRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        'h-8 w-full bg-background shadow-none',
        'focus-visible:ring-sidebar-ring focus-visible:ring-2',
        className,
      )}
      {...props}
    />
  );
});

SidebarInput.displayName = 'SidebarInput';

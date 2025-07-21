import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

export const SidebarGroupLabel = forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        'flex h-8 shrink-0 items-center rounded-md px-2 text-xs duration-200',
        'text-sidebar-foreground/70 font-medium outline-none ease-linear',
        'ring-sidebar-ring transition-[margin,opa]',
        'focus-visible:ring-2',
        '[&>svg]:size-4 [&>svg]:shrink-0',
        'group-data-[collapsible=icon]:-mt-8',
        'group-data-[collapsible=icon]:opacity-0',
        className,
      )}
      {...props}
    />
  );
});

SidebarGroupLabel.displayName = 'SidebarGroupLabel';

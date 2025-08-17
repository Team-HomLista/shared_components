import { Slot } from "@radix-ui/react-slot";
import { cn } from "@shared/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";
import { JSX, JSXElementConstructor } from "react";

export const tagVariants = cva(
  "inline-flex items-center justify-center rounded-md border text-foreground font-medium px-2 w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden hover:has-data-[slot=tag-close-button]:bg-background has-data-[slot=tag-close-button]:pr-1",
  {
    variants: {
      variant: {
        default: "border-transparent bg-background hover:bg-accent",
        outline: "border bg-background hover:bg-accent"
      },
      size: {
        default:
          "py-0.5 text-xs **:data-[slot=tag-close-button-icon]:size-3 **:data-[slot=tag-count]:text-xs **:data-[slot=tag-count]:px-1 **:data-[slot=tag-count]:px-1 **:data-[slot=tag-count]:h-4",
        md: "py-0.5 text-sm **:data-[slot=tag-close-button-icon]:size-3.5 **:data-[slot=tag-count]:text-sm **:data-[slot=tag-count]:px-1 **:data-[slot=tag-count]:h-[calc(var(--spacing)*4.5)]",
        lg: "py-1 text-sm **:data-[slot=tag-close-button-icon]:size-4 **:data-[slot=tag-count]:text-sm **:data-[slot=tag-count]:px-1.5 **:data-[slot=tag-count]:h-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export function Tag({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof tagVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp className={cn(tagVariants({ variant, size, className }))} data-slot="tag" {...props} />
  );
}

export function TagCloseButton<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>({
  as = "button",
  className,
  ...props
}: React.ComponentProps<T> & { as?: T }) {
  const Comp = as;

  return (
    <Comp
      data-slot="tag-close-button"
      className={cn(
        "text-muted-foreground hover:bg-accent focus-visible:ring-ring rounded-sm p-0.5",
        className
      )}
      {...props}
    >
      <X className="size-3 stroke-3" data-slot="tag-close-button-icon" />
    </Comp>
  );
}

export function TagCount({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="tag-count"
      className={cn(
        "bg-muted text-muted-foreground flex items-center rounded-sm text-xs font-medium",
        className
      )}
      {...props}
    />
  );
}

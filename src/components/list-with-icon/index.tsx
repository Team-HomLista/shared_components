import { cva, VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

import { Icon } from "@/components/ui";
import { cn } from "@/lib/utils";

const iconVariants = cva("flex-shrink-0", {
  variants: {
    iconVariant: {
      default: "text-primary",
      secondary: "text-secondary",
      destructive: "text-destructive"
    }
  }
});

type ListItem = {
  icon: LucideIcon;
  text: ReactNode;
} & VariantProps<typeof iconVariants>;

interface ListWithIconProps {
  className?: string;
  items: ListItem[];
}

export const ListWithIcon = ({ className, items }: ListWithIconProps) => {
  return (
    <ul className={cn("space-y-2", className)}>
      {items.map(({ icon, iconVariant, text }, index) => (
        <li key={index} className="flex items-start gap-3">
          <Icon iconNode={icon} className={cn(iconVariants({ iconVariant }))} />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
};

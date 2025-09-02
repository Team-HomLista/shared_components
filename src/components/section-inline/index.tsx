import { cva, VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import { PropsWithChildren } from "react";

import { Icon } from "@/components/ui";
import { cn } from "@/lib/utils";

const iconVariants = cva(
  "flex size-8 items-center justify-center rounded-lg bg-gradient-to-br shadow-lg sm:size-10",
  {
    variants: {
      iconVariant: {
        default: "from-primary to-primary/75",
        secondary: "from-secondary to-secondary/75",
        destructive: "from-destructive to-destructive/75"
      }
    }
  }
);

interface SectionInlineProps {
  icon: LucideIcon;
  title: string;
}

export const SectionInline = ({
  icon,
  iconVariant = "default",
  title,
  children
}: PropsWithChildren<SectionInlineProps & VariantProps<typeof iconVariants>>) => {
  return (
    <section className="flex max-w-5xl flex-col gap-6 text-base leading-relaxed">
      <header className="flex flex-row gap-4">
        <div className={cn(iconVariants({ iconVariant }))}>
          <Icon iconNode={icon} className="text-white" />
        </div>

        <div className="flex-1">
          <h2 className="text-primary text-xl font-bold sm:text-2xl">{title}</h2>
          <div className="from-secondary to-primary h-1 w-16 rounded-full bg-gradient-to-r" />
        </div>
      </header>

      {children}
    </section>
  );
};

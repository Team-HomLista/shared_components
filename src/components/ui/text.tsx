import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export const textVariants = cva(
  cn("[&_a]:font-medium [&_a]:text-foreground [&_a]:underline-offset-2 [&_a]:hover:underline"),
  {
    variants: {
      variant: {
        /** Default equals to description. */
        default: cn("text-muted-foreground text-sm font-normal"),
        /** Should be used for titles in layout sections inside a module or
         * inside body content interfaces. */
        title: cn("text-2xl font-semibold"),
        /** Should be used for subtitles in layout sections inside a module or
         * inside body content interfaces. */
        subtitle: cn("text-lg font-medium"),
        /** Should be used for sections in body content interfaces like forms. */
        section: cn("text-md font-medium"),
        /** Should be used for any descriptive text. */
        description: cn("text-muted-foreground text-sm font-normal"),
        /** Should be for controls or form labelss. */
        label: cn(""),
        /** Should be used in secondary interfaces or cases where the text
         * emphasis should be lower. Similar to description in styles. */
        small: cn(""),
        /** Same as description but with strong emphasis (bold). */
        strong: cn(""),
        link: cn("font-medium text-foreground underline-offset-2 hover:underline")
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

type DefaultElement = "p";

export const textElement = {
  default: "p",
  title: "h1",
  subtitle: "h2",
  section: "h3",
  description: "p",
  label: "label",
  small: "p",
  strong: "strong",
  link: "a"
};

type PolymorphicAsProp<E extends ElementType> = {
  as?: E;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>;

type TextProps<E extends ElementType = DefaultElement> = PolymorphicProps<E> &
  VariantProps<typeof textVariants> & {
    color?: "primary" | "secondary";
  };

export const Text = <E extends ElementType = DefaultElement>({
  as,
  children,
  className,
  variant = "default",
  ...props
}: TextProps<E>) => {
  const Component = as ?? textElement[variant as keyof typeof textElement];

  return (
    <Component {...props} className={cn(textVariants({ variant, className }))}>
      {children}
    </Component>
  );
};

import { cn } from "@shared/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

export const textVariants = cva(cn(""), {
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
      /** Should be used for any descriptive text. */
      description: cn("text-muted-foreground text-sm font-normal"),
      /** Should be used for sections in body content interfaces like forms. */
      section: cn(""),
      /** Should be for controls or form labelss. */
      label: cn(""),
      /** Should be used in secondary interfaces or cases where the text
       * emphasis should be lower. Similar to description in styles. */
      small: cn(""),
      /** Same as description but with strong emphasis (bold). */
      strong: cn(""),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const defaultElement = "p";

export const textElement = {
  default: "p",
  title: "h1",
  subtitle: "h3",
  description: "p",
  section: "h2",
  label: "label",
  small: "p",
  strong: "strong",
};

type PolymorphicAsProp<E extends ElementType> = {
  as?: E;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>;

type TextProps<E extends ElementType = typeof defaultElement> =
  PolymorphicProps<E> &
    VariantProps<typeof textVariants> & {
      color?: "primary" | "secondary";
    };

export const Text = <E extends ElementType = typeof defaultElement>({
  as,
  children,
  className,
  href,
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

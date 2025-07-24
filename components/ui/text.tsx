import { cn } from "@shared/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes, ReactNode } from "react";
import { UrlObject } from "url";

export const textVariants = cva(cn(""), {
  variants: {
    variant: {
      /** Default equals to description. */
      default: cn("text-muted-foreground text-sm font-normal"),
      /** Should be used for any descriptive text. */
      description: cn("text-muted-foreground text-sm font-normal"),
      /** Should be for controls or form labelss. */
      label: cn(""),
      /** Should be used for text that could perform a redirection. */
      link: cn("text-muted-foreground text-sm font-normal underline"),
      /** Should be used for sections in body content interfaces like forms. */
      section: cn(""),
      /** Should be used in secondary interfaces or cases where the text
       * emphasis should be lower. Similar to description in styles. */
      small: cn(""),
      /** Same as description but with strong emphasis (bold). */
      strong: cn(""),
      /** Should be used for subtitles in layout sections inside a module or
       * inside body content interfaces. */
      subtitle: cn(""),
      /** Should be used for titles in layout sections inside a module or
       * inside body content interfaces. */
      title: cn("text-foreground text-2xl font-semibold"),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLLabelElement>,
    VariantProps<typeof textVariants> {
  children: ReactNode;
  href?: string | UrlObject;
}

export const Text: FC<TextProps> = ({
  children,
  className,
  href,
  variant,
  ...props
}) => {
  switch (variant) {
    case "description":
      return (
        <p {...props} className={cn(textVariants({ variant, className }))}>
          {children}
        </p>
      );
    case "label":
      return (
        <label {...props} className={cn(textVariants({ variant, className }))}>
          {children}
        </label>
      );
    case "link":
      return (
        <a
          href={String(href)}
          className={cn(textVariants({ variant, className }))}
        >
          {children}
        </a>
      );
    case "section":
      return (
        <h4 {...props} className={cn(textVariants({ variant, className }))}>
          {children}
        </h4>
      );
    case "small":
      return (
        <small {...props} className={cn(textVariants({ variant, className }))}>
          {children}
        </small>
      );
    case "strong":
      return (
        <strong {...props} className={cn(textVariants({ variant, className }))}>
          {children}
        </strong>
      );
    case "subtitle":
      return (
        <h3 {...props} className={cn(textVariants({ variant, className }))}>
          {children}
        </h3>
      );
    case "title":
      return (
        <h2 {...props} className={cn(textVariants({ variant, className }))}>
          {children}
        </h2>
      );
    case "default":
    default:
      return (
        <p {...props} className={cn(textVariants({ variant, className }))}>
          {children}
        </p>
      );
  }
};

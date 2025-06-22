import React, { Children, FC, ReactNode } from "react";
import { Divider } from "../divider";
import { cn } from "@/lib/utils";

/**
 * Props for the SectionHeader component.
 *
 * @typedef {Object} SectionHeaderProps
 * @property {ReactNode} [children] - Optional children elements to render
 * below the description.
 * @property {"left" | "right"} [orientation="right"] - The orientation of the
 * section header, determining the layout direction.
 * @property {string} title - The title of the section.
 * @property {string} description - The description of the section.
 */
export interface SectionHeaderProps {
  children?: ReactNode;
  orientation?: "left" | "right";
  title: string;
  description: string;
}

/**
 * SectionHeader renders a section header with a title, description,
 * and optional children. It supports configurableorientation to align the
 * content either to the left or right. It must be used at the top whenever a
 * section is created
 *
 * @component
 * @example
 * return (
 *   <SectionHeader
 *     title="Welcome to Our Platform"
 *     description="Discover the best properties available."
 *     orientation="left"
 *   >
 *     <p>Additional content goes here.</p>
 *   </SectionHeader>
 * )
 *
 * @param {SectionHeaderProps} props - The props for the component.
 * @returns {JSX.Element} A JSX element rendering the section header.
 */
export const SectionHeader: FC<SectionHeaderProps> = ({
  children,
  orientation = "right",
  title,
  description,
}) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center gap-8 px-8 py-8 lg:gap-16 lg:px-32 lg:py-16",
        "flex-col lg:flex-row",
        orientation === "right" ? "lg:flex-row" : "lg:flex-row-reverse",
      )}
    >
      <div className="flex w-full flex-col">
        <h2
          className={cn(
            "mx-6 text-4xl leading-tight font-medium text-black lg:text-6xl lg:leading-[64px]",
            "text-center lg:text-left",
            orientation === "left" ? "lg:text-right" : "lg:text-left",
          )}
        >
          {title}
        </h2>
        <Divider direction={orientation} colorScheme="default" />
      </div>
      <div className="flex w-full flex-col">
        <h3 className="text-left text-lg leading-6 font-medium lg:text-2xl lg:leading-8 lg:font-normal">
          {description}
        </h3>
        <div className="flex justify-center lg:justify-start">{children}</div>
      </div>
    </div>
  );
};

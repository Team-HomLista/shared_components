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
        "flex gap-16 py-16 px-32 justify-center items-center w-full",
        orientation === "right" ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div className="w-full flex flex-col">
        <h2
          className={cn(
            "text-black text-6xl font-medium leading-[64px] mx-6",
            orientation === "left" ? "text-right" : "text-left"
          )}
        >
          {title}
        </h2>
        <Divider direction={orientation} colorScheme="default" />
      </div>
      <div className="w-full flex flex-col">
        <h3 className="text-2xl justify-start">{description}</h3>
        {children}
      </div>
    </div>
  );
};

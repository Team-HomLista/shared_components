import { ArrowLeft, ArrowRight } from "lucide-react";
import { FC } from "react";

import { cn } from "@/lib/utils";

/**
 * Props for the Divider component.
 *
 * @property {"left" | "right"} direction - Determines the direction of the
 * divider's arrow.
 * @property {"default" | "white"} [colorScheme="default"] - Specifies the color
 * scheme of the divider.
 */
export interface DividerProps {
  direction: "left" | "right";
  colorScheme?: "default" | "white";
}

/**
 * Divider component that displays a horizontal line with an arrow icon.
 *
 * The component supports two directions (`left` or `right`) and two color
 * schemes (`default` or `white`).
 * It is styled using utility classes and dynamically adjusts its appearance
 * based on the provided props.
 *
 * @param {DividerProps} props - The props for the Divider component.
 * @returns {JSX.Element} The rendered Divider component.
 */
export const Divider: FC<DividerProps> = ({ direction, colorScheme = "default" }) => {
  const isWhite = colorScheme === "white";

  return (
    <div
      className={cn(
        "flex w-full items-center",
        direction === "left" ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Horizontal line */}
      <div className={cn("h-[1px] w-full", isWhite ? "bg-white/50" : "bg-primary/50")} />
      {/* Arrow icon container */}
      <div
        className={cn(
          "rounded-full border p-2",
          isWhite ? "bg-primary border-white/50 text-white" : "border-primary/50"
        )}
      >
        {direction === "left" ? (
          <ArrowLeft className={cn("size-4", isWhite ? "text-white" : "text-primary")} />
        ) : (
          <ArrowRight className={cn("size-4", isWhite ? "text-white" : "text-primary")} />
        )}
      </div>
    </div>
  );
};

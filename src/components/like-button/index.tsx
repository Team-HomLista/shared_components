import { HeartIcon } from "lucide-react";
import { FC } from "react";

import { cn } from "@/lib/utils";

export interface LikeButtonProps {
  isLiked: boolean;
  onClick: (e: any) => void;
  className?: string;
}

/**
 * LikeButton
 * reusable component that displays a heart icon.
 */
export const LikeButton: FC<LikeButtonProps> = ({ isLiked, onClick, className = "" }) => {
  return (
    <HeartIcon
      className={cn("stroke-primary top-4 right-4 h-6 w-6 cursor-pointer", className, {
        "fill-secondary": isLiked,
        "fill-transparent": !isLiked,
        "transition-colors duration-200": true
      })}
      onClick={onClick}
      aria-label={isLiked ? "Quitar de favoritos" : "Agregar a favoritos"}
      role="button"
    />
  );
};

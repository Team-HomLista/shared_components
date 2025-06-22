import { FC } from "react";
import { HeartIcon } from "lucide-react";

export interface LikeButtonProps {
  isLiked: boolean;
  onClick: () => void;
  className?: string;
}

/**
 * LikeButton
 * reusable component that displays a heart icon.
 */
export const LikeButton: FC<LikeButtonProps> = ({
  isLiked,
  onClick,
  className = "",
}) => {
  return (
    <HeartIcon
      className={`stroke-primary top-4 right-4 h-6 w-6 cursor-pointer ${className}`}
      style={{
        fill: isLiked ? "var(--accent)" : "transparent",
        transition: "fill 0.2s",
      }}
      onClick={onClick}
      aria-label={isLiked ? "Quitar de favoritos" : "Agregar a favoritos"}
      role="button"
    />
  );
};

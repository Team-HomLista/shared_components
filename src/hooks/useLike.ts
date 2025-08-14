import { useState, useCallback } from "react";

interface UseLikeReturn {
  /** Current liked state */
  isLiked: boolean;
  /** Function to toggle the like state */
  toggleLike: () => void;
  /** Function to set the like state directly */
  setLiked: (liked: boolean) => void;
}

/**
 * Custom hook for like functionality with state management
 *
 * @example
 * ```typescript
 * const { isLiked, toggleLike } = useLike(false);
 *
 * return (
 *   <button onClick={toggleLike}>
 *     {isLiked ? '❤️' : '🤍'}
 *   </button>
 * );
 * ```
 *
 * @param initialLiked - Initial liked state (default: false)
 * @returns Object with like functionality and status
 */
export function useLike(initialLiked: boolean = false): UseLikeReturn {
  const [isLiked, setIsLiked] = useState(initialLiked);

  const toggleLike = useCallback(() => {
    setIsLiked((prev) => !prev);
  }, []);

  const setLiked = useCallback((liked: boolean) => {
    setIsLiked(liked);
  }, []);

  return {
    isLiked,
    toggleLike,
    setLiked
  };
}

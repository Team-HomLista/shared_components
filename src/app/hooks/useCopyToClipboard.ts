import { useState, useCallback } from 'react';

interface UseCopyToClipboardReturn {
  /** Whether the text was successfully copied */
  isCopied: boolean;
  /** Function to copy text to clipboard */
  copyToClipboard: (text: string) => Promise<boolean>;
  /** Function to manually reset the copied status */
  resetCopyStatus: () => void;
}

/**
 * Custom hook for copy to clipboard functionality with auto-reset
 * 
 * @example
 * ```typescript
 * const { isCopied, copyToClipboard } = useCopyToClipboard();
 * 
 * const handleCopy = async () => {
 *   const success = await copyToClipboard('Hello World');
 *   if (success) {
 *     console.log('Text copied successfully');
 *   }
 * };
 * ```
 * 
 * @returns Object with copy functionality and status
 */
export function useCopyToClipboard(): UseCopyToClipboardReturn {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      
      // Reset copied status after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      
      return true;
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      setIsCopied(false);
      return false;
    }
  }, []);

  const resetCopyStatus = useCallback(() => {
    setIsCopied(false);
  }, []);

  return {
    isCopied,
    copyToClipboard,
    resetCopyStatus,
  };
}

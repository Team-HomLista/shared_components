"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button
} from "@shared/components/ui";
import { Loader2 } from "lucide-react";
import { createContext, useContext, useState } from "react";

/**
 * Represents the state configuration for the alert dialog
 */
type AlertDialogState = {
  /** Controls dialog visibility */
  isOpen: boolean;
  /** Dialog title text */
  title?: React.ReactNode;
  /** Dialog description text */
  description?: React.ReactNode;
  /** Custom React content to display in dialog body */
  content?: React.ReactNode;
  /** Confirm button text (default: "Confirmar") */
  confirmText?: string;
  /** Cancel button text (default: "Cancelar") */
  cancelText?: string;
  /** Additional props for confirm button component */
  confirmBtnProps?: React.ComponentProps<typeof Button>;
  /** Additional props for cancel button component */
  cancelBtnProps?: React.ComponentProps<typeof Button>;
  /** Async/non-async function to execute on confirmation */
  onConfirm?: () => void | Promise<void>;
  /** Async/non-async function to execute on cancellation */
  onCancel?: () => void | Promise<void>;
};

/**
 * Context for managing alert dialog state across components
 */
export const AlertDialogContext = createContext<{
  state: AlertDialogState;
  setState: React.Dispatch<React.SetStateAction<AlertDialogState>>;
}>({
  state: {
    isOpen: false
  },
  setState: () => {}
});

/**
 * Provider component that wraps your application to enable alert dialog functionality
 * @param children - Child components that will have access to the alert dialog
 */
export const AlertDialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [alertDialogState, setAlertDialogState] = useState<AlertDialogState>({
    isOpen: false
  });
  const [isLoading, setIsLoading] = useState({
    confirm: false,
    cancel: false
  });

  const {
    isOpen,
    title,
    description,
    content,
    confirmText,
    cancelText,
    confirmBtnProps,
    cancelBtnProps,
    onConfirm,
    onCancel
  } = alertDialogState;

  const handleOpenChange = (isOpen: boolean) => {
    setAlertDialogState((prev) => ({
      ...prev,
      isOpen
    }));
  };

  const handleConfirm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading((prev) => ({ ...prev, confirm: true }));
    await onConfirm?.();
    handleOpenChange(false);
    setIsLoading((prev) => ({ ...prev, confirm: false }));
  };

  const handleCancel = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading((prev) => ({ ...prev, cancel: true }));
    await onCancel?.();
    handleOpenChange(false);
    setIsLoading((prev) => ({ ...prev, cancel: false }));
  };

  return (
    <AlertDialogContext.Provider value={{ state: alertDialogState, setState: setAlertDialogState }}>
      <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
            {description && <AlertDialogDescription>{description}</AlertDialogDescription>}
          </AlertDialogHeader>

          {content}

          <AlertDialogFooter>
            <AlertDialogCancel
              disabled={isLoading.cancel || isLoading.confirm}
              onClick={handleCancel}
              {...cancelBtnProps}
            >
              {isLoading.cancel && <Loader2 className="size-4 animate-spin" />}
              <span>{cancelText ?? "Cancelar"}</span>
            </AlertDialogCancel>

            <AlertDialogAction
              disabled={isLoading.cancel || isLoading.confirm}
              onClick={handleConfirm}
              {...confirmBtnProps}
            >
              {isLoading.confirm && <Loader2 className="size-4 animate-spin" />}
              <span>{confirmText ?? "Confirmar"}</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {children}
    </AlertDialogContext.Provider>
  );
};

type UseAlertDialogProps = Omit<AlertDialogState, "isOpen">;

/**
 * Hook for triggering alert dialogs
 * @param {UseAlertDialogProps} [initialProps] - Default dialog configuration
 * @returns {Object} Dialog control methods
 * @property {function} showDialog - Opens dialog with custom configuration
 * @property {function} closeDialog - Programmatically closes open dialog
 *
 * @typedef {Omit<AlertDialogState, 'isOpen'>} UseAlertDialogProps
 *
 * @example
 * // Basic usage:
 * const { showDialog } = useAlertDialog();
 *
 * showDialog({
 *   title: "Delete Item",
 *   description: "Are you sure? This cannot be undone.",
 *   onConfirm: handleDelete,
 *   confirmText: "Delete",
 *   confirmBtnProps: { variant: "destructive" }
 * });
 *
 * @example
 * // With async operation:
 * const { showDialog } = useAlertDialog();
 *
 * showDialog({
 *   title: "Process Data",
 *   onConfirm: async () => {
 *     await fetch('/api/process');
 *   }
 * });
 *
 * @example
 * // With custom content:
 * showDialog({
 *   title: "Custom Content",
 *   content: (
 *     <div className="p-4">
 *       <ChartComponent />
 *     </div>
 *   )
 * });
 */
export const useAlertDialog = (initialProps: UseAlertDialogProps = {}) => {
  const { setState: setAlertDialogContextState } = useContext(AlertDialogContext);

  /**
   * Opens dialog with merged configuration (initial props + override options)
   * @param state - Configuration overrides for this dialog instance
   */
  function showDialog(state: UseAlertDialogProps = {}) {
    setAlertDialogContextState({ ...initialProps, ...state, isOpen: true });
  }

  /** Programmatically closes the currently open dialog */
  function closeDialog() {
    setAlertDialogContextState((prev) => ({ ...prev, isOpen: false }));
  }

  return {
    showDialog,
    closeDialog
  };
};

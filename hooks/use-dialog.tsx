import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@shared/components/ui";
import { createContext, useContext, useEffect, useState } from "react";

/**
 * Represents the state of a dialog component
 */
type DialogState = {
  /** Controls dialog visibility */
  isOpen: boolean;
  /** show close button */
  showCloseButton?: boolean;
  /** Prevent closing dialog when clicking outside of it */
  preventCloseOnOutsideClick?: boolean;
  /** Dialog title text */
  title?: React.ReactNode;
  /** Dialog description text */
  description?: React.ReactNode;
  /** Custom React content to display in dialog body */
  content?: React.ReactNode;
  /** Custom React content to display in dialog footer */
  footer?: React.ReactNode;
};

/**
 * Context for managing dialog state across components
 */
export const DialogContext = createContext<{
  state: DialogState;
  setState: React.Dispatch<React.SetStateAction<DialogState>>;
}>({
  state: {
    isOpen: false,
  },
  setState: () => {},
});

/**
 * Provider component that wraps your application to enable dialog functionality
 * @param children - Child components that will have access to the dialog
 */
export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [dialogState, setDialogState] = useState<DialogState>({
    isOpen: false,
  });

  const {
    isOpen,
    showCloseButton,
    title,
    description,
    content,
    footer,
    preventCloseOnOutsideClick,
  } = dialogState;

  const handleOpenChange = (isOpen: boolean) => {
    setDialogState((prev) => ({
      ...prev,
      isOpen,
    }));
  };

  return (
    <DialogContext.Provider
      value={{ state: dialogState, setState: setDialogState }}
    >
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent
          showCloseButton={showCloseButton}
          {...(preventCloseOnOutsideClick
            ? {
                onEscapeKeyDown: (e) => e.preventDefault(),
                onPointerDownOutside: (e) => e.preventDefault(),
                onInteractOutside: (e) => e.preventDefault(),
              }
            : {})}
        >
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>

          {content}

          {footer && <DialogFooter>{footer}</DialogFooter>}
        </DialogContent>
      </Dialog>

      {children}
    </DialogContext.Provider>
  );
};

type UseDialogProps = Omit<DialogState, "isOpen"> & {
  onClose?: () => void;
};

/**
 * Custom hook for showing and closing dialogs
 *
 * @param initialProps - Default dialog properties (optional)
 * @returns { showDialog, closeDialog } - Functions to control the dialog
 *
 * Basic usage:
 * ```tsx
 * const { showDialog, closeDialog } = useDialog();
 *
 * // Show dialog with basic content
 * showDialog({
 *   title: "Notification",
 *   description: "Operation completed successfully!"
 * });
 *
 * // Show complex dialog
 * showDialog({
 *   title: "Delete Item",
 *   description: "This action cannot be undone",
 *   content: <ItemPreview item={selectedItem} />,
 *   footer: (
 *     <>
 *       <Button onClick={closeDialog}>Cancel</Button>
 *       <Button variant="destructive" onClick={handleDelete}>
 *         Delete
 *       </Button>
 *     </>
 *   ),
 *   showCloseButton: false
 * });
 * ```
 *
 * Pre-configured dialog example:
 * ```tsx
 * const confirmDialog = useDialog({
 *   title: "Confirmation",
 *   showCloseButton: true
 * });
 *
 * // Then use with custom content:
 * confirmDialog.showDialog({
 *   description: "Are you sure?",
 *   content: <p>This will delete all your data</p>
 * });
 * ```
 */
export const useDialog = ({
  onClose,
  ...initialProps
}: UseDialogProps = {}) => {
  const { state, setState: setDialogContextState } = useContext(DialogContext);

  function showDialog(state: UseDialogProps = {}) {
    setDialogContextState({ ...initialProps, ...state, isOpen: true });
  }

  function closeDialog() {
    setDialogContextState((prev) => ({ ...prev, isOpen: false }));
  }

  useEffect(() => {
    if (!state.isOpen) {
      onClose?.();
    }
  }, [state.isOpen]);

  return {
    showDialog,
    closeDialog,
  };
};

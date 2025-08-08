import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@shared/components/ui";
import { createContext, useContext, useMemo, useState } from "react";

type DialogState = {
  isOpen: boolean;
  showCloseButton?: boolean;
  title?: string;
  description?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
};

export const DialogContext = createContext<{
  state: DialogState;
  setState: React.Dispatch<React.SetStateAction<DialogState>>;
}>({
  state: {
    isOpen: false,
  },
  setState: () => {},
});

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [dialogState, setDialogState] = useState<DialogState>({
    isOpen: false,
  });

  const { isOpen, showCloseButton, title, description, content, footer } =
    dialogState;

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
        <DialogContent showCloseButton={showCloseButton}>
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

type UseDialogProps = Omit<DialogState, "isOpen">;

/**
 * Hook to manage dialog state
 *
 * @param {UseDialogProps} { title, description, content, footer }
 * @returns {
 *  showDialog: (state?: UseDialogProps) => void;
 *  closeDialog: () => void;
 * }
 *
 * @example
 * // Define dialog with initial state
 * const { showDialog, closeDialog } = useDialog({
 *  title: "test",
 *  description: "test",
 *  content: <div>test</div>,
 *  footer: <div>test</div>,
 *  showCloseButton: true,
 * });
 * // To show dialog
 * showDialog();
 * // To close dialog
 * closeDialog();
 * // To show dialog with custom state
 * showDialog({
 *  title: "test",
 *  description: "test",
 *  content: <div>test</div>,
 *  footer: <div>test</div>,
 *  showCloseButton: true,
 * });
 *
 */
export const useDialog = (initialProps: UseDialogProps = {}) => {
  const { setState: setDialogContextState } = useContext(DialogContext);

  function showDialog(state: UseDialogProps = {}) {
    setDialogContextState({ ...initialProps, ...state, isOpen: true });
  }

  function closeDialog() {
    setDialogContextState((prev) => ({ ...prev, isOpen: false }));
  }

  return {
    showDialog,
    closeDialog,
  };
};

type UseConfirmDialogProps = {
  confirmText?: string;
  cancelText?: string;
  confirmBtnProps?: React.ComponentProps<typeof Button>;
  cancelBtnProps?: React.ComponentProps<typeof Button>;
  onConfirm: () => void;
  onCancel?: () => void;
} & Omit<DialogState, "isOpen" | "footer">;

/**
 * Hook to show a confirm dialog
 * @param {UseConfirmDialogProps} props
 * @returns {showDialog: (state?: UseDialogProps) => void, closeDialog: () => void}
 * @example
 * // Define dialog with initial state
 * const { showDialog, closeDialog } = useConfirmDialog({
 *  title: "Confirmar",
 *  description: "¿Deseas realmente excluir este item?",
 *  onConfirm: () => console.log("Confirmado"),
 *  onCancel: () => console.log("Cancelado"),
 * });
 * // Show dialog
 * showDialog();
 * // Close dialog
 * closeDialog();
 * // Show dialog with custom state
 * showDialog({
 *  title: "Confirmar",
 *  description: "¿Deseas realmente excluir este item?",
 * });
 *
 */
export const useConfirmDialog = ({
  confirmText,
  cancelText,
  confirmBtnProps,
  cancelBtnProps,
  onConfirm,
  onCancel,
  ...initialProps
}: UseConfirmDialogProps) => {
  const { showDialog, closeDialog } = useDialog(initialProps);

  const footer = useMemo(() => {
    const handleConfirm = () => {
      onConfirm();
      closeDialog();
    };

    const handleCancel = () => {
      onCancel?.();
      closeDialog();
    };

    return (
      <>
        <Button variant="outline" {...cancelBtnProps} onClick={handleCancel}>
          {cancelText ?? "Cancelar"}
        </Button>
        <Button {...confirmBtnProps} onClick={handleConfirm}>
          {confirmText ?? "Confirmar"}
        </Button>
      </>
    );
  }, [
    confirmText,
    cancelText,
    confirmBtnProps,
    cancelBtnProps,
    onConfirm,
    onCancel,
  ]);

  const showConfirmDialog = (props: Partial<UseConfirmDialogProps> = {}) => {
    showDialog({
      ...props,
      footer,
    });
  };

  return {
    showDialog: showConfirmDialog,
    closeDialog,
  };
};

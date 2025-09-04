"use client";

import { type Editor } from "@tiptap/react";
import * as React from "react";

import { ImagePlusIcon } from "@/components/tiptap/tiptap-icons/image-plus-icon";
import type { ButtonProps } from "@/components/tiptap/tiptap-ui-primitive/button";
import { Button } from "@/components/tiptap/tiptap-ui-primitive/button";
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";

export interface ImageUploadButtonProps extends ButtonProps {
  editor?: Editor | null;
  text?: string;
  extensionName?: string;
}

export function isImageActive(editor: Editor | null, extensionName: string): boolean {
  if (!editor) return false;
  return editor.isActive(extensionName);
}

export function insertImage(editor: Editor | null, extensionName: string): boolean {
  if (!editor) return false;

  return editor
    .chain()
    .focus()
    .insertContent({
      type: extensionName
    })
    .run();
}

export function useImageUploadButton(
  editor: Editor | null,
  extensionName: string = "imageUpload",
  disabled: boolean = false
) {
  const isActive = isImageActive(editor, extensionName);
  const handleInsertImage = React.useCallback(() => {
    if (disabled) return false;
    return insertImage(editor, extensionName);
  }, [editor, extensionName, disabled]);

  return {
    isActive,
    handleInsertImage
  };
}

export const ImageUploadButton = React.forwardRef<HTMLButtonElement, ImageUploadButtonProps>(
  (
    {
      editor: providedEditor,
      extensionName = "imageUpload",
      text,
      className = "",
      disabled,
      onClick,
      children,
      ...buttonProps
    },
    ref
  ) => {
    const editor = useTiptapEditor(providedEditor);
    const { isActive, handleInsertImage } = useImageUploadButton(editor, extensionName, disabled);

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);

        if (!e.defaultPrevented && !disabled) {
          handleInsertImage();
        }
      },
      [onClick, disabled, handleInsertImage]
    );

    if (!editor || !editor.isEditable) {
      return null;
    }

    return (
      <Button
        ref={ref}
        aria-label="Add image"
        aria-pressed={isActive}
        className={className.trim()}
        data-active-state={isActive ? "on" : "off"}
        data-style="ghost"
        role="button"
        tabIndex={-1}
        tooltip="Add image"
        type="button"
        onClick={handleClick}
        {...buttonProps}
      >
        {children || (
          <>
            <ImagePlusIcon className="tiptap-button-icon" />
            {text && <span className="tiptap-button-text">{text}</span>}
          </>
        )}
      </Button>
    );
  }
);

ImageUploadButton.displayName = "ImageUploadButton";

export default ImageUploadButton;

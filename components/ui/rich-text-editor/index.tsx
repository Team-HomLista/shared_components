import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator
} from "@shared/components/tiptap/tiptap-ui-primitive/toolbar";
import { cn } from "@shared/lib/utils";
import {
  EditorContent,
  EditorContext,
  useCurrentEditor,
  useEditor,
  UseEditorOptions
} from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import React, { ReactNode } from "react";

/** Styles */
import "@shared/components/tiptap/tiptap-node/code-block-node/code-block-node.scss";
import "@shared/components/tiptap/tiptap-node/image-node/image-node.scss";
import "@shared/components/tiptap/tiptap-node/list-node/list-node.scss";
import "@shared/components/tiptap/tiptap-node/paragraph-node/paragraph-node.scss";
import "@shared/components/tiptap/tiptap-node/table-node/table-node.scss";
import "@shared/components/ui/rich-text-editor/style.css";

/* -------------------------------------------------------------------------------------------------
 * RichTextEditorRoot
 * -----------------------------------------------------------------------------------------------*/
export interface RichTextEditorRootProps extends UseEditorOptions {
  children?: ReactNode | undefined;
}

const RichTextEditorRoot = ({
  children,
  immediatelyRender = false,
  extensions,
  ...options
}: RichTextEditorRootProps) => {
  const editor = useEditor({
    ...options,
    immediatelyRender,
    extensions: [StarterKit, ...(extensions ?? [])]
  });

  return <EditorContext.Provider value={{ editor }}>{children}</EditorContext.Provider>;
};

/* -------------------------------------------------------------------------------------------------
 * RichTextEditorToolbar
 * -----------------------------------------------------------------------------------------------*/
const RichTextEditorToolbar = ({ ...props }: React.ComponentProps<typeof Toolbar>) => {
  return <Toolbar {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * RichTextEditorToolbarGroup
 * -----------------------------------------------------------------------------------------------*/
const RichTextEditorToolbarGroup = ({ ...props }: React.ComponentProps<typeof ToolbarGroup>) => {
  return <ToolbarGroup {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * RichTextEditorToolbarSeparator
 * -----------------------------------------------------------------------------------------------*/
const RichTextEditorToolbarSeparator = ({
  ...props
}: React.ComponentProps<typeof ToolbarSeparator>) => {
  return <ToolbarSeparator {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * RichTextEditorWrapper
 * -----------------------------------------------------------------------------------------------*/
const RichTextEditorWrapper = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cn("content-wrapper", className)} {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * RichTextEditorContent
 * -----------------------------------------------------------------------------------------------*/
const RichTextEditorContent = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof EditorContent>, "editor">) => {
  const { editor } = useCurrentEditor();

  return (
    <EditorContent
      editor={editor}
      role="presentation"
      className={cn("editor-content", className)}
      {...props}
    />
  );
};

export const RichTextEditor = RichTextEditorRoot as typeof RichTextEditorRoot & {
  Toolbar: typeof RichTextEditorToolbar;
  ToolbarGroup: typeof RichTextEditorToolbarGroup;
  ToolbarSeparator: typeof RichTextEditorToolbarSeparator;
  Wrapper: typeof RichTextEditorWrapper;
  Content: typeof RichTextEditorContent;
  displayName: string;
};
RichTextEditor.displayName = "RichTextEditor";
RichTextEditor.Toolbar = RichTextEditorToolbar;
RichTextEditor.ToolbarGroup = RichTextEditorToolbarGroup;
RichTextEditor.ToolbarSeparator = RichTextEditorToolbarSeparator;
RichTextEditor.Wrapper = RichTextEditorWrapper;
RichTextEditor.Content = RichTextEditorContent;

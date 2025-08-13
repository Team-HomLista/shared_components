import { Selection } from "@shared/components/tiptap/tiptap-extension/selection-extension";
import TrailingNode from "@shared/components/tiptap/tiptap-extension/trailing-node-extension";
import { ArrowLeftIcon } from "@shared/components/tiptap/tiptap-icons/arrow-left-icon";
import { HighlighterIcon } from "@shared/components/tiptap/tiptap-icons/highlighter-icon";
import { LinkIcon } from "@shared/components/tiptap/tiptap-icons/link-icon";
import {
  ImageUploadNode,
  ImageUploadNodeOptions
} from "@shared/components/tiptap/tiptap-node/image-upload-node";
import { BlockquoteButton } from "@shared/components/tiptap/tiptap-ui/blockquote-button";
import { CodeBlockButton } from "@shared/components/tiptap/tiptap-ui/code-block-button";
import {
  ColorHighlightPopover,
  ColorHighlightPopoverButton,
  ColorHighlightPopoverContent
} from "@shared/components/tiptap/tiptap-ui/color-highlight-popover";
import { HeadingDropdownMenu } from "@shared/components/tiptap/tiptap-ui/heading-dropdown-menu";
import { ImageUploadButton } from "@shared/components/tiptap/tiptap-ui/image-upload-button";
import {
  LinkButton,
  LinkContent,
  LinkPopover
} from "@shared/components/tiptap/tiptap-ui/link-popover";
import { ListDropdownMenu } from "@shared/components/tiptap/tiptap-ui/list-dropdown-menu";
import { MarkButton } from "@shared/components/tiptap/tiptap-ui/mark-button";
import { TextAlignButton } from "@shared/components/tiptap/tiptap-ui/text-align-button";
import { UndoRedoButton } from "@shared/components/tiptap/tiptap-ui/undo-redo-button";
import { Button } from "@shared/components/tiptap/tiptap-ui-primitive/button";
import { handleImageUpload, MAX_FILE_SIZE } from "@shared/lib/tiptap-utils";
import { Highlight, HighlightOptions } from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link, { LinkOptions } from "@tiptap/extension-link";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TaskItem, { TaskItemOptions } from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign, { TextAlignOptions } from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import Underline from "@tiptap/extension-underline";
import { useState } from "react";
import GlobalDragHandle from "tiptap-extension-global-drag-handle";

import { RichTextEditor, RichTextEditorRootProps } from ".";

export const MainToolbarContent = ({
  onHighlighterClick,
  onLinkClick,
  isMobile
}: {
  onHighlighterClick: () => void;
  onLinkClick: () => void;
  isMobile: boolean;
}) => {
  return (
    <>
      <RichTextEditor.ToolbarGroup>
        <UndoRedoButton action="undo" />
        <UndoRedoButton action="redo" />
      </RichTextEditor.ToolbarGroup>

      <RichTextEditor.ToolbarSeparator />

      <RichTextEditor.ToolbarGroup>
        <HeadingDropdownMenu levels={[1, 2, 3, 4]} />
        <ListDropdownMenu types={["bulletList", "orderedList", "taskList"]} />
        <BlockquoteButton />
        <CodeBlockButton />
      </RichTextEditor.ToolbarGroup>

      <RichTextEditor.ToolbarSeparator />

      <RichTextEditor.ToolbarGroup>
        <MarkButton type="bold" />
        <MarkButton type="italic" />
        <MarkButton type="strike" />
        <MarkButton type="code" />
        <MarkButton type="underline" />
        {!isMobile ? (
          <ColorHighlightPopover />
        ) : (
          <ColorHighlightPopoverButton onClick={onHighlighterClick} />
        )}
        {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
      </RichTextEditor.ToolbarGroup>

      <RichTextEditor.ToolbarSeparator />

      <RichTextEditor.ToolbarGroup>
        <MarkButton type="superscript" />
        <MarkButton type="subscript" />
      </RichTextEditor.ToolbarGroup>

      <RichTextEditor.ToolbarSeparator />

      <RichTextEditor.ToolbarGroup>
        <TextAlignButton align="left" />
        <TextAlignButton align="center" />
        <TextAlignButton align="right" />
        <TextAlignButton align="justify" />
      </RichTextEditor.ToolbarGroup>

      <RichTextEditor.ToolbarSeparator />

      <RichTextEditor.ToolbarGroup>
        <ImageUploadButton text="Add" />
      </RichTextEditor.ToolbarGroup>
    </>
  );
};

export const MobileToolbarContent = ({
  type,
  onBack
}: {
  type: "highlighter" | "link";
  onBack: () => void;
}) => (
  <>
    <RichTextEditor.ToolbarGroup>
      <Button data-style="ghost" onClick={onBack}>
        <ArrowLeftIcon className="tiptap-button-icon" />
        {type === "highlighter" ? (
          <HighlighterIcon className="tiptap-button-icon" />
        ) : (
          <LinkIcon className="tiptap-button-icon" />
        )}
      </Button>
    </RichTextEditor.ToolbarGroup>

    <RichTextEditor.ToolbarSeparator />

    {type === "highlighter" ? <ColorHighlightPopoverContent /> : <LinkContent />}
  </>
);

interface RichTextEditorAdvancedProps
  extends Pick<
    RichTextEditorRootProps,
    "content" | "autofocus" | "editable" | "extensions" | "onUpdate"
  > {
  textAlignOptions?: Partial<TextAlignOptions>;
  taskItemOptions?: Partial<TaskItemOptions>;
  highlightOptions?: Partial<HighlightOptions>;
  imageUploadNodeOptions?: Partial<ImageUploadNodeOptions>;
  linkOptions?: Partial<LinkOptions>;
}

export const RichTextEditorAdvanced = ({
  textAlignOptions = { types: ["heading", "paragraph"] },
  taskItemOptions = { nested: true },
  highlightOptions = { multicolor: true },
  imageUploadNodeOptions = {
    accept: "image/*",
    limit: 3,
    maxSize: MAX_FILE_SIZE,
    upload: handleImageUpload,
    onError: (error) => console.error("Upload failed:", error)
  },
  linkOptions = { openOnClick: false },
  extensions = [],
  ...props
}: RichTextEditorAdvancedProps) => {
  const [mobileView, setMobileView] = useState<"main" | "highlighter" | "link">("main");

  return (
    <RichTextEditor
      {...props}
      extensions={[
        TextAlign.configure(textAlignOptions),
        Underline,
        TaskList,
        TaskItem.configure(taskItemOptions),
        Highlight.configure(highlightOptions),
        Image,
        Typography,
        Superscript,
        Subscript,
        Selection,
        ImageUploadNode.configure(imageUploadNodeOptions),
        TrailingNode,
        Link.configure(linkOptions),
        GlobalDragHandle,
        ...extensions
      ]}
    >
      <RichTextEditor.Toolbar>
        {mobileView === "main" ? (
          <MainToolbarContent
            onHighlighterClick={() => setMobileView("highlighter")}
            onLinkClick={() => setMobileView("link")}
            isMobile={false}
          />
        ) : (
          <MobileToolbarContent
            type={mobileView === "highlighter" ? "highlighter" : "link"}
            onBack={() => setMobileView("main")}
          />
        )}
      </RichTextEditor.Toolbar>
      <RichTextEditor.Wrapper>
        <RichTextEditor.Content />
      </RichTextEditor.Wrapper>
    </RichTextEditor>
  );
};

import { BlockquoteButton } from "@shared/components/tiptap/tiptap-ui/blockquote-button";
import { ColorHighlightPopover } from "@shared/components/tiptap/tiptap-ui/color-highlight-popover";
import { LinkPopover } from "@shared/components/tiptap/tiptap-ui/link-popover";
import { ListDropdownMenu } from "@shared/components/tiptap/tiptap-ui/list-dropdown-menu";
import { MarkButton } from "@shared/components/tiptap/tiptap-ui/mark-button";
import { TextAlignButton } from "@shared/components/tiptap/tiptap-ui/text-align-button";
import { StoryObj } from "@storybook/react";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import GlobalDragHandle from "tiptap-extension-global-drag-handle";

import { RichTextEditor } from ".";

const meta = {
  title: "Components/RichTextEditor",
  component: RichTextEditor
};

const Container: React.FC<React.ComponentProps<"p">> = ({ children }) => {
  return (
    <div className="m-6 flex flex-1 items-center justify-center">
      <div className="max-h-96 max-w-2xl flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

const CONTENT = `
<h1>Texto de Prueba para RichTextEditor</h1>

<h2>Este es un subtítulo H2</h2>

<p>Este es un párrafo normal con <strong>texto en negrita</strong>, <em>texto en cursiva</em> y <u>texto subrayado</u>. También tiene <span style="color: #ff0000;">texto en rojo</span> y <span style="background-color: #ffff00;">resaltado amarillo</span>.</p>

<h3>Listas:</h3>

<ul>
  <li>Elemento de lista desordenada 1</li>
  <li>Elemento de lista desordenada 2</li>
  <li>Elemento de lista desordenada 3</li>
</ul>

<ol>
  <li>Elemento ordenado 1</li>
  <li>Elemento ordenado 2</li>
  <li>Elemento ordenado 3</li>
</ol>

<h3>Tabla:</h3>

<table border="1" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
      <th>Encabezado 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Celda 1</td>
      <td>Celda 2</td>
      <td>Celda 3</td>
    </tr>
    <tr>
      <td>Celda 4</td>
      <td>Celda 5</td>
      <td>Celda 6</td>
    </tr>
  </tbody>
</table>

<h3>Enlaces e imágenes:</h3>

<p>Visita <a href="https://www.google.com" target="_blank">Google</a> para más información.</p>

<p>Imagen de muestra:</p>
<img src="https://placehold.co/600x400" alt="Imagen de prueba" style="max-width: 100%;">

<h3>Cita textual:</h3>

<blockquote>
  <p>Esta es una cita textual de ejemplo para probar el formato de bloque.</p>
  <footer>- Autor Desconocido</footer>
</blockquote>

<h3>Texto con alineación:</h3>

<p style="text-align: left;">Texto alineado a la izquierda</p>
<p style="text-align: center;">Texto centrado</p>
<p style="text-align: right;">Texto alineado a la derecha</p>

<h3>Línea horizontal:</h3>

<hr>

<p>Texto final para comprobar el formato completo.</p>
`;

const EXTENSIONS = [
  TaskList,
  TaskItem.configure({ nested: true }),
  Image,
  Link,
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  Highlight.configure({ multicolor: true }),
  Underline,
  Table.configure({
    resizable: true
  }),
  TableRow,
  TableHeader,
  TableCell
];

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: Story = {
  render: (args) => (
    <Container>
      <RichTextEditor {...args}>
        <RichTextEditor.Wrapper>
          <RichTextEditor.Content />
        </RichTextEditor.Wrapper>
      </RichTextEditor>
    </Container>
  )
};

export const Default: Story = {
  ...TemplateDefault,
  args: {
    content: CONTENT,
    extensions: EXTENSIONS
  }
};

const TemplateWithToolbar: Story = {
  render: (args) => {
    return (
      <Container>
        <RichTextEditor {...args}>
          <RichTextEditor.Toolbar variant="fixed">
            <RichTextEditor.ToolbarGroup>
              <ListDropdownMenu types={["bulletList", "orderedList", "taskList"]} />
              <BlockquoteButton />
            </RichTextEditor.ToolbarGroup>

            <RichTextEditor.ToolbarSeparator />

            <RichTextEditor.ToolbarGroup>
              <MarkButton type="bold" />
              <MarkButton type="italic" />
              <MarkButton type="strike" />
              <MarkButton type="underline" />
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
              <ColorHighlightPopover />
              <LinkPopover />
            </RichTextEditor.ToolbarGroup>
          </RichTextEditor.Toolbar>
          <RichTextEditor.Wrapper>
            <RichTextEditor.Content />
          </RichTextEditor.Wrapper>
        </RichTextEditor>
      </Container>
    );
  }
};

export const withToolbar: Story = {
  ...TemplateWithToolbar,
  args: {
    content: CONTENT,
    extensions: EXTENSIONS
  }
};

export const asBlock: Story = {
  ...TemplateWithToolbar,
  args: {
    content: CONTENT,
    extensions: [...EXTENSIONS, GlobalDragHandle]
  }
};

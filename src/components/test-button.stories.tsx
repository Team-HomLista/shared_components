import type { Meta, StoryObj } from "@storybook/react";

// Simple test component
const TestButton = ({ children, ...props }: { children: React.ReactNode }) => (
  <button {...props} style={{ padding: "8px 16px", background: "#0070f3", color: "white", border: "none", borderRadius: "4px" }}>
    {children}
  </button>
);

const meta: Meta<typeof TestButton> = {
  title: "Test/TestButton",
  component: TestButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Test Button",
  },
};

export const LongText: Story = {
  args: {
    children: "This is a test button with longer text",
  },
};
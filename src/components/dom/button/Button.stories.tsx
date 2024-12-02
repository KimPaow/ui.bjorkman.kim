import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    fluid: { control: "boolean" },
    style: { control: "select", options: ["text", "solid"] },
    children: { control: "text" },
  },
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const FluidSolid: Story = {
  args: {
    fluid: true,
    style: "solid",
  },
};

export const FluidText: Story = {
  args: {
    fluid: true,
    style: "text",
  },
};

export const Solid: Story = {
  args: {
    fluid: false,
    style: "solid",
  },
};

export const Text: Story = {
  args: {
    fluid: false,
    style: "text",
  },
};

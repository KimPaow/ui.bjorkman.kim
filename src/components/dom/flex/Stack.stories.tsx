import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";

import { Stack } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    gap: { control: "string" },
    basis: { control: "string" },
    align: { control: "string" },
    justify: {
      control: "select",
      defaultValue: "normal",
      options: [
        "normal",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "left",
        "right",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
      ],
    },
  },
  args: {
    gap: "3",
    children: (
      <Fragment>
        <p>Child</p>
        <p>Child</p>
        <p>Child</p>
      </Fragment>
    ),
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    gap: "3",
  },
};

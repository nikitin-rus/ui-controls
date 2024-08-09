import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: "select",
    },
    size: {
      options: ["default", "small"],
      control: "radio",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

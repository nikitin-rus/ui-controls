import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components";
import { useArgs } from "@storybook/preview-api";
import { fn } from "@storybook/test";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  args: {
    value: "Input Text",
    placeholder: "Placeholder",
    label: "Label Text",
    disabled: false,
    onChange: fn(),
  },
  argTypes: {
    variant: {
      options: ["default", "error", "success"],
      control: "select",
    },
  },
  render: (args) => {
    const [{ onChange }, updateArgs] = useArgs<typeof args>();

    return (
      <Input
        {...args}
        onChange={(e) => {
          if (onChange) onChange(e);
          updateArgs({ value: e.target.value });
        }}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    variant: "error",
    error: "Error Message",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  args: {
    value: "Input Text",
    placeholder: "Placeholder",
    label: "Label Text",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["default", "error", "success"],
      control: "select",
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs<typeof args>();

    return (
      <Input
        {...args}
        onChange={(e) => updateArgs({ value: e.target.value })}
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

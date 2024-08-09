import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../components";
import { useArgs } from "@storybook/preview-api";
import { fn } from "@storybook/test";

const meta: Meta<typeof TextArea> = {
  title: "TextArea",
  component: TextArea,
  args: {
    label: "Label Text",
    value: "I'm fine",
    placeholder: "What's up?",
    disabled: false,
    onChange: fn(),
  },
  render: (args) => {
    const [{ onChange }, updateArgs] = useArgs<typeof args>();

    return (
      <TextArea
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

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  name: "TextArea",
};

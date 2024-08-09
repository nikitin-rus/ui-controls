import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../components";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof TextArea> = {
  title: "TextArea",
  component: TextArea,
  args: {
    label: "Label Text",
    value: "I'm fine",
    placeholder: "What's up?",
    disabled: false,
  },
  render: (args) => {
    const [, updateArgs] = useArgs<typeof args>();

    return (
      <TextArea
        {...args}
        onChange={(e) => updateArgs({ value: e.target.value })}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  name: "TextArea",
};

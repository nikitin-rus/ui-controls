import type { Meta, StoryObj } from "@storybook/react";
import { Limit } from "../components";
import { useArgs } from "@storybook/preview-api";
import { fn } from "@storybook/test";

const meta: Meta<typeof Limit> = {
  title: "Limit",
  component: Limit,
  args: {
    limits: [15, 30, 50],
    limitIndex: 0,
    onLimitChange: fn(),
  },
  render: (args) => {
    const [{ onLimitChange }, updateArgs] = useArgs<typeof args>();

    return (
      <Limit
        {...args}
        onLimitChange={(limitIndex) => {
          if (onLimitChange) onLimitChange(limitIndex);
          updateArgs({ limitIndex });
        }}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof Limit>;

export const Default: Story = {
  name: "Limit",
};

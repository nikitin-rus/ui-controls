import type { Meta, StoryObj } from "@storybook/react";
import { Limit } from "../components";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof Limit> = {
  title: "Limit",
  component: Limit,
  args: {
    limits: [15, 30, 50],
    limitIndex: 0,
  },
  render: (args) => {
    const [, updateArgs] = useArgs<typeof args>();

    return (
      <Limit
        {...args}
        onLimitChange={(limitIndex) => updateArgs({ limitIndex })}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof Limit>;

export const Default: Story = {
  name: "Limit",
};

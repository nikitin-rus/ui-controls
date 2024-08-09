import type { Meta, StoryObj } from "@storybook/react";
import { Limit } from "../components";
import { useState } from "react";

const meta: Meta<typeof Limit> = {
  title: "Limit",
  component: Limit,
  args: {
    limits: [15, 30, 50],
    limitIndex: 0,
  },
  render: ({ limitIndex: initialLimitIndex = 0, ...args }) => {
    const [limitIndex, setLimitIndex] = useState(initialLimitIndex);
    
    return (
      <Limit onLimitChange={setLimitIndex} limitIndex={limitIndex} {...args} />
    );
  },
};

export default meta;

type Story = StoryObj<typeof Limit>;

export const Default: Story = {
  name: "Limit",
};

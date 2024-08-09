import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "../components";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof Search> = {
  title: "Search",
  component: Search,
  args: {
    value: "Search Text",
    placeholder: "Placeholder",
    label: "Label Text",
    disabled: false,
  },
  render: (args) => {
    const [, updateArgs] = useArgs<typeof args>();

    return (
      <Search
        {...args}
        onChange={(e) => updateArgs({ value: e.target.value })}
        onClear={() => updateArgs({ value: "" })}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  name: "Search",
};

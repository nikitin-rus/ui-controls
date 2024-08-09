import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
  args: {
    disabled: false,
    options: [
      {
        name: "relevant",
        value: "По релевантности",
      },
      {
        name: "popular",
        value: "По популярности",
      },
      {
        name: "cheap",
        value: "По возрастанию цены",
      },
      {
        name: "expensive",
        value: "По убыванию цены",
      },
    ],
    selectedIndex: 0,
  },
  render: (args) => {
    const [, updateArgs] = useArgs<typeof args>();

    return (
      <Select
        {...args}
        onSelect={(selectedIndex) => updateArgs({ selectedIndex })}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  name: "Select",
};

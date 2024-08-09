import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "../components";
import { useArgs } from "@storybook/preview-api";
import { fn } from "@storybook/test";

const meta: Meta<typeof Search> = {
  title: "Search",
  component: Search,
  args: {
    value: "Search Text",
    placeholder: "Placeholder",
    label: "Label Text",
    disabled: false,
    onChange: fn(),
    onClear: fn(),
    onSearch: fn(),
  },
  render: (args) => {
    const [{ onChange, onClear, onSearch }, updateArgs] =
      useArgs<typeof args>();

    return (
      <Search
        {...args}
        onChange={(e) => {
          if (onChange) onChange(e);
          updateArgs({ value: e.target.value });
        }}
        onClear={() => {
          if (onClear) onClear();
          updateArgs({ value: "" });
        }}
        onSearch={() => {
          if (onSearch) onSearch();
        }}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  name: "Search",
};

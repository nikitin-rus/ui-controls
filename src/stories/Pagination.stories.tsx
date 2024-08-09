import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof Pagination> = {
  title: "Pagination",
  component: Pagination,
  args: {
    pagesCount: 10,
    currentPage: 1,
  },
  render: (args) => {
    const [, updateArgs] = useArgs<typeof args>();

    return (
      <Pagination
        {...args}
        onNavigate={(page) => updateArgs({ currentPage: page })}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Plain: Story = {
  args: {
    pagesCount: 5,
    currentPage: 1,
  },
};

export const Full: Story = {
  args: {
    pagesCount: 25,
    currentPage: 1,
  },
};

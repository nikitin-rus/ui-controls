import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "Pagination",
  component: Pagination,
  args: {
    pagesCount: 10,
    currentPage: 1,
  },
  render: ({ currentPage: initialCurrentPage = 1, ...args }) => {
    const [currentPage, setCurrentPage] = useState(initialCurrentPage);

    return (
      <Pagination
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
        {...args}
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

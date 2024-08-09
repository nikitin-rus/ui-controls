import type { Meta, StoryObj } from "@storybook/react";
import { TypographyList } from "./TypographyList";

const meta: Meta<typeof TypographyList> = {
  title: "Typography",
  component: TypographyList,
};

export default meta;

type Story = StoryObj<typeof TypographyList>;

export const Default: Story = {
  name: "Typography",
};

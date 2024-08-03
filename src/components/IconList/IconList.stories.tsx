import type { Meta, StoryObj } from "@storybook/react";
import { IconList } from "./IconList";

const meta: Meta<typeof HTMLDivElement> = {
    title: "Components/Icons",
    component: IconList,
};

export default meta;

type Story = StoryObj<typeof IconList>;

export const Default: Story = {
    name: "Icons",
}
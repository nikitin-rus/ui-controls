import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
    component: Select,
    args: {
        disabled: false,
    }
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = ({
    name: "Select",
    args: {
        selectedIndex: 0,
        options: [
            {
                name: "new",
                value: "Сначала новые",
            },
            {
                name: "old",
                value: "Сначала старые",
            }
        ],
    },
});